<script setup>
const { $event } = useNuxtApp()
const { $listen } = useNuxtApp()
const route = useRoute()
const config = useRuntimeConfig()

let hatColor = ref(0)
let pinColor = ref(0)

const sendUpdate = async (item_address, val) => {
	try {
		const res = await $fetch(item_address, {
			method: 'PATCH',
			body: { "available": val }
		})
	} catch (error) {
		console.log('updating inventory error: ', error)
	} finally {
		//console.log(res)
	}
}
const sendCompleted = async (order_Address, status) => {
	try {
		const res = await $fetch(order_Address, {
			method: 'PATCH',
			body: { "status": status }
		})
	} catch (error) {
		console.log('updating completing order error: ', error)
	} finally {
		hatColor.value = 0
		pinColor.value = 0
	}	
}
//		"https://api.jpmp.brdg.jarv.us/items"
let items  = []
let orders = []
let orderId = 0;
////// the ids of the corresponding entry items
const hatItems = [6,7,8]
const pinItems = [9,10,11]
let hatAvailable = [true, true, true]
let pinAvailable = [true,true,true]
let hats = []
const doStockCheck = 1;
const doOrderCheck = 1;


const query_stock = useRoute().query.stocktime
const query_order = useRoute().query.ordertime
const query_kiosk = useRoute().query.kiosk
let current_kiosk = config.public.kiosk;
let stockCheckFrequency = config.public.polltime_stock;
let orderCheckFrequency = config.public.polltime_order;

if (query_kiosk) {
	current_kiosk = query_kiosk
}
if (query_stock) {
	stockCheckFrequency = query_stock
}
if (query_order) {
	orderCheckFrequency = query_order
}

console.log("current kiosk: ", current_kiosk)
console.log("current stock check frequency: ", stockCheckFrequency)
console.log("current order check frequency: ", orderCheckFrequency)

$listen('cancel', (value) => {
	console.log('cancel button hit!')
	sendCompleted('https://api.jpmp.brdg.jarv.us/orders/'+orderId, "canceled")
})
$listen('restart', (value) => {
	console.log('restart button hit!')
})
$listen('ready', (value) => {
	console.log('ready button hit!')
	sendCompleted('https://api.jpmp.brdg.jarv.us/orders/'+orderId, "completed")
})
$listen('screentoggle', (state) => {
	console.log('screen status: ', state)
})
$listen('hattoggle1', (state) => {
	sendUpdate('https://api.jpmp.brdg.jarv.us/items/'+hatItems[0], state)
})
$listen('hattoggle2', (state) => {
	sendUpdate('https://api.jpmp.brdg.jarv.us/items/'+hatItems[1], state)
})
$listen('hattoggle3', (state) => {
	sendUpdate('https://api.jpmp.brdg.jarv.us/items/'+hatItems[2], state)
})
$listen('pintoggle1', (state) => {
	sendUpdate('https://api.jpmp.brdg.jarv.us/items/'+pinItems[0], state)
})
$listen('pintoggle2', (state) => {
	sendUpdate('https://api.jpmp.brdg.jarv.us/items/'+pinItems[1], state)
})
$listen('pintoggle3', (state) => {
	sendUpdate('https://api.jpmp.brdg.jarv.us/items/'+pinItems[2], state)
})

const getOrders = async () => {
	try {
		console.log("checking orders")
		orders.value = await $fetch('https://api.jpmp.brdg.jarv.us/kiosks/'+current_kiosk)
		//console.log(orders.value.currentOrder)
	} catch (error) {
		console.log('error getting orders: ', error)
	} finally {
		if (orders.value.currentOrder != null) {
			checkOrders()
		}
		wait(getOrders, orderCheckFrequency)
	}
}
let current_hat = ""
let current_pin = ""
function checkOrders() {
	//console.log(orders.value.currentOrder.items[1].item_id)
	let orderItems = orders.value.currentOrder.items
	
	for (let i = 0; i < orderItems.length; i++) {
		let currentOrderItemId = orderItems[i].item_id
		if (hatItems.includes(currentOrderItemId) == true) {
			//console.log("hat is ", currentOrderItemId)
			current_hat = currentOrderItemId
		}
		if (pinItems.includes(currentOrderItemId) == true) {
			//console.log("pin is ", currentOrderItemId)
			current_pin = currentOrderItemId
		}
	}
	let current_status = orders.value.currentOrder.status
	
	//console.log(current_status)
	if (current_status == "pending") {
		orderId = orders.value.currentOrder.id
		hatColor.value = hatItems.indexOf(current_hat)+1
		pinColor.value = pinItems.indexOf(current_pin)+1 
	}
}
const getItems = async () => {
	try {
	items.value = await $fetch('https://api.jpmp.brdg.jarv.us/items')
	//console.log(items.value.items)
	console.log("checking stock")
	}	catch (error) {
		console.log('error getting items: ', error)
	} finally {
		checkStock()
		console.log("stock check done")
		wait(getItems, stockCheckFrequency)
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function wait( callback, millis ) {
    await sleep(millis); 
    callback()
}

function fireHatToggles(indexo, available) {
	let intty = parseInt(indexo)
	intty = intty+ 1
	//console.log("Hat " + intty + " available: " + available)
		$event('hatupdate'+intty, available)
}
function firePinToggles(indexo, available) {
	let intty = parseInt(indexo)
	intty = intty+ 1
	//console.log("Pin " + intty + " available: " + available)
		$event('pinupdate'+intty, available)
}
function checkStock() {
	for (let i = 0; i < hatItems.length; i++) {
		let hat = items.value.items.find(obj => obj.id === hatItems[i])
		hatAvailable[i] = hat["available"]
		//console.log(hatAvailable)
		fireHatToggles(i, hatAvailable[i])
	}
	for (let i = 0; i < pinItems.length; i++) {
		let pin = items.value.items.find(obj => obj.id === pinItems[i])
		pinAvailable[i] = pin["available"]
		//console.log(hatAvailable)
		firePinToggles(i, pinAvailable[i])
	}
}

onMounted(() => {
	if (doStockCheck == 1) {
		getItems()
	}
	if (doOrderCheck == 1) {
		getOrders()
	}

})

</script>
<template>
<div>
	<baButtons/>
	<userView :HatColor="hatColor" :Pin="pinColor"/>
	<webCam/>
	<kioskToggles/>
</div>
</template>
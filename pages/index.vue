<script setup>
const { $event } = useNuxtApp()
const { $listen } = useNuxtApp()

$listen('user:registered', (user) => {
  console.log('A user was registered!', user)
  // do something here...
  // An interesting example for this use case could be to 
  // just register an event or a conversion in your 
  // favourite analytics tool like Google Analytics, Fathom...
})
$listen('cancel', (value) => {
	console.log('cancel button hit!')
})
$listen('restart', (value) => {
	console.log('restart button hit!')
})
$listen('ready', (value) => {
	console.log('ready button hit!')
})
$listen('screentoggle', (state) => {
	console.log('screen status: ', state)
})
$listen('hattoggle1', (state) => {
	console.log("hat1: ", state)
})
$listen('hattoggle2', (state) => {
	console.log("hat2: ", state)
})
$listen('hattoggle3', (state) => {
	console.log("hat3: ", state)
})
$listen('pintoggle1', (state) => {
	console.log("pin1: ", state)
})
$listen('pintoggle2', (state) => {
	console.log("pin2: ", state)
})
$listen('pintoggle3', (state) => {
	console.log("pin3: ", state)
})
// $event('toggle1', state)
// toggle1 = (state) => {

</script>
<template>
<div>
	<baButtons/>
	<userView/>
	<webCam/>
	<kioskToggles/>
</div>
</template>
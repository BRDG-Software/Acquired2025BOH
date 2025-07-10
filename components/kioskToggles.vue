<script setup >
//import {useEventListener} from '@vueuse/core'	
const {$event} = useNuxtApp()
const {$listen} = useNuxtApp()

let hatAuto = ref([true, true, true])
let pinAuto = ref([true, true, true])
for (let i = 1; i < 5; i++) {
	$listen('hatupdate'+i, (value) => {
		hatAuto.value[i-1] = value
	})
}
for (let i = 1; i < 5; i++) {
	$listen('pinupdate'+i, (value) => {
		pinAuto.value[i-1] = value
	})
}

const screentoggle = useTemplateRef('screentoggle')
const htoggle1 = useTemplateRef('htoggle1')
const htoggle2 = useTemplateRef('htoggle2')
const htoggle3 = useTemplateRef('htoggle3')
const ptoggle1 = useTemplateRef('ptoggle1')
const ptoggle2 = useTemplateRef('ptoggle2')
const ptoggle3 = useTemplateRef('ptoggle3')
/*
function aa() {
	console.log("oh")
	hatAuto.value[1] = true
	setTimeout(bb, 3000)
}
function bb() {
	console.log("no")
	hatAuto.value[1] = false
	setTimeout(aa, 3000)
}
*/
onMounted(() => {
	//aa()

	htoggle1.value.addEventListener('change', (event) => {
	    if (event.currentTarget.checked) {
		    $event('hattoggle1', true)
		  } else {
		    $event('hattoggle1', false)
		  }
	})
	htoggle2.value.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    $event('hattoggle2', true)
	  } else {
	    $event('hattoggle2', false)
	  }	
	})
	htoggle3.value.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    $event('hattoggle3', true)
	  } else {
	    $event('hattoggle3', false)
	  }	
	})
	ptoggle1.value.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    $event('pintoggle1', true)
	  } else {
	    $event('pintoggle1', false)
	  }	
	})
	ptoggle2.value.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    $event('pintoggle2', true)
	  } else {
	    $event('pintoggle2', false)
	  }	
	})
	ptoggle3.value.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    $event('pintoggle3', true)
	  } else {
	    $event('pintoggle3', false)
	  }	
	})
	screentoggle.value.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    $event('screentoggle', true)
	  } else {
	    $event('screentoggle', false)
	  }	
	})	
})
</script>
<template>
<div style="
	z-index:100;
	position:absolute;
	left:65.8vw;
	top: 5.5vh;
	"
	>
	<h2	style="
		top:3vh;
		left:-7vw;
		font-size:5.8vh;
	"

	> SCREEN STATUS  </h2>
	<label class="switch xl" 
	style="
		position:absolute;
		top:5vh;
		left:17.5vw;
	"
	> 
	  <input ref="screentoggle" type="checkbox" checked>
	  <span class="slider chonk"></span>
	</label>
</div>
<div class="container"
	style="
		z-index: -100;
		position:absolute;
		left:56.5vw;
		top:5.5vh;
		width:42.6vw;
		height:93.5vh;	
	"
>
	<div
	style="
		position: relative;
		display: inline-block;
		margin-left:1.4vw;
		float:right;
		top: 15vh;
		left: -24.5vw;
		"
	>
		<div class="slider-div">
			<h3> Pale Grey </h3>
		<label class="switch">
		  <input ref="htoggle1" type="checkbox" v-model="hatAuto[0]">
		  <span class="slider round"></span>
		</label>
		</div>
		<div class="slider-div">
			<h3> Heathered Charcoal </h3>
		<label class="switch"> 
		  <input ref="htoggle2" type="checkbox" v-model="hatAuto[1]">
		  <span class="slider round"></span>
		</label>
		</div>
		<div class="slider-div">
			<h3> Jet Black </h3>
		<label class="switch">
		  <input ref="htoggle3" type="checkbox" v-model="hatAuto[2]">
		  <span class="slider round"></span>
		</label>
		</div>
	</div>
	<div class="pin-container">
		<div class="pin-img-container">
		<img class="pins" src="public/icons/company.svg" />
		<img class="pins" src="public/icons/bullbear.svg" />
		<img class="pins" src="public/icons/carveouts.svg" />
		</div>
		<div class="toggle-container">
			
			<label class="switch" style="
				position:absolute;
				left:4.8vw;
			"> 
			  <input ref="ptoggle1" type="checkbox" v-model="pinAuto[0]">
			  <span class="slider round"></span>
			</label>
			
			
			<label class="switch" style="
				position:absolute;
				left:20vw;
			">
			  <input ref="ptoggle2" type="checkbox" v-model="pinAuto[1]">
			  <span class="slider round"></span>
			</label>
			
			<label class="switch" style="
				position:absolute;
				left:35.1vw;
			"> 
			  <input ref="ptoggle3" type="checkbox" v-model="pinAuto[2]">
			  <span class="slider round"></span>
			</label>
			
		</div>
	</div>
</div>
</template>
<style scoped> 
	.pin-container {
		position: absolute;
		justify-content: center;
		left: -4.8vw;
		width: 50vw;
		height:35vh;
		top: 45vh;
	}
	.pin-img-container {
		display: inline-block;
		width:50vw;
	}
	.toggle-container {
		position: absolute;
		display: inline-block;
		width:50vw;
		height:10vh;
		left:3vw;
		top:15.5vh;
	}
	.pins {
		padding-left:6.5vw;
	}
	.switch-pins {
		
	}
	.switch {
		position: absolute;
		left:31.8vw;
		top: 3.5vh;
	}
	.slider-div {
		position: relative;
		margin-bottom: -2vh;
	}
</style>
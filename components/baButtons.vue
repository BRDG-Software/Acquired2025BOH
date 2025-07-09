<script setup>
const {$event} = useNuxtApp()

const cancelbutton = useTemplateRef('cancelbutton')
const restartbutton = useTemplateRef('restartbutton')
const readybutton = useTemplateRef('readybutton')

onMounted(() => {
	cancelbutton.value.addEventListener('click', (event) => {
		$event('cancel', 1)
	})
	restartbutton.value.addEventListener('click', (event) => {
		$event('restart', 1)
	})
	readybutton.value.addEventListener('click', (event) => {
		$event('ready', 1)
	})
})

</script>
<template>
<div style="
	z-index: 10;
	position:absolute;
	display: inline-block;
	height:25vh;
	width:100%;
	top:84vh;
	left:4vw;
	z-index:9999;
">
	<button ref="cancelbutton" class="button smol" style="
		position:absolute;
		top:2vh;
		width:21vw;
		background-color: #d53f53;
	"
	> CANCEL ORDER </button>
	<button ref="restartbutton" class="button smol" style="
		position:absolute;
		top:2vh;
		left:38.5vw;
	"
	> RESTART </button>
	<button ref="readybutton" class="button large" style="
		position:absolute;
		top:-3.5vh;
		left:54.3vw;
		width:39vw;
		height:16vh;
		font-size:9vh;
	"
	> READY FOR PICKUP </button>	

</div>
</template>
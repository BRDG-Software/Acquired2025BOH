<script>
import datas from './public/json/currentSession.json'

export default {
	data() {
		return {
			datas: datas["session"]
		}
	},
	mounted() {
		//console.log(datas)
	}
}
</script>
<template>
<div class="container" style="
		z-index: -10;
		position:absolute;
		left:1vw;
		top:5.5vh;
		width:54.5vw;
		height:26vh;
		display: inline-block;
		justify-content: top;
	"
	>
	<div style="
	position:absolute; 
	top:10vh; left:1vw; 
	width: 30vw;">
	<h1> HAT COLOR:</h1>
	</div>
	<div style="
		position:absolute;
		width:15vw;
		height:30vh;
		left:8.5vw;
		top:2vh;
	">
		<h2 v-if="datas.Color == 1"> Pale Grey</h2>
		<h2 v-if="datas.Color == 2"> Heathered Charcoal</h2>
		<h2 v-if="datas.Color == 3"> Jet Black</h2>
	</div>
	<div class="colorcircle" v-if="datas.Color == 1">
		<span style="background-color: #dddbd6;">
		</span>
	</div>
	<div class="colorcircle" v-if="datas.Color == 2">
		<span style="background-color: #898f8f;">
		</span>
	</div>
	<div class="colorcircle" v-if="datas.Color == 3">
		<span style="background-color: #151717;">
		</span>
	</div>
	<div class="pin-img" v-if="datas.Pin == 1">
		<img class="pins" src="public/icons/company.svg" />
	</div>
	<div class="pin-img" v-if="datas.Pin == 2">	
		<img class="pins" src="public/icons/bullbear.svg" />
	</div>
	<div class="pin-img" v-if="datas.Pin == 3">
		<img class="pins" src="public/icons/carveouts.svg" />
	</div>
	<div style="position:absolute; top:10vh; left:35vw">	
	<h1> PIN DESIGN: {{datas.UserName}}</h1>
	</div>	
</div>
</template>
<style scoped>
.colorcircle {
	position:absolute;
	left:21vw;
	top:3.5vh;
}
span {
	height: 17vh;
	width: 17vh;
	border-radius: 50%;
	display: inline-block;
	border: 1.3vh solid red;
	border-color: white;
}
.pin-img {
	position:absolute;
	left:45vw;
	top:6vh;
}
h1 {
	font-size:5vh;
}
h2 {
	/*
	word-wrap:break-word;
	display:flex;
	justify-content:center;
	*/
	display:flex;
	align-items: center;
	text-align:center;
	justify-content:center;
	font-family:"MarsdenLight";
	font-size:7vh;
	line-height:1;
}
</style>
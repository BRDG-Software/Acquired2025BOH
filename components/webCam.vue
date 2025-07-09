<template>
	<div class="container" style="
			z-index: -10;
			position:absolute;
			left:1vw;
			top:32.5vh;
			width:54.5vw;
			height:66.5vh;
			display: inline-block;
			justify-content: top;
		"
		>
        <video id="vid" style="
        	position:relative;
        	left:2vw;
        	top: 2vh;
        "
        ></video>
	</div>



</template>

<style scoped>

        video {
            width: 50vw;
            height: 50vh;
            object-fit: cover;
        }
</style>

<script>
function initCamera() {
	let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;
            
    mediaDevices
        .getUserMedia({
            video: true,
            audio: true,
        })
        .then((stream) => {
            // Changing the source of video to current stream.
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
                	checkCamera();
        })
        .catch(alert);	
}
function checkCamera() {
	let camId = "Logi C270 HD WebCam"
	navigator.mediaDevices.enumerateDevices()
	    .then(devices => {
	        //const microphones = devices.filter(d => d.kind === 'audioinput');
	        const cameras = devices.filter(d => d.kind === 'videoinput');
	        console.log(cameras[2].label)
	        //console.log(cameras.label[2])
	        for (let i = 0; i < cameras.length; i++) {
	        	console.log(cameras[i].label)
	        	if (cameras[i].label == camId) {
	        		console.log("CAMERA FOUND")
	        	}
	        }
	    });
}
export default {
    mounted() {

    	initCamera();

    	/*
        let video = document.getElementById("vid");
        let mediaDevices = navigator.mediaDevices;
        vid.muted = true;
            // Accessing the user camera and video.
            mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    // Changing the source of video to current stream.
                    video.srcObject = stream;
                    video.addEventListener("loadedmetadata", () => {
                        video.play();
                    });
                })
                .catch(alert);
                */
  	}
 }
</script>
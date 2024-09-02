const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media stream, pass to video element the play

async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        //catch error here
        console.log('whoops, error here : ', error)
    }
}

buttonElement.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    
    //start pic in pic
    await videoElement.requestPictureInPicture();

    //reset button
    button.disabled = false;

});

//on load
selectMediaStream();
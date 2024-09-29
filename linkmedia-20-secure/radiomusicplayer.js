   const audioElement = document.getElementById('audio1');
    const playButton = document.getElementById('play1');
    const stopButton = document.getElementById('stop1');
    const volumeInput = document.getElementById('volume1');

    playButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });

    stopButton.addEventListener('click', () => {
        audioElement.pause();
        audioElement.currentTime = 0;
    });

    volumeInput.addEventListener('input', () => {
        audioElement.volume = volumeInput.value;
    });
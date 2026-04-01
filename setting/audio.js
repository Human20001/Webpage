function initAudio() {

    document.addEventListener('DOMContentLoaded', () => {
        const targetDiv = document.querySelector('.target-div');
        const audio = document.getElementById('myAudio');

        // Function to show div and play sound
        function revealAndPlay() {
            audio.currentTime = 0; // Resets audio to start
            targetDiv.style.display = 'block'; // Makes div visible
            audio.play();                      // Plays the audio
        }

        // Trigger after 10 seconds
        setTimeout(revealAndPlay, 10000);
    });
}
function showNotificationOnce(notificationData) {
    const targetDiv = document.querySelector('.target-div');
    const audio = document.getElementById('myAudio');

    // Prevent multiple plays for the same notification
    if (targetDiv.dataset.shown === "true") return;

    // Update div content with notification info
    targetDiv.textContent = notificationData.message;
    targetDiv.style.display = 'block';

    // Play sound
    audio.currentTime = 0;
    audio.play().catch(err => {
        console.log("Autoplay blocked:", err);
        
    });

    // Mark as shown
    targetDiv.dataset.shown = "true";
}
export { showNotificationOnce, initAudio };
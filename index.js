import { run } from './theme/slides.js';
import { initAudio, showNotificationOnce } from './setting/audio.js';
import { obj } from './theme/icon.js';
function createIcon(name) {
    const container = document.getElementById(name);
    if (obj[name]) {
        container.innerHTML = obj[name];
    } else {
        container.innerHTML = `<p>Icon not found</p>`;
    }
}
function main() {
createIcon('menu');
createIcon('notification_unread');
createIcon('lady');

}main();
showNotificationOnce({ message: "Welcome to our bank website!" });
initAudio();
run(); 
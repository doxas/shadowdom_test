
import ShadowCanvas from './shadow.js';

window.addEventListener('load', () => {
    let s = document.createElement('shadow-canvas');
    console.log(s.getRect());

    document.body.appendChild(s);
}, false);


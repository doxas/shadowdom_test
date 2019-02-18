
export default class ShadowCanvas extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.c = document.createElement('canvas');
        this.shadow.appendChild(this.c);
    }
    getRect(){
        return this.getBoundingClientRect();
    }
}

customElements.define('shadow-canvas', ShadowCanvas);


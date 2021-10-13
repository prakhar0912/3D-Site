import gsap from "gsap";

const lerp = (a, b, n) => (1 - n) * a + n * b;
const body = document.body;

const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return { x : posx, y : posy }
}

class Cursor {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
        this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
        this.bounds = {dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect()};
        this.scale = 1;
        this.opacity = 1;
        this.mousePos = {x:0, y:0};
        this.lastMousePos = {dot: {x:0, y:0}, circle: {x:0, y:0}};
        this.lastScale = 1;
        this.blowAnimation = null
        this.initEvents();
        requestAnimationFrame(() => this.render());
    }
    initEvents() {
        window.addEventListener('mousemove', ev => {
            this.mousePos = getMousePos(ev)
            // this.render()
        });
    }
    render() {
        this.lastMousePos.dot.x = this.mousePos.x - this.bounds.dot.width/2
        this.lastMousePos.dot.y = this.mousePos.y - this.bounds.dot.height/2
        this.lastMousePos.circle.x = this.mousePos.x - this.bounds.circle.width/2
        this.lastMousePos.circle.y = this.mousePos.y - this.bounds.circle.height/2
        this.lastScale = this.scale;

        // gsap.set()
        gsap.set(this.DOM.el, {
            x: this.lastMousePos.dot.x,
            y: this.lastMousePos.dot.y
        })
        requestAnimationFrame(() => this.render())
    }

    killBlow() {
        if(this.blowAnimation){
            this.blowAnimation.kill()
        }
    }

    blowUp() {
        this.killBlow()
        this.blowAnimation = gsap.to(this.DOM.dot, {
            height: "50px", width: "50px", duration: 2.8
        })
    }

    blowDown() {
        this.killBlow()
        this.blowAnimation = gsap.to(this.DOM.dot, {
            height: "8px", width: "8px", duration: 1.2
        })
    }

    enter() {
        this.scale = 1.5;
        this.DOM.dot.style.display = 'none';
    }
    leave() {
        this.scale = 1;
        this.DOM.dot.style.display = '';
    }
}

export { Cursor };
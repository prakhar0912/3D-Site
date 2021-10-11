import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { slidesData } from "./slidesData";


const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector(".cursor"));

const slides = new Slides(slidesData, {
  onTitleClickStart: () => {
    showcase.titleClickStart()
    showcase.inTab = true
  },
  onTitleClickEnd: () => {
    showcase.titleClickEnd()
  },
});
const showcase = new Showcase(slidesData, {
  onActiveIndexChange: activeIndex => {
    slides.onActiveIndexChange(activeIndex);
  },
  onIndexChange: index => {
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    cursor.enter();
    slides.appear();
  },
  onClickStart: ({ activeIndex }) => {
    cursor.enter();
    slides.disperse(activeIndex)
    document.querySelector('.content').style.overflowY = 'auto'
  },
  onClickEnd: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex)
    showcase.inTab = false
  },
  onZoomOutFinish: ({ activeIndex }) => { },
  onFullscreenStart: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => { },
  startTransitionPage: (from, to) => {
    slides.startTransitionParts(from, to)
  },
  endTransitionPage: (from, to) => {
    slides.endTransitionParts(from, to)
  },
  updateNavPart: (index) => {
    nav.updatePart(index)
  },
  blowUp: () => {
    cursor.blowUp()
  },
  blowDown: () => {
    cursor.blowDown()
  }
});

const nav = new Nav({
  onSectionSelected: (index) => {
    showcase.startMoveToSection(showcase.part, index)
  }
})

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function () {
  showcase.onResize();
});

window.addEventListener("mousemove", function (ev) {
  showcase.onMouseMove(ev);
});

document.querySelector("button.nextbtn").addEventListener("mousedown", () => {
  showcase.inTransition = true
  showcase.startMoveToSection(showcase.part, showcase.part + 1)
  cursor.blowUp()
})

document.querySelector("button.nextbtn").addEventListener("touchstart", () => {
  showcase.inTransition = true
  showcase.startMoveToSection(showcase.part, showcase.part + 1)
})

document.querySelector("button.nextbtn").addEventListener("mouseup", () => {
  showcase.endMoveToSection(showcase.part, showcase.part + 1)
  cursor.blowDown()
})

document.querySelector("button.nextbtn").addEventListener("touchend", () => {
  showcase.endMoveToSection(showcase.part, showcase.part + 1)
})

document.querySelector("button.prevbtn").addEventListener("mousedown", () => {
  showcase.inTransition = true
  showcase.startMoveToSection(showcase.part, showcase.part - 1)
  cursor.blowUp()
})

document.querySelector("button.prevbtn").addEventListener("touchstart", () => {
  showcase.inTransition = true
  showcase.startMoveToSection(showcase.part, showcase.part - 1)
})


document.querySelector("button.prevbtn").addEventListener("mouseup", () => {
  showcase.endMoveToSection(showcase.part, showcase.part - 1)
  cursor.blowDown()
})

document.querySelector("button.prevbtn").addEventListener("touchend", () => {
  showcase.endMoveToSection(showcase.part, showcase.part - 1)
})


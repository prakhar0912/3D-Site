import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { slidesData } from "./slidesData";
// import Contact from "./Contact";


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
  onPart3: () => {
    slides.showPart3()
  },
  onHidePart3: () => {
    slides.hidePart3()
  },
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
    // document.querySelector('#app').style.overflow = 'auto'
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
  },
  onHidePart3: () => {
    slides.hidePart3()
  }
})

showcase.mount(container);
slides.mount(document.body);
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
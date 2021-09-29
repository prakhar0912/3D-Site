import gsap from "gsap"


const createEleWithClass = (tag, className) => {
  const ele = document.createElement(tag);
  ele.className = className;
  return ele;
};

class Slides {
  constructor(data, options = {}) {
    this.data = data;
    this.container = createEleWithClass("div", "slides");
    this.currentIdx = 0;
    this.slides = this.data.map((entry, index) => {
      const slide = createEleWithClass("div", "slide");
      const container = createEleWithClass("div", "slide-container")
      const header = createEleWithClass("div", "slide-header")
      const title = createEleWithClass("div", "slide-title");
      const meta = createEleWithClass("p", "slide-meta");
      const more = createEleWithClass("a", "slide-more");
      const desc = createEleWithClass("div", "slide-desc")
      const img = createEleWithClass("img", "desc-img")
      more.href = "#";
      img.src = entry.image
      slide.classList.add(index !== 0 ? "next" : "show-meta");
      meta.innerHTML = entry.meta;
      title.innerHTML = entry.title;
      more.innerHTML = 'Click Here to Read more';
      desc.innerHTML = entry.desc
      slide.appendChild(container)
      container.appendChild(header)
      header.appendChild(title);
      header.appendChild(more);
      container.appendChild(desc)
      this.container.appendChild(slide);
      return slide;
    });
    this.options = options
    // this.setupHeight()
    this.addClickEvents()
  }
  mount(container) {
    container.appendChild(this.container);
  }
  addClickEvents() {
    this.slides.forEach((slide) => {
      slide.querySelector('.slide-more').addEventListener('click', () => {
        this.options.onTitleClickStart()
      })
      slide.querySelector('.slide-more').addEventListener('touchend', () => {
        this.options.onTitleClickStart()
      })
    })
    this.slides.forEach((slide) => {
      slide.querySelector('.close').addEventListener('click', () => {
        this.options.onTitleClickEnd()
      })
      slide.querySelector('.close').addEventListener('touchend', () => {
        this.options.onTitleClickEnd()
      })
    })
  }
  showDesc(activeIndex) {
    this.currentIdx = activeIndex;
    let header = this.slides[this.currentIdx].querySelectorAll('.slide-header')
    let desc = this.slides[this.currentIdx].querySelector('.slide-desc')
    let tl = gsap.timeline()
    tl.to(header, {
      height: "0", duration: 0.5, opacity: 0, onComplete: () => {
        this.slides.forEach((slide, i) => {
          if (i != this.currentIdx) {
            slide.style.display = 'none'
          }
        })
        desc.style.height = 'auto'
        this.slides[this.currentIdx].style.top = 0;
        this.slides[this.currentIdx].style.left = 0;
        this.slides[this.currentIdx].style.position = 'absolute'
        this.slides[this.currentIdx].style.display = 'block'
      }
    })
    tl.to(desc, { opacity: 1, duration: 0.1 })
  }
  hideDesc(activeIndex) {
    this.currentIdx = activeIndex;
    let desc = this.slides[this.currentIdx].querySelector('.slide-desc')
    let header = this.slides[this.currentIdx].querySelectorAll('.slide-header')
    let tl = gsap.timeline()
    tl.to(desc, {
      opacity: 0, duration: 1, height: 0, onComplete: () => {
        this.slides.forEach((slide, i) => {
          if (i != this.currentIdx) {
            slide.style.display = 'grid'
          }
        })
        this.slides[this.currentIdx].style.top = 'auto';
        this.slides[this.currentIdx].style.left = 'auto';
        this.slides[this.currentIdx].style.position = 'relative'
        this.slides[this.currentIdx].style.display = 'grid'
        desc.style.height = '0'
      }
    })
    tl.to(header, { opacity: 1, height: "auto",  duration: 2 })
  }
  onActiveIndexChange(activeIndex) {
    this.currentIdx = activeIndex;
    for (let i = 0; i < this.slides.length; i++) {
      if (activeIndex === i) {
        this.slides[i].classList.remove("next");
        this.slides[i].classList.remove("prev");
      } else {
        if (activeIndex > i) {
          this.slides[i].classList.remove("next");
          this.slides[i].classList.add("prev");
        } else {
          this.slides[i].classList.add("next");
          this.slides[i].classList.remove("prev");
        }
      }
    }
  }
  onMove(indexFloat) {
    this.container.style.transform = `translateY(${(indexFloat * 100) /
      this.slides.length}%)`;
  }
  appear() {
    this.container.classList.add("scrolling");
    this.slides[this.currentIdx].classList.remove("show-meta");
  }
  disperse(activeIndex) {
    //this.currentIdx = activeIndex;
    this.slides[this.currentIdx].classList.add("show-meta");
    this.container.classList.remove("scrolling");
    for (let index = 0; index < this.data.length; index++) {
      if (index > activeIndex) {
        this.slides[index].classList.add("next");
        this.slides[index].classList.remove("prev");
      } else if (index < activeIndex) {
        this.slides[index].classList.remove("next");
        this.slides[index].classList.add("prev");
      } else {
        this.slides[index].classList.remove("next");
        this.slides[index].classList.remove("prev");
      }
    }
  }
}

export {
  Slides
};
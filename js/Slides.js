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
    this.part = 0
    this.masterSlides = []
    this.slides = this.createSlides()
    this.options = options
    this.tl = null;
  }

  createSlides() {
    let slides = []
    for (let i = 0; i < this.data.length; i++) {
      let Mastercontainer = createEleWithClass("div", "master-slide-container hide")
      if (i == 0) {
        Mastercontainer = createEleWithClass("div", "master-slide-container current")
      }
      let innerSlides = []
      for (let j = 0; j < this.data[i].length; j++) {

        const slide = createEleWithClass("div", "slide");
        slide.classList.add(j !== 0 && i === 1 ? "next" : "show-meta");
        slide.innerHTML = this.data[i][j].content
        Mastercontainer.appendChild(slide);
        innerSlides.push(slide)
      }
      this.masterSlides.push(Mastercontainer)
      slides.push(innerSlides)
      this.container.appendChild(Mastercontainer)
    }
    return slides
  }

  updatePart(part) {
    this.part = part
  }

  mount(container) {
    container.appendChild(this.container);
    this.addClickEvents()
  }

  startTransitionParts(from, to) {
    if (this.tl) {
      this.tl.kill()
    }
    this.masterSlides[to].classList.remove('hide')
    this.tl = gsap.timeline()
    this.tl.to(this.masterSlides[from], {
      opacity: 0, duration: 2.3, onComplete: () => {
        this.masterSlides[from].classList.remove('current')
        this.masterSlides[from].classList.add('hide')
      }
    })
    this.tl.to(this.masterSlides[to], {
      opacity: 1, duration: 0.7, delay: -0.1, onComplete: () => {
        console.log('here')
        this.masterSlides[to].classList.add('current')
        this.part = to
      }
    })
  }

  endTransitionParts(from, to) {
    if (this.tl) {
      console.log('kill')
      this.tl.kill()
    }
    this.masterSlides[to].classList.add('hide')
    this.tl = gsap.timeline()
    this.tl.to(this.masterSlides[to], {
      opacity: 0, duration: 0.7, onComplete: () => {
        this.masterSlides[to].classList.remove('current')
      }
    })
    this.tl.to(this.masterSlides[from], {
      opacity: 1, duration: 0.7, delay: -0.1, onComplete: () => {
        this.masterSlides[from].classList.add('current')
        this.part = from
      }
    })

  }


  addClickEvents() {
    this.slides[1].forEach((slide) => {
      slide.querySelector('.slide-more').addEventListener('click', () => {
        this.options.onTitleClickStart()
        this.showDesc()
      })
      slide.querySelector('.slide-more').addEventListener('touchend', () => {
        this.options.onTitleClickStart()
        this.showDesc()
      })
    })
    this.slides[1].forEach((slide) => {
      slide.querySelector('.close').addEventListener('click', () => {
        this.options.onTitleClickEnd()
        this.hideDesc()
      })
      slide.querySelector('.close').addEventListener('touchend', () => {
        this.options.onTitleClickEnd()
        this.hideDesc()
      })
    })
  }

  showPart3() {
    let header = this.slides[2][0].querySelector('.slide-header')
    let desc = this.slides[2][0].querySelector('.slide-desc')
    let tl = gsap.timeline()
    tl.to(header, {
      height: 0, duration: 0.5, opacity: 0, onComplete: () => {
        desc.style.height = 'auto'
        this.slides[2][0].style.overflow = 'auto'
        this.slides[2][0].style.pointerEvents = 'all'
      }
    })
    tl.to(desc, {
      opacity: 1, duration: 0.1, height: 'auto'
    })
  }

  hidePart3() {
    let desc = this.slides[2][0].querySelector('.slide-desc')
    let header = this.slides[2][0].querySelectorAll('.slide-header')
    let tl = gsap.timeline()
    tl.to(desc, {
      opacity: 0, duration: 0.3, height: 0, onComplete: () => {
        this.slides[2][0].style.pointerEvents = 'none'
        this.slides[2][0].style.overflow = 'hidden'
      }
    })
    tl.to(header, { opacity: 1, height: "auto", duration: 1, })
  }


  showDesc(activeIndex) {
    let header = this.slides[this.part][this.currentIdx].querySelector('.slide-header')
    let desc = this.slides[this.part][this.currentIdx].querySelector('.slide-desc')
    let tl = gsap.timeline()
    tl.to(header, {
      height: 0, duration: 0.5, opacity: 0, onComplete: () => {
        desc.style.height = 'auto'
        this.slides[this.part][this.currentIdx].style.overflow = 'auto'
        this.slides[this.part][this.currentIdx].style.pointerEvents = 'all'
      }
    })
    tl.to(desc, {
      opacity: 1, duration: 0.1, height: 'auto'
    })
  }
  hideDesc(activeIndex) {
    let desc = this.slides[this.part][this.currentIdx].querySelector('.slide-desc')
    let header = this.slides[this.part][this.currentIdx].querySelectorAll('.slide-header')
    let tl = gsap.timeline()
    tl.to(desc, {
      opacity: 0, duration: 0.3, height: 0, onComplete: () => {
        this.slides[this.part][this.currentIdx].style.pointerEvents = 'none'
        this.slides[this.part][this.currentIdx].style.overflow = 'hidden'
      }
    })
    tl.to(header, { opacity: 1, height: "auto", duration: 1, })
  }
  onActiveIndexChange(activeIndex) {
    this.currentIdx = activeIndex;
    for (let i = 0; i < this.slides[1].length; i++) {
      if (activeIndex === i) {
        this.slides[1][i].classList.remove("next");
        this.slides[1][i].classList.remove("prev");
      } else {
        if (activeIndex > i) {
          this.slides[1][i].classList.remove("next");
          this.slides[this.part][i].classList.add("prev");
        } else {
          this.slides[1][i].classList.add("next");
          this.slides[1][i].classList.remove("prev");
        }
      }
    }
  }
  onMove(indexFloat) {
    this.masterSlides[this.part].style.transform = `translateY(${(indexFloat * 100)}vh)`;
  }
  appear() {
    this.container.classList.add("scrolling");
    this.slides[this.part][this.currentIdx].classList.remove("show-meta");
  }
  disperse(activeIndex) {
    //this.currentIdx = activeIndex;
    if (this.part === 1) {
      this.slides[1][this.currentIdx].classList.add("show-meta");
      this.container.classList.remove("scrolling");
      for (let index = 0; index < this.data[1].length; index++) {
        if (index > activeIndex) {
          this.slides[1][index].classList.add("next");
          this.slides[1][index].classList.remove("prev");
        } else if (index < activeIndex) {
          this.slides[1][index].classList.remove("next");
          this.slides[1][index].classList.add("prev");
        } else {
          this.slides[1][index].classList.remove("next");
          this.slides[1][index].classList.remove("prev");
        }
      }
    }
  }
}

export {
  Slides
};
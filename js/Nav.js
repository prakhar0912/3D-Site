import gsap from "gsap"


class Nav {
    constructor(options) {
        this.navEle = document.querySelector(".nav")
        this.navContainer = this.navEle.parentElement
        this.navDisplayed = false
        this.navAnimation = null
        this.lettersAnimations = []
        this.inTransition = false
        this.textWrappers = document.querySelectorAll('.text')
        this.options = options
        this.part = 0
        this.addListeners()
        this.setLetters()
    }

    killAnimation() {
        if (this.navAnimation) {
            this.navAnimation.kill()
        }
    }

    updatePart(index) {
        this.part = index
        this.textWrappers.forEach((ele, i) => {
            if(i === this.part){
                ele.classList.add("active")
            }
            else{
                ele.classList.remove("active")
            }
        })
    }

    showNav() {
        this.killAnimation()

        this.navAnimation = gsap.timeline()
        this.navAnimation.to(this.navEle, {
            clipPath: "ellipse(200% 110% at 50% 0%)",
            duration: 0.6,
            onComplete: () => {
                this.navDisplayed = true
                this.navContainer.style.pointerEvents = "all"
            }
        })
    }

    hideNav() {
        this.killAnimation()
        this.navAnimation = gsap.timeline()
        this.navAnimation.to(this.navEle, {
            clipPath: "ellipse(0% 0% at 50% 0%)",
            duration: 0.6,
            onComplete: () => {
                this.navDisplayed = false
                this.navContainer.style.pointerEvents = "none"
            }
        })
    }

    addListeners() {
        document.querySelector(".burger").addEventListener("click", () => {
            if (this.navDisplayed === false) {
                this.navDisplayed = true
                this.showNav()
            }
            else {
                this.navDisplayed = false
                this.hideNav()
            }
        })

        this.textWrappers.forEach((textWrapper, i) => {
            textWrapper.addEventListener('mouseenter', () => {
                this.lettersAnimation(textWrapper)
            })
            textWrapper.addEventListener('click', () => {
                this.moveToSection(i)
            })
            textWrapper.addEventListener('touchend', () => {
                this.moveToSection(i)
            })
        })
    }

    moveToSection(index) {
        this.textWrappers.forEach((ele, i) => {
            if(i === index){
                ele.classList.add("active")
            }
            else{
                ele.classList.remove("active")
            }
        })
        this.hideNav()
        if(index === 3){
            index = 2
        }
        this.part = index
        this.options.onSectionSelected(index)
    }

    setLetters() {
        this.textWrappers.forEach(textWrapper => {
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
        })
    }

    lettersAnimation(ele) {
        let letters = ele.querySelectorAll(".letter")
        letters.forEach((el, i) => {
            gsap.fromTo(el, {
                scale: 2,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                translateZ: 0,
                duration: 0.3,
                delay: i * 0.05,
                ease: "power4.in"
            })
        })

    }
}

export { Nav };
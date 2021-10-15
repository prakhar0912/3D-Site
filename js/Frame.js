import gsap from "gsap"


class Frame {
    constructor(options, mobileDevice) {
        if (!mobileDevice) {
            this.options = options
            this.sectionContainer = document.querySelector('.current-section')
            this.sections = this.sectionContainer.querySelectorAll('p')
            this.nonActiveSections = this.sectionContainer.querySelectorAll('p:not(.active-section)')
            this.part = 0
            this.sectionShown = true
            this.pauseSectionActivity = false
            this.mobile = false
            this.addNextPrevListeners()
            this.addSectionListeners()
        }
        else{
            this.mobile = true
        }
    }

    addSectionListeners() {
        this.sectionContainer.addEventListener('mouseenter', () => {
            this.showSection()
        })
        this.sectionContainer.addEventListener('mouseleave', () => {
            this.hideSection()
        })
        this.sections.forEach((ele, i) => {
            ele.addEventListener('click', () => {
                this.pauseSectionActivity = true
                if (i === 3) {
                    this.options.moveToSection(2)
                }
                else {
                    this.options.moveToSection(i)
                }
            })
        })
    }

    addNextPrevListeners() {
        document.querySelector("button.nextbtn").addEventListener("mousedown", () => {
            this.options.nextSection('down', false)
        })

        document.querySelector("button.nextbtn").addEventListener("touchstart", () => {
            this.options.nextSection('down', true)
        })

        document.querySelector("button.nextbtn").addEventListener("mouseup", () => {
            this.options.nextSection('up', false)
        })

        document.querySelector("button.nextbtn").addEventListener("touchend", () => {
            this.options.nextSection('up', true)
        })

        document.querySelector("button.prevbtn").addEventListener("mousedown", () => {
            this.options.prevSection('down', false)
        })

        document.querySelector("button.prevbtn").addEventListener("touchstart", () => {
            this.options.prevSection('down', true)
        })


        document.querySelector("button.prevbtn").addEventListener("mouseup", () => {
            this.options.prevSection('up', false)
        })

        document.querySelector("button.prevbtn").addEventListener("touchend", () => {
            this.options.prevSection('up', true)
        })
    }

    updatePart(index) {
        if(!this.mobile){
            this.part = index
            this.paintSection()
        }
    }


    showSection(nextFunc) {
        // console.log(this.sectionShown, this.pauseSectionActivity)
        if (this.sectionShown && !nextFunc || this.pauseSectionActivity) {
            return
        }
        if (this.sectionAnim) {
            this.sectionAnim.kill()
        }
        this.sectionAnime = gsap.to(this.sections, {
            opacity: 1, duration: 0.3, width: '100%', marginRight: '25px', onComplete: () => {
                this.sectionShown = true
                console.log(nextFunc)
                if(nextFunc){
                    this.hideSection()
                }
            }
        })
    }


    hideSection() {
        if (!this.sectionShown || this.pauseSectionActivity) {
            return
        }
        if (this.sectionAnim) {
            this.sectionAnim.kill()
        }
        this.sectionAnime = gsap.to(this.nonActiveSections, {
            opacity: 0, duration: 0.3, width: 0, marginRight: 0, onComplete: () => {
                this.sectionShown = false
            }
        })
    }

    paintSection() {
        this.sections.forEach((ele, i) => {
            if (i === this.part) {
                ele.classList.add("active-section")
            }
            else {
                ele.classList.remove("active-section")
            }
            if (i === this.sections.length - 1) {
                this.nonActiveSections = this.sectionContainer.querySelectorAll('p:not(.active-section)')
                this.pauseSectionActivity = false
                console.log('here')
                this.showSection(true)
            }
        })
    }
}

export { Frame }
import Sketch from './module'

let speed = 0
let position = 0
let rounded = 0
let block = document.querySelector('.block')
let wrap = document.querySelector('.wrap')
let elems = [...document.querySelectorAll('.n')]
let ps = document.querySelectorAll('.text > div')

let sketch = new Sketch()

window.addEventListener('wheel', (e) => {
    speed += e.deltaY*0.0003
})

let objs = Array(5).fill({dist: 0})

let raf = () => {
    position += speed
    speed *= 0.8
    if(position >= 0.3){
        speed *= 0.3
        position = 0.3
    }
    if(position < -4.3){
        speed *= 0.3
        position = -4.3
    }
    objs.forEach((o, i) => {
        o.dist = Math.min(Math.abs(position - (-i)), 1)
        o.dist = 1 - o.dist**2

        elems[i].style.transform = `scale(${1 + 0.1*o.dist})`
        let scale = 1+0.1*o.dist
        sketch.meshes[i].scale.set(scale, scale, scale)
    })
    

    rounded = Math.round(position)
    ps.forEach((p, i) => {
        if(-rounded == i){
            ps.forEach(pp => pp.style.display = 'none')
            p.style.display = 'block'
        }
    })
    let diff = rounded - position
    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015

    block.style.transform = `translateY(${-position*100}px)`
    sketch.meshes.forEach((mesh, i) => {
        mesh.position.y = -(i*1.2) - position*1.2
        
    })
    window.requestAnimationFrame(raf)
}

raf()
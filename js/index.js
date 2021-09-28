import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector(".cursor"));
const slidesData = [
  {
    image: image1,
    title: "<p>ADSnURL</p><p>App Design</p>",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus?"
  },
  {
    image: image2,
    title: "<p>vegaan</p><p>Branding</p>",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus?"
  },
  {
    image: image3,
    title: "<p>KathKIN</p><p>Branding</p>",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus?"
  },
  {
    image: image4,
    title: "<p>PINK LEAF</p><p>Packaging</p>",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus?"
  },
  {
    image: image5,
    title: "<p class='long'>THE corporate shirt</p><p>Packaging</p>",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id, aspernatur ipsam suscipit quae nam laborum, distinctio ipsum adipisci deleniti quam excepturi itaque, molestias ducimus culpa facilis rem praesentium necessitatibus?"
  }
];

const slides = new Slides(slidesData, {
  onTitleClickStart: () => {
    showcase.titleClickStart()
    showcase.inTab = true
  },
  onTitleClickEnd: () => {
    showcase.titleClickEnd()
    showcase.inTab = false
  }
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
    slides.showDesc(activeIndex)
    document.querySelector('.content').style.overflowY = 'auto'
  },
  onClickEnd: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex)
    slides.hideDesc(activeIndex)
    document.querySelector('.content').style.overflow = 'hidden'
  },
  onZoomOutFinish: ({ activeIndex }) => {},
  onFullscreenStart: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => {}
});

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function() {
  showcase.onResize();
});

window.addEventListener("mousemove", function(ev) {
  showcase.onMouseMove(ev);
});

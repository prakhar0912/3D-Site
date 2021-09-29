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
    desc: `
    <div class="desc-container">
    <h3>Description</h3>
    <img src="${image1}" alt="" class="desc-img">
    <div class="desc-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet harum, reprehenderit alias dicta obcaecati similique dolorum ipsa porro quod repellat? Commodi officiis sapiente id impedit voluptate omnis vero quod!Lorem
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque eos harum? Aperiam necessitatibus quo aliquid! Eligendi sint commodi blanditiis. Labore sed quasi, blanditiis odit dolor reiciendis eaque quod magni.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, sint repellat, aut quo et culpa, harum explicabo natus quidem eum voluptatem cupiditate dolore vel repellendus perspiciatis dolorum quibusdam eaque?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam nesciunt sed omnis! Optio, rerum. Consequatur corrupti, ad, id, dicta ea laboriosam cupiditate a quo non obcaecati itaque quisquam tempora!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo repellat deleniti harum natus iste repudiandae voluptatum odio labore quasi unde, porro velit qui sapiente illo aliquam, vel dicta nostrum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis dolores. Facilis fuga quo laborum optio harum omnis qui magnam asperiores, itaque tempore, eos error minima! Explicabo eius quo iure.
    </div>
    <p class='close'>Close</p>

  </div>
    `
  },
  {
    image: image2,
    title: "<p>vegaan</p><p>Branding</p>",
    desc: `
    <div class="desc-container">
    <h3>Description</h3>
    <img src="${image2}" alt="" class="desc-img">
    <div class="desc-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet harum, reprehenderit alias dicta obcaecati similique dolorum ipsa porro quod repellat? Commodi officiis sapiente id impedit voluptate omnis vero quod!Lorem
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque eos harum? Aperiam necessitatibus quo aliquid! Eligendi sint commodi blanditiis. Labore sed quasi, blanditiis odit dolor reiciendis eaque quod magni.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, sint repellat, aut quo et culpa, harum explicabo natus quidem eum voluptatem cupiditate dolore vel repellendus perspiciatis dolorum quibusdam eaque?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam nesciunt sed omnis! Optio, rerum. Consequatur corrupti, ad, id, dicta ea laboriosam cupiditate a quo non obcaecati itaque quisquam tempora!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo repellat deleniti harum natus iste repudiandae voluptatum odio labore quasi unde, porro velit qui sapiente illo aliquam, vel dicta nostrum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis dolores. Facilis fuga quo laborum optio harum omnis qui magnam asperiores, itaque tempore, eos error minima! Explicabo eius quo iure.
    </div>
    <p class='close'>Close</p>

  </div>
    `
  },
  {
    image: image3,
    title: "<p>KathKIN</p><p>Branding</p>",
    desc: `
    <div class="desc-container">
    <h3>Description</h3>
    <img src="${image3}" alt="" class="desc-img">
    <div class="desc-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet harum, reprehenderit alias dicta obcaecati similique dolorum ipsa porro quod repellat? Commodi officiis sapiente id impedit voluptate omnis vero quod!Lorem
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque eos harum? Aperiam necessitatibus quo aliquid! Eligendi sint commodi blanditiis. Labore sed quasi, blanditiis odit dolor reiciendis eaque quod magni.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, sint repellat, aut quo et culpa, harum explicabo natus quidem eum voluptatem cupiditate dolore vel repellendus perspiciatis dolorum quibusdam eaque?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam nesciunt sed omnis! Optio, rerum. Consequatur corrupti, ad, id, dicta ea laboriosam cupiditate a quo non obcaecati itaque quisquam tempora!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo repellat deleniti harum natus iste repudiandae voluptatum odio labore quasi unde, porro velit qui sapiente illo aliquam, vel dicta nostrum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis dolores. Facilis fuga quo laborum optio harum omnis qui magnam asperiores, itaque tempore, eos error minima! Explicabo eius quo iure.
    </div>
    <p class='close'>Close</p>

  </div>
    `
  },
  {
    image: image4,
    title: "<p>PINK LEAF</p><p>Packaging</p>",
    desc: `
    <div class="desc-container">
    <h3>Description</h3>
    <img src="${image4}" alt="" class="desc-img">
    <div class="desc-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet harum, reprehenderit alias dicta obcaecati similique dolorum ipsa porro quod repellat? Commodi officiis sapiente id impedit voluptate omnis vero quod!Lorem
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque eos harum? Aperiam necessitatibus quo aliquid! Eligendi sint commodi blanditiis. Labore sed quasi, blanditiis odit dolor reiciendis eaque quod magni.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, sint repellat, aut quo et culpa, harum explicabo natus quidem eum voluptatem cupiditate dolore vel repellendus perspiciatis dolorum quibusdam eaque?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam nesciunt sed omnis! Optio, rerum. Consequatur corrupti, ad, id, dicta ea laboriosam cupiditate a quo non obcaecati itaque quisquam tempora!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo repellat deleniti harum natus iste repudiandae voluptatum odio labore quasi unde, porro velit qui sapiente illo aliquam, vel dicta nostrum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis dolores. Facilis fuga quo laborum optio harum omnis qui magnam asperiores, itaque tempore, eos error minima! Explicabo eius quo iure.
    </div>
    <p class='close'>Close</p>

  </div>
    `
  },
  {
    image: image5,
    title: "<p class='long'>THE corporate shirt</p><p class='ye'>Packaging</p>",
    desc: `
    <div class="desc-container">
    <h3>Description</h3>
    <img src="${image5}" alt="" class="desc-img">
    <div class="desc-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet harum, reprehenderit alias dicta obcaecati similique dolorum ipsa porro quod repellat? Commodi officiis sapiente id impedit voluptate omnis vero quod!Lorem
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque eos harum? Aperiam necessitatibus quo aliquid! Eligendi sint commodi blanditiis. Labore sed quasi, blanditiis odit dolor reiciendis eaque quod magni.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, sint repellat, aut quo et culpa, harum explicabo natus quidem eum voluptatem cupiditate dolore vel repellendus perspiciatis dolorum quibusdam eaque?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam nesciunt sed omnis! Optio, rerum. Consequatur corrupti, ad, id, dicta ea laboriosam cupiditate a quo non obcaecati itaque quisquam tempora!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem explicabo repellat deleniti harum natus iste repudiandae voluptatum odio labore quasi unde, porro velit qui sapiente illo aliquam, vel dicta nostrum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis dolores. Facilis fuga quo laborum optio harum omnis qui magnam asperiores, itaque tempore, eos error minima! Explicabo eius quo iure.
    </div>
    <p class='close'>Close</p>
  </div>
    `
  }
];

const slides = new Slides(slidesData, {
  onTitleClickStart: () => {
    showcase.titleClickStart()
    showcase.inTab = true
  },
  onTitleClickEnd: () => {
    showcase.titleClickEnd()
    console.log('bb')
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
    document.querySelector('.content').style.overflowY = 'auto'
  },
  onClickEnd: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex)
    document.querySelector('.content').style.overflow = 'hidden'
    showcase.inTab = false
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

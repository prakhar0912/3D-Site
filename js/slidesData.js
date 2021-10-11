import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import landingImage from "../images/landing.jpg"
import landingLogo from "../images/landingLogo.svg"
import landingStudio from "../images/studio.svg"

const slidesData = [
    [
        {
            image: landingImage,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <img src="${landingLogo}">
              <img src="${landingStudio}">
            </div>
            <p style="text-align: center;">Click and Hold to Progress!</p>
          </div>
        </div>
        `,
            position: 10
        },
    ],
    [
        {
            image: image1,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <p>ADSnURL</p>
              <p>App Design</p>
            </div>
            <a class="slide-more">Click and Hold!</a>
          </div>
          <div class="slide-desc">
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
              <p class="close">Close</p>
            </div>
          </div>
        </div>      
        `,
            position: 0
        },
        {
            image: image2,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <p>vegaan</p>
              <p>Branding</p>
            </div>
            <a class="slide-more">Click and Hold!</a>
          </div>
          <div class="slide-desc">
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
              <p class="close">Close</p>
            </div>
          </div>
        </div>   
        `
        },
        {
            image: image3,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <p>KathKIN</p>
              <p>Branding</p>
            </div>
            <a class="slide-more">Click and Hold!</a>
          </div>
          <div class="slide-desc">
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
              <p class="close">Close</p>
            </div>
          </div>
        </div>  
        `
        },
        {
            image: image4,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <p>PINK LEAF</p>
              <p>Packaging</p>
            </div>
            <a class="slide-more">Click and Hold!</a>
          </div>
          <div class="slide-desc">
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
              <p class="close">Close</p>
            </div>
          </div>
        </div>  
        `
        },
        {
            image: image5,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <p>THE corporate shirt</p>
              <p>Packaging</p>
            </div>
            <a class="slide-more">Click and Hold!</a>
          </div>
          <div class="slide-desc">
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
              <p class="close">Close</p>
            </div>
          </div>
        </div>  
        `
        }
    ],
    [
        {
            image: image3,
            content: `
        <div class="slide-container">
          <div class="slide-header">
            <div class="slide-title">
              <img src="${landingLogo}">
              <img src="${landingStudio}">
            </div>
          </div>
        </div>
        `,
            position: -10
        },
    ],
];
export {slidesData}
const NavMenu = Vue.component("nav-menu",
    {
        props:{close: {
            type: Function,
            required: false,
          }},
        template:`
        <div class="nav-menu">
          <button @click="close" class="nav-menu-close" aria-label="Toggle navigation"><img src="images/icon-close.svg"></button>
          <ul class="nav-menu-list">
            <li><a href="#collections">Collections</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        `
    }

)
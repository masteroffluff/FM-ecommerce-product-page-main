const Lightbox = Vue.component("lightbox", {
  props: {
    mainImageUrl: {
      type: String,
      required: true,
    },
    thumbNails: {
      type: Array,
      required: true,
    },
    activeImageNo: {
      type: Number,
      required: true,
    },
    activateImage: {
      type: Function,
      required: true,
    },
    imagePrev: {
      type: Function,
      required: true,
    },
    imageNext: {
      type: Function,
      required: true,
    },
    fullScreen: {
      type: Boolean,
      required: true,
    }
  },

  template: `
    <section  v-bind:class="['product-images', {'product-images-fullscreen': fullScreen}]">
    <div v-if="fullScreen" class="product-images-close"><button>X</button></div>
    <img class="product-image" :src="mainImageUrl" :alt="mainImageUrl">
    <button v-show="fullScreen" class="product-image-button" id="image-previous" @click="imagePrev">
      <img src="images/icon-previous.svg" alt="previous image" >
    </button>
    <button v-show="fullScreen" class="product-image-button" id="image-next" @click="imageNext">
      <img src="images/icon-next.svg" alt="next image">
    </button>


    <!-- **carosel** -->
    <section class="product-image-carosel">
      <button 
        v-for="(thumbnail, index) in thumbNails" 
        :key = "index"
        v-bind:class="['product-thumbnail-button', {'product-thumbnail-active': activeImageNo === index}]"
        :value="index" 
        @click="activateImage(index)"> 
        <img class="product-thumbnail" alt="product thumbnail" :src="thumbnail" > 
      </button>
    </section>
    
  </section>
    `,
});

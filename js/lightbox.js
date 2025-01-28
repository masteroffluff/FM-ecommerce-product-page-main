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
    },
  },
  methods: {
    closeLightbox() {
      console.log("close")
      this.$emit("toggle-lightbox", false);
    },
    openLightbox() {

      if (!this.fullScreen) {
        console.log("openLightbox")
        this.$emit("toggle-lightbox", true);
      }
    },
  },

  template: `
    <section  v-bind:class="['product-images', {'product-images-fullscreen': fullScreen}]">
    <div v-if="fullScreen" class="product-images-close">
      <button @click="closeLightbox">X</button>
    </div>
    <img @click="openLightbox" class="product-image" :src="mainImageUrl" :alt="mainImageUrl">
    <button 
      v-bind:class="['product-image-button', {'image-previous':!fullScreen},{'image-previous-fullscreen':fullScreen}, {'force-show': fullScreen}]" 
      @click="imagePrev">
      <img src="images/icon-previous.svg" alt="previous image" >
    </button>
    <button 
      v-bind:class="['product-image-button', {'image-next':!fullScreen},{'image-next-fullscreen':fullScreen}, {'force-show': fullScreen}]" 
      @click="imageNext"
      >
      <img src="images/icon-next.svg" alt="next image">
    </button>


    <!-- **carosel** -->
    <section class="product-image-carosel" v-bind:class="{'force-show': fullScreen}">
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

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    avatar: './images/image-avatar.png',
    product: shoes[0],
    amount:0,
    cart:new Map(),
    activeImageNo:0,
    isLightboxVisible:false,
    isCartVisible:false,
    activateBlackBox: false,
    isMenuVisible:false,
    updateFlag:0
  },
  computed:{
    mainImageUrl: function() {return "./images/" + this.product.images[this.activeImageNo].main},
    thumbNails: function() {
      return this.product.images.map((e)=>"./images/" + e.thumb)}
  },
  methods:{
    orderPlus:function(){
      this.amount++
    },
    orderMinus:function(){
      this.amount--
      if(this.amount<0){this.amount=0}
    },
    addToCart:function(){
      console.log(this.cart.size)
      console.log("cart")
      if(this.amount===0){return}
      const {sku, productName} = this.product
      if(this.cart.has(this.product)){
        const currentAmount = this.cart.get(this.product)
        this.cart.set(this.product,this.amount + currentAmount)
        this.$forceUpdate()
      } else {
        this.cart.set(this.product,this.amount )
        
      }
      console.log(this.cart.size)
      this.amount = 0;
      console.log(this.cart)
      this.updateFlag++
    },
    handleDeleteItem:function(item){
      console.log("deleting")
      this.cart.delete(item)
      this.updateFlag++
    },
    imageNext:function(){
      this.activeImageNo++
      if(this.activeImageNo>=this.product.images.length){
        this.activeImageNo=this.product.images.length-1
      }

    },
    imagePrev:function(){
      this.activeImageNo--
      if(this.activeImageNo<0){this.activeImageNo=0}
    },
    activateImage:function(number){
      
      this.activeImageNo = parseInt(number, 10)||0;
      
    },
    toggleLightbox(value){
      console.log("toggle lightbox", value)
      this.isLightboxVisible = value;
      this.activateBlackBox = value;
    },
    toggleCart:function(){
      this.isCartVisible = !this.isCartVisible;
    },
    menuShow:function(){
      console.log("menuShow")
      this.isMenuVisible = true;
      this.activateBlackBox = true;
    },
    menuClose:function(){
      this.isMenuVisible  = false;
      this.activateBlackBox = false;
    }

  },
  mounted() {
    // Global listener to catch all toggle-lightbox events
    this.$root.$on("toggle-lightbox", (state) => {
      console.log("Global listener caught toggle-lightbox with state:", state);
    })
  }
});





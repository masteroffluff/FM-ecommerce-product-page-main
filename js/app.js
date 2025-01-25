import Vue from 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.esm.browser.js';

import {shoes} from './data.js';



const app = new Vue({
  el: '#app',
  data: {
    avatar: './images/image-avatar.png',
    product: shoes[0],
    amount:0,
    cart:new Map(),
    activeImageNo:0,
  },
  computed:{
    mainImageUrl: function() {return "/images/" + this.product.images[this.activeImageNo].main},
    thumbNails: function() {
      return this.product.images.map((e)=>"/images/" + e.thumb)}
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
      const {sku, productName} = this.product
      if(this.car.has(this.product)){
        const currentAmount = this.cart.get(this.product)
        this.cart.set(this.product,this.amount + currentAmount)
      } else {
        this.cart.set(this.product,this.amount)
      }
    },
    imageNext:function(){
      this.activeImageNo++
      if(this.activeImageNo>=this.product.images.length){this.activeImageNo=this.product.images.length-1}

    },
    imagePrev:function(){
      this.activeImageNo--
      if(this.activeImageNo<0){this.activeImageNo=0}
    },
    activateImage:function(e){
      console.log(e.currentTarget)
      this.activeImageNo = parseInt(e.currentTarget.value, 10)||0;
      console.log(`Active image set to: ${this.activeImageNo}`);
    }

  }
});





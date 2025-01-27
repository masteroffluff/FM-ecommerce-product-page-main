const Cart = Vue.component("cart", {
  props: {
    cart: {
      type: Map,
      required: true,
    },
    updateFlag: {
      type: [Number, String],
      required: true,
    },
    
  },
  data() {
    return {
      isEmpty: !this.cart.size,
      iterableCart: this.iterableCart = [...this.cart].map(([item, amount]) => {
        const { productName, currentRP, images } = item;
        const thumbnail = "/images/" + images[0].thumb;
        const subTotal = currentRP * amount;
        return { item, productName, currentRP, amount, subTotal, thumbnail };
      })
    };
  },
  watch: {
    updateFlag: function () {
      console.log("update");
      this.isEmpty = !this.cart.size;
      this.iterableCart = [...this.cart].map(([item, amount]) => {
        const { productName, currentRP, images } = item;
        const thumbnail = "/images/" + images[0].thumb;
        const subTotal = currentRP * amount;
        return { item, productName, currentRP, amount, subTotal, thumbnail };
      });
      console.log(this.cart, this.isEmpty, this.iterableCart);
    },
  },
  methods: {
    checkout: function () {
      alert("Order checked out!");
    },
    removeItem: function (item) {


      this.$emit("delete-item", item);
    },
  },
  template: `
          <section class="cart">
            <h3>Cart</h3>
            <div v-if="isEmpty" class="empty-cart">Your cart is empty</div>
            <div v-if="!isEmpty" class="cart-list"  v-for="cartItem in iterableCart" :key="cartItem.item.sku">
            <img class="cart-thumbnail" :src="cartItem.thumbnail">
            <div class="cart-items">
                <p>{{ cartItem.productName }}</p>
                <p>\${{ cartItem.currentRP}} x {{ cartItem.amount }} <strong>\${{ cartItem.subTotal }}</strong></p>
            </div>
            <button class="cart-delete" @click="removeItem(cartItem.item)" ><img src="/images/icon-delete.svg"></button>
            
        </div>
            <button v-if="!isEmpty" class="order-controls-addtoCart cart-button" @click="checkout">Checkout</button>
          </section>
        `,
});

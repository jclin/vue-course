export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  getters: {
    theCart(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.total.toFixed(2);
    },
  },
  mutations: {
    addProductToCart(state, product) {
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === product.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          qty: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += product.price;
    },

    removeProductFromCart(state, product) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === product.prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addProduct(context, payload) {
      context.commit('addProductToCart', payload);
    },
    removeProduct(context, payload) {
      context.commit('removeProductFromCart', payload);
    }
  }
};
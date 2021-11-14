import VuexPersist from "vuex-persist";

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
});

export default {
  state: {
    isLoggedIn: true,
    cartItems: {},
  },
  plugins: [vuexLocalStorage.plugin],
  mutations: {
    toggleIsLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    addToCart(state, item) {
      console.log(item);
      if (state.cartItems[item.id]) {
        state.cartItems[item.id] = {
          ...state.cartItems[item.id],
          quantity: state.cartItems[item.id].quantity + 1,
        };
      } else {
        state.cartItems = {
          ...state.cartItems,
          [item.id]: { ...item, quantity: 1 },
        };
      }
    },
    removeFromCart(state, id) {
      const updatedItems = { ...state.cartItems };
      delete updatedItems[id];
      state.cartItems = updatedItems;
    },
  },
};

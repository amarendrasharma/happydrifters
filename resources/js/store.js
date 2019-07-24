import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [],
        inCart: [],
        lots: []
    },
    getters: {
        items: state => state.items,
        inCart: state => state.inCart,
        getNumberOfProducts: state => (state.items ? state.items.length : 0),
        cartItems: state => {
            return state.inCart.map(cartItem => {
                const item = state.items.find(item => {
                    return cartItem.id === item.id;
                });
                // console.log("id", cartItem.id);
                // console.log("in cari", state.inCart);
                console.log("caritem", item);
                return {
                    product_name: item.item_name,
                    product_gst: item.item_gst,
                    id: item.id,
                    price: item.price,
                    base_price: item.base_price,
                    quantity: cartItem.quantity,
                    total_price: item.base_price * cartItem.quantity
                };
            });
        }
    },
    mutations: {
        // POS STATES
        ADD_TO_CART(state, invId) {
            const record = state.inCart.find(item => {
                console.log(`ADD_TO_CART${item.id}- ${invId}`);
                return item.id === invId;
            });

            if (!record) {
                state.inCart.push({
                    id: invId,

                    quantity: 1
                });
            } else {
                record.quantity++;
            }
        },
        CLEAR_CART(state) {
            state.inCart = [];
        },
        REMOVE_FROM_CART(state, index) {
            state.inCart.splice(index, 1);
        },
        INCREMENT_CART(state, id) {
            const record = state.inCart.find(item => {
                return item.id === id;
            });

            if (record.quantity > 0) {
                record.quantity++;
            }
        },
        DECREMENT_CART(state, id) {
            const record = state.inCart.find(item => {
                return item.id === id;
            });

            if (record.quantity > 1) {
                record.quantity--;
            }
        },
        ADD_ITEMS(state, payload) {
            state.items = payload;
        }
    },
    actions: {
        addToCart(context, invId) {
            context.commit("ADD_TO_CART", invId);
        },
        clearCart(context) {
            context.commit("CLEAR_CART");
        },
        removeFromCart(context, index) {
            context.commit("REMOVE_FROM_CART", index);
        },
        decrementItemFromCart(context, index) {
            context.commit("DECREMENT_CART", index);
        },
        incrementItemFromCart(context, index) {
            context.commit("INCREMENT_CART", index);
        },
        addItems(context, payload) {
            context.commit("ADD_ITEMS", payload.items);
        }
    }
});

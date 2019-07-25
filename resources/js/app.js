/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import VueSnackbar from "vue-snack";
import Vue2Filters from "vue2-filters";
import VueAvatar from "@lossendae/vue-avatar";
import moment from "moment";
// import { setupCalendar, Calendar } from 'v-calendar'
// import 'v-calendar/lib/v-calendar.min.css';

// setupCalendar({
// 	title: 'MMMM YYYY',
// 	weekdays: 'W',
// 	navMonths: 'MMM',
// 	input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
// 	dayPopover: 'L', // Only for `v-date-picker`
// });
// Vue.component("v-calendar", Calendar);
Vue.use(VueRouter);
Vue.use(VueSnackbar, {});
Vue.use(BootstrapVue);
Vue.use(Vue2Filters);

window.axios = axios;

// axios.defaults.baseURL = `${process.env.MIX_APP_URL}/`;

// axios.defaults.baseURL = "http://happydrifetrs.test";
axios.defaults.baseURL = "http://hdrifters.softinvoice.in";
Vue.component("vue-avatar", VueAvatar);
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.directive("numeric-float", {
    bind(el) {
        el.addEventListener("keydown", e => {
            if (
                [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)
            ) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if (
                (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
                (e.keyCode < 96 || e.keyCode > 105)
            ) {
                e.preventDefault();
            }
        });
    }
});

Vue.filter("formattedDate", date => moment(date).format("DD MMM YYYY h:mm A"));
Vue.filter("roundedOff", number => Math.round(number));
Vue.filter("formattedCurrency", number =>
    number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
);
var converter = require("number-to-words");

Vue.filter("toWords", function(value) {
    if (!value) return "";
    return converter.toWords(value);
});

Vue.filter("titleCase", input => {
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

    input = input.toLowerCase();
    return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(
        match,
        index,
        title
    ) {
        if (
            index > 0 &&
            index + match.length !== title.length &&
            match.search(smallWords) > -1 &&
            title.charAt(index - 2) !== ":" &&
            (title.charAt(index + match.length) !== "-" ||
                title.charAt(index - 1) === "-") &&
            title.charAt(index - 1).search(/[^\s-]/) < 0
        ) {
            return match.toLowerCase();
        }

        if (match.substr(1).search(/[A-Z]|\../) > -1) {
            return match;
        }

        return match.charAt(0).toUpperCase() + match.substr(1);
    });
});

// const EventBus = new Vue();
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    store,
    data: {
        EventBus: new Vue(),
        user: window.user,
        sidebaritems: [
            {
                type: "link",
                to: "/",
                title: "Dashboard"
            },
            {
                type: "divider",
                title: "Invoice"
            },
            {
                type: "link",
                to: "/invoice/generate",
                title: "Generate Invoice"
            },
            {
                type: "link",
                to: "/invoices",
                title: "All Invoices"
            },
            {
                type: "divider",
                title: "Product"
            },
            {
                type: "link",
                to: "/products/generate",
                title: "Add Product"
            },
            {
                type: "link",
                to: "/products",
                title: "All Products"
            },
            // {
            //   type: "divider",
            //   title: "Category"
            // },
            // {
            //   type: "link",
            //   to: "/category/generate",
            //   title: "Add Category"
            // },
            {
                type: "link",
                to: "/category",
                title: "All Categories"
            },

            {
                type: "divider",
                title: "Customers"
            },
            {
                type: "link",
                to: "/customers/new",
                title: " Customers"
            },

            {
                type: "divider",
                title: "Settings"
            },
            // {
            // 	type: "link",
            // 	to: "/profile",
            // 	title: "Profile"
            // },
            {
                type: "link",
                to: "/change-password",
                title: "Change Password"
            }
        ]
    }
    // render: h => h(App)
});

import VueRouter from "vue-router";

import AllInvoice from "./components/invoice/Index";
import InvoiceGenerate from "./components/invoice/Billing";
import ShowInvoice from "./components/invoice/Show";

import Dashboard from "./components/dashboard/Dashboard";

import AllProducts from "./components/product/Index";
import CreateProduct from "./components/product/Create";
import ShowProduct from "./components/product/Show";

import CreateCategory from "./components/category/Create";
import AllCategory from "./components/category/Index";
import ShowCategory from "./components/category/Show";

import ShowLot from "./components/lot/Show";

import PasswordChange from "./components/settings/PasswordChange";
import Profile from "./components/settings/Profile";

import Oldcustomer from "./components/oldcustomer/Create";
import OldcustomerList from "./components/oldcustomer/Index";
import Transaction from "./components/oldcustomer/Transaction.vue";

import NewcustomerList from "./components/newcustomer/Index";
import NewcustomerTransaction from "./components/newcustomer/Transaction.vue";

let routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/invoices",
        component: AllInvoice
    },
    {
        path: "/invoice/generate",
        component: InvoiceGenerate
    },
    {
        path: "/invoices/:uuid",
        component: ShowInvoice,
        name: "showinvoice",
        props: true
    },
    {
        path: "/products",
        component: AllProducts
    },
    {
        path: "/products/generate",
        component: CreateProduct,
        name: "createproduct"
    },
    {
        path: "/products/:uuid",
        component: ShowProduct,
        name: "showproduct",
        props: true
    },
    {
        path: "/category",
        component: AllCategory
    },
    {
        path: "/category/generate",
        component: CreateCategory,
        name: "createcategory"
    },
    {
        path: "/category/:uuid",
        component: ShowCategory,
        name: "showcategory",
        props: true
    },
    {
        path: "/lot/:uuid",
        component: ShowLot,
        name: "showlot",
        props: true
    },

    {
        path: "/oldcustomer/create",
        component: Oldcustomer,
        name: "Oldcustomer"
    },
    {
        path: "/customers/old",
        component: OldcustomerList,
        name: "OldcustomerList"
    },
    {
        path: "/oldcustomers/transaction/:id",
        component: Transaction,
        name: "OldcustomerTransac"
    },
    {
        path: "/customers/new",
        component: NewcustomerList,
        name: "NewcustomerList"
    },
    {
        path: "/customers/new/:uuid/transactions",
        component: NewcustomerTransaction,
        name: "NewcustomerTransaction"
    },
    // {
    //     path: "/profile",
    //     component: Profile,
    //     name: "profile",
    // },
    {
        path: "/change-password",
        component: PasswordChange,
        name: "passwordchange"
    }
];

var router = new VueRouter({
    routes
    // mode: 'history'
});

export default router;

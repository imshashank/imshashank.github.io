// ./router.js

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/:id",
            name: "Home",
            component: () => import("./App.vue"),
            props: true,
        },
        {
            path: "/deck/:id",
            name: "Deck",
            component: () => import("./App.vue"),
            props: true,
        }
    ],
    mode: 'history',
});
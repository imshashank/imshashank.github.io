// ./router.js

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./App.vue"),
            props: route => ({ query: route.query.q })
        },
        {
            path: "/bolly/",
            name: "BollyWood",
            component: () => import("./App.vue"),
            props: { appType: "BOLLYWOOD" }
        }
    ]
});
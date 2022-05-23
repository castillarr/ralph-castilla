import { createRouter, createWebHistory } from "vue-router";
// import RegisterView from "../views/AboutView.vue";

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/HomeView.vue"),
    },
    {
        path: "/resume",
        name: "resume",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/ResumeView.vue"),
    },
    {
        path: "/kewltube",
        name: "kewltube",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/KewlTubeView.vue"),
    },
    {
        path: "/braindrops",
        name: "braindrops",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/BrainDropsView.vue"),
    },
    // {
    //     path: "/register",
    //     name: "register",
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
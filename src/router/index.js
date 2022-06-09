import {createWebHistory, createRouter} from "vue-router";
import LoginPage from "@/pages/LoginPage";
import OverviewPage from "@/pages/OverviewPage";

const routes = [{
    path: "/login", name: "login", component: LoginPage
}, {
    path: "/", name: "overview", component: OverviewPage
}]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router
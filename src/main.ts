import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import {Button, NavBar, AddressList, Toast, Tabbar} from 'vant';
import * as VueRouter from "vue-router";
import routes from "./config/route.ts";



const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(AddressList);
app.use(Toast);
app.use(Tabbar)
app.use(Tabbar.Item)


const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})
app.use(router)

app.mount('#app')





















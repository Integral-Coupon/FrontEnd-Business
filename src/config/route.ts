import index from "../pages/index.vue";
import group from "../pages/group.vue";
import user from "../pages/user.vue";
import search from "../pages/search.vue";

const routes = [
    { path: '/', component: index },
    { path: '/group', component: group },
    { path: '/user', component: user},
    { path: '/search', component: search}
]

export default routes;

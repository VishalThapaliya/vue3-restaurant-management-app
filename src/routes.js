import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/update-restaurant/:id'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
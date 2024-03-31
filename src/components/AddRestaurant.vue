<template>
    <Header />
    <h1>Add a new Restaurant</h1>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'AddRestaurant',
    components: {
        Header
    },
    mounted() {
        const loggedInUser = localStorage.getItem('user-info');

        if(!loggedInUser) {
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style>

</style>
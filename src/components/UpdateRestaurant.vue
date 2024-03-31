<template>
    <Header />
    <h1>Update Restaurant</h1>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'UpdateRestaurant',
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
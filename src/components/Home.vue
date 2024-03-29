<template>
    <Header />
    <h1>Home page</h1>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'Home',
    components: {
        Header
    },
    mounted() {
        const loggedInUser = localStorage.getItem('user-info');

        if(!loggedInUser) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<style>

</style>
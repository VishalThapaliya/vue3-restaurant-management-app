<template>
  <h1>Home page</h1>
</template>

<script>
export default {
    name: 'Home',
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
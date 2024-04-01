<template>
  <header>
    <router-link to="/">
        <img class="header-logo" src="../assets/logo.png" alt="logo_image">
    </router-link>
    <h3 class="title">Hello {{ username }}</h3>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add-restaurant">Add Restaurant</router-link>
        <a href="#" @click="logout">Logout</a>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            username: ''
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Login' });
        }
    },
    mounted() {
        const loggedInUser = localStorage.getItem('user-info');
        this.username = JSON.parse(loggedInUser).name;

        if(!loggedInUser) {
            this.$router.push({ name: 'Login'});
        }
    }
}
</script>

<style>
header {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: lightgreen;
    padding-block: 1rem;

}

header .header-logo {
    padding-left: 1rem;
    width: 4rem;
}

header .title {
    width: -webkit-fill-available;
    text-align: left;
    color: rgba(6, 3, 173, 0.473);
}

header .nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
}

header .nav a {
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 700;
    color: lightseagreen;
}
</style>
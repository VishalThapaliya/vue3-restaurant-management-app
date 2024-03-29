<template>
  <header>
    <h1 class="title">Header</h1>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Restaurant</a>
        <a href="#">Update Restaurant</a>
        <a href="#" @click="logout">Logout</a>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style>
header {
    display: flex;
    width: 100%;
    background-color: lightgreen;
    padding-block: 1rem;
}

header .title {
    padding-left: 2rem 
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
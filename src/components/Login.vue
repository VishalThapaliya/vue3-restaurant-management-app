<template>
  <img class="logo" src="../assets/logo.png" alt="restaurant logo">
  <h1>Login</h1>
  <div class="registration-container">
    <input type="email" v-model="email" placeholder="Enter email" required>
    <input type="password" v-model="password" placeholder="Enter password" required>
    <button @click="login">Login</button>
    <div class="sign-up">
        <router-link to="/sign-up">Sign Up</router-link>
    </div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const url = `http://localhost:3000/users?email=${this.email}&password=${this.password}`;
            const user = await axios.get(url);

            console.warn(user);

            if(user.status == 200 && user.data.length > 0) {
                localStorage.setItem('user-info', JSON.stringify(user.data[0]));
                this.$router.push({ name: 'Home' });
            } else {
                alert('Email or Password incorrect.');
            }
        }
    },
    mounted() {
        const loggedInUser = localStorage.getItem('user-info');

        if(loggedInUser) {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style>
.registration-container .sign-up {
    padding: 0.5rem;
}

.registration-container .sign-up a {
    text-decoration: none;
}

.registration-container .sign-up a:hover {
    text-decoration: underline;
}
</style>
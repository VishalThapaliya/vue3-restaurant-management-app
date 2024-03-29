<template>
    <img class="logo" src="../assets/logo.png" alt="restaurant logo">
    <h1>Sign Up</h1>

    <div class="registration-container">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="email" v-model="email" placeholder="Enter email">
        <input type="password" v-model="password" placeholder="Enter password">
        <button @click="signUp">Sign Up</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            const url = 'http://localhost:3000/users';
            let result = await axios.post(url, {
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.log('Result : ', result);
            if(result.status == 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({name: 'Home'});
            }

        }
    }
}
</script>

<style>
.logo {
    width: 6rem;
}

.registration-container {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    width: 400px;
    border: 1px solid lightblue;
    border-radius: 1rem;
    margin: 0 auto;
}

.registration-container input,
.registration-container button {
    padding: 1rem;
    border-radius: 0.7rem;
    margin: 0.5rem 0.25rem;
    border: 1px solid lightgray;
  }

  .registration-container button {
    font-size: 1rem;
    background-color: lightgreen;
    cursor: pointer;
  }
</style>
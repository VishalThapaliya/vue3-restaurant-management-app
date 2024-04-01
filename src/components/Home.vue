<template>
    <Header />
    <h1 class="title">Restaurants in France</h1>
    <table>
        <tr>
            <th>Id</th>
            <th>Restaurant Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{restaurant.id}}</td>
            <td>{{restaurant.name}}</td>
            <td>{{ restaurant.address }}</td>
            <td>{{ restaurant.contact }}</td>
            <td><router-link :to="'/update-restaurant/' + restaurant.id">Edit</router-link></td>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            restaurants: []
        }
    },
    components: {
        Header
    },
    async mounted() {
        const loggedInUser = localStorage.getItem('user-info');

        if(!loggedInUser) {
            this.$router.push({ name: 'Login' });
        }

        const getRestaurantsURL = 'http://localhost:3000/restaurants';
        let restaurants = await axios.get(getRestaurantsURL);
        this.restaurants = restaurants.data;
    }
}
</script>

<style>
h1.title {
    margin-block: 2rem;
}

table {
    border-collapse: collapse;
    width: calc(100% - 6rem);
    margin-block-start: 3rem;
    margin: 0 auto;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
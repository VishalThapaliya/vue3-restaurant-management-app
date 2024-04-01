<template>
    <Header />
    <h1 class="title">Restaurants in France</h1>
    <table>
        <tr>
            <th>Id</th>
            <th>Restaurant Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th colspan="2" style="text-align: center">Actions</th>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{restaurant.id}}</td>
            <td>{{restaurant.name}}</td>
            <td>{{ restaurant.address }}</td>
            <td>{{ restaurant.contact }}</td>
            <td style="text-align: center"><router-link :to="'/update-restaurant/' + restaurant.id">Edit</router-link></td>
            <td style="text-align: center"><button @click="confirmDelete(restaurant.id)">Delete</button></td>
        </tr>
    </table>
    <Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            restaurants: []
        }
    },
    components: {
        Header,
        Footer
    },
    mounted() {
        this.loadRestaurantData();
    },
    methods: {
        async deleteRestaurant(id) {
            const url = `http://localhost:3000/restaurants/${id}`;
            const deleteRestaurantById = await axios.delete(url);

            if(deleteRestaurantById.status === 200) {
                this.loadRestaurantData();
            }
        },
        async loadRestaurantData() {
            const loggedInUser = localStorage.getItem('user-info');

            if(!loggedInUser) {
                this.$router.push({ name: 'Login' });
            }

            const getRestaurantsURL = 'http://localhost:3000/restaurants';
            let restaurants = await axios.get(getRestaurantsURL);
            this.restaurants = restaurants.data;
        },
        confirmDelete(id) {
            if(confirm("Are you sure you want to delete this restaurant?")) {
                this.deleteRestaurant(id);
            }
        }
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
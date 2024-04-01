<template>
    <Header />
    <h1 class="title">Add a new Restaurant</h1>

    <form class="form-container">
        <input type="text" placeholder="Enter restaurant name" v-model="restaurant.name"/>
        <input type="text" placeholder="Enter restaurant address" v-model="restaurant.address"/>
        <input type="text" placeholder="Enter restaurant contact" v-model="restaurant.contact"/>
        <button type="button" @click="addRestaurant">+ Add Restaurant</button>
    </form>
     
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: 'AddRestaurant',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    mounted() {
        const loggedInUser = localStorage.getItem('user-info');

        if(!loggedInUser) {
            this.$router.push({ name: 'Login' });
        }
    },
    methods: {
        async addRestaurant() {
            if(!this.isRestaurantValid()) {
                alert('Enter restaurant details.');
                return;
            }

            try {
                const url = `http://localhost:3000/restaurants`;
                const newRestaurant = await axios.post(url, {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                });

                if (newRestaurant.status === 201) {
                    alert('A new restaurant added successfully!!!');
                    this.$router.push({ name: 'Home' });
                } else {
                    console.warn('Invalid information!!!');
                }
            } catch (error) {
                console.error('Error while adding restaurant: ', error);
            }
        },
        isRestaurantValid() {
            const { name, address, contact } = this.restaurant;
            return name.trim() !== '' && address.trim() !== '' && contact.trim() !== '';
        }
    }
}
</script>

<style>

</style>
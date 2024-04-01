<template>
    <Header />
    <h1 class="title">Update Restaurant</h1>

    <form class="form-container">
        <input type="text" placeholder="Enter restaurant name" v-model="restaurant.name"/>
        <input type="text" placeholder="Enter restaurant address" v-model="restaurant.address"/>
        <input type="text" placeholder="Enter restaurant contact" v-model="restaurant.contact"/>
        <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
    <Footer />
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name: 'UpdateRestaurant',
    components: {
        Header,
        Footer
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
    async mounted() {
        const loggedInUser = localStorage.getItem('user-info');

        if(!loggedInUser) {
            this.$router.push({ name: 'Login' });
        }

        // get restaurant by id
        const url = `http://localhost:3000/restaurants/${this.$route.params.id}`;
        const restaurantById = await axios.get(url);
        this.restaurant = restaurantById.data;
    },
    methods: {
        async updateRestaurant() {
            if(!this.isRestaurantValid()) {
                alert('Invalid Restaurant Information!!!');
                return;
            }

            try {
                const url = `http://localhost:3000/restaurants/${this.$route.params.id}`;
                const updateRestaurant = await axios.put(url, {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                });

                if(updateRestaurant.status === 200) {
                    alert('Restaurant updated successfully!!!');
                    this.$router.push({ name: 'Home'});
                }
            } catch(error) {
                console.error('Error while updating a restaurant: ', error);
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
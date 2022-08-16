<template>
    <h3>news</h3>
    <ul>
        <li v-for="item in fetchedNews" :key="item.id">
            <a :href="item.url">{{ item.title }}</a>
            <small>
                {{ item.time_ago }} by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // created() {
    //     this.$store.dispatch('FETCH_NEWS');
    //     fetchNewsList()
    //         .then(
    //             (response) => {
    //                 this.items = response.data
    //             }
    //         )
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // },
    computed: {
        ...mapGetters([
            'fetchedNews'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
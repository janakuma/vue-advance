<template>
    <div>news</div>
    <ul>
        <li v-for="user in this.$store.state.news" :key="user.id">
            {{ user.title }}
        </li>
    </ul>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');

        // fetchNewsList()
        //     .then(
        //         (response) => {
        //             this.users = response.data
        //         }
        //     )
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }
}
</script>

<style>

</style>
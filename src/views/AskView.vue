<template>
    <div>ask</div>
    <ul>
        <li v-for="ask in this.$store.state.ask" :key="ask.id">
            {{ ask.title }}
        </li>
    </ul>
</template>

<script>
//import { fetchAskList } from '../api'
export default {
    created() {
        this.$store.dispatch('FETCH_ASK');

        // fetchAskList()
        //     .then((response) => {
        //         this.asks = response.data
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }
}
</script>

<style>

</style>
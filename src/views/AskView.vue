<template>
    <div>ask</div>
    <ul>
        <li v-for="ask in fetchedAsk" :key="ask.id">
            {{ ask.title }}
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ]),
        // ...mapState({
        //     ask: state => state.ask,
        // })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
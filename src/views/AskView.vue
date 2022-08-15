<template>
    <h3>ask</h3>
    <ul>
        <li v-for="ask in fetchedAsk" :key="ask.id">
            <a :href="ask.url">{{ ask.title }}</a>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        //mapGetters를 이용하여 state 호출
        //store의 getter 이용
        ...mapGetters([
            'fetchedAsk'
        ]
            ),
        // ...mapState({
        //     ask: state => state.ask,
        // })
    },
    created() {
        //vuex에서 api를 호출
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
<template>
    <h3>jobs</h3>
    <ul>
        <li v-for="job in fetchedJobs" :key="job.id">
            <a :href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // data() {
    //     return {
    //         jobs: [],
    //     }
    // },
    // created() {
    //     this.$store.dispatch('FETCH_JOBS');
    // }
    computed: {
        ...mapGetters([
            'fetchedJobs'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>
<template>
    <div>jobs</div>
    <ul>
        <li v-for="job in jobs" :key="job.id">
            {{ job.title }}
        </li>
    </ul>
</template>

<script>
import { fetchJobsList } from '../api'
export default {
    data() {
        return {
            jobs: [],
        }
    },
    created() {
        fetchJobsList()
            .then((response) => {
                this.jobs = response.data;
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style>

</style>
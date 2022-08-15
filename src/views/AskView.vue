<template>
    <div>ask</div>
    <ul>
        <li v-for="ask in asks" :key="ask.id">
            {{ ask.title }}
        </li>
    </ul>
</template>

<script>
import { fetchAskList } from '../api'
export default {
    data() {
        return {
            asks: [],
        }
    },
    created() {
        fetchAskList()
            .then((response) => {
                this.asks = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style>

</style>
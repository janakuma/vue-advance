<template>
    <ul>
        <li>name: {{userInfo.id}}</li>
        <li>karma: {{userInfo.karma}}</li>
        <li>created: {{userInfo.created}}</li>
    </ul>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        },
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName); //actions를 호출함
    }
}
</script>

<style>

</style>
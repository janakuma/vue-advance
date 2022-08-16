<template>
    <ul>
        <li>name: {{this.$store.state.user.id}}</li>
        <li>karma: {{this.$store.state.user.karma}}</li>
        <li>created: {{this.$store.state.user.created}}</li>
    </ul>
</template>

<script>
export default {
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }

}
</script>

<style>

</style>
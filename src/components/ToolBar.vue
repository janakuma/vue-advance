<template>
    <header id="header">
        <router-link to="/news">News</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {
    name: 'ToolBar',
}
</script>

<style lang="scss" scoped>
    #header {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 16px;
        background-color: #eaeaea;

        a {
            display: inline-block;
            margin: 0 20px 0 0;
            color: #999;

            &.router-link-exact-active {
                color: hsla(160, 100%, 37%, 1);
            }
        }
    }
</style>
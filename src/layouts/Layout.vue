<template>
    <div>
        <mainHeader></mainHeader>
        <MainBody>
            <router-view></router-view>
        </MainBody>
        <MainFooter></MainFooter>
    </div>
</template>

<script>
    import MainHeader from './MainLayout/Header'
    import MainBody from './MainLayout/Body'
    import MainFooter from './MainLayout/Footer'
    export default {
        name: "MainLayout",
        components: {
            MainHeader,
            MainBody,
            MainFooter
        }
    }
</script>

<style scoped>

</style>

<template>
    <div id="app">
        <mainHeader @loginBtn="loginBtn"></mainHeader>
        <MainBody>
            <router-view></router-view>
        </MainBody>
        <MainFooter></MainFooter>
        <Login :visible.sync="visible"></Login>
    </div>
</template>

<script>
    import MainHeader from './MainLayout/Header'
    import MainBody from './MainLayout/Body'
    import MainFooter from './MainLayout/Footer'
    import Login from "@/components/Login";

    export default {
        name: "MainLayout",
        components: {
            MainHeader,
            MainBody,
            MainFooter,
            Login
        },
        data() {
            return {
                visible: false,
            };
        },
        methods: {
            loginBtn() {
                this.visible = true
            }
        }
    }
</script>

<style lang="less" scoped>
    #app {
        height: 100%;
        width: 100%;
        color: #787878;
        font-weight: bolder;
        font-family: ui-sans-serif;
    }
</style>

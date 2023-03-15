<template>
    <div class="main-body">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainBody"
    }
</script>

<style lang="less" scoped>
    .main-body {
        padding: 5rem 0 1.5rem 0;
        width: 100%;
        min-height: calc(100% - 60px);

        .content {
            max-width: 1150px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
        }
    }
</style>

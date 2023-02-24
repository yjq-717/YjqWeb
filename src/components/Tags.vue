<template>
    <div class="tags">
        <span class="text">
            <i class="iconfont icon-tag"></i>
            伊尔萨
        </span>
    </div>
</template>

<script>
    export default {
        name: "Tags",
    }
</script>

<style lang="less" scoped>
    .tags {
        display: inline-block;
        margin: 0 10px;
        text-align: center;
        width: 137px;
        height: 40px;
        padding: 7px;
        background: #7bb3c1;
        border-radius: 5px;
        cursor: pointer;

        .text {
            color: #ffffff;
            font-size: 13px;
            font-weight: 500;
        }
    }

    .tags:first-child {
        margin-left: 0;
        margin-right: 10px;
    }
    .tags:last-child {
        margin-left: 10px;
        margin-right: 0;
    }
</style>

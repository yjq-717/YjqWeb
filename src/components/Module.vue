<template>
    <div class="module">
        <div class="header">
            <div class="title">
                <span class="text">
                    <i class="iconfont" :class="icon"></i>
                    {{ title }}
                </span>
            </div>
        </div>
        <div class="body" ref="body">
            <slot name="module"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Module",
        props: {
            title: String,
            icon: String,
        },
    }
</script>

<style lang="less" scoped>

    .module {
        user-select: none;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        background: #eeeeee;
        margin-bottom: 20px;

        .header {
            display: flex;
            justify-content: space-between;

            .title {
                .text {
                    margin-right: 10px;
                }
            }

        }

        .body {
            width: 100%;
            margin-top: 15px;
            overflow: hidden;
        }

    }

</style>

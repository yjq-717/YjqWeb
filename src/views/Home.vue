<template>
    <div>
        <LayoutUnit title="Tags" icon="icon-tag" maxNum="7">
            <template slot="module" v-for="item in 10">
                <Tags></Tags>
            </template>
        </LayoutUnit>
        <br>
        <LayoutUnit title="Popular comics" icon="icon-rise" :viewAll="true" maxNum="6">
            <template slot="module" v-for="item in 8">
                <Frames></Frames>
            </template>
        </LayoutUnit>
        <br>
        <LayoutUnit title="Popular comics" icon="icon-gengxin" :viewAll="true" maxNum="6">
            <template slot="module" v-for="item in 8">
                <Frames></Frames>
            </template>
        </LayoutUnit>
        <br>
        <LayoutUnit title="Popular comics" icon="icon-faxian" maxNum="6">
            <template slot="module" v-for="item in 8">
                <Frames></Frames>
            </template>
        </LayoutUnit>
    </div>
</template>

<script>
    import LayoutUnit from "@/components/LayoutUnit";
    import Tags from "@/components/Tags";
    import Frames from "@/components/Frame";
    export default {
        name: "WebHome",
        components: {
            Frames,
            LayoutUnit,
            Tags
        },
        mounted() {

        },
        methods: {
            onclick() {
                console.log('click')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>

<template>
    <div>
        <!--标签-->
        <LayoutUnit title="Tags" icon="icon-tag" maxNum="7">
            <template slot="module" v-for="item in 10">
                <Tags></Tags>
            </template>
        </LayoutUnit>
        <br>
        <!--人气-->
        <LayoutUnit title="Popular comics" icon="icon-rise" :viewAll="true" maxNum="6">
            <template slot="module" v-for="item in 8">
                <Frames></Frames>
            </template>
        </LayoutUnit>
        <br>
        <!--最新-->
        <LayoutUnit title="Popular comics" icon="icon-gengxin" :viewAll="true" maxNum="6">
            <template slot="module" v-for="item in 8">
                <Frames></Frames>
            </template>
        </LayoutUnit>
        <br>
        <!--发现-->
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
    import home from "@/api/Home/home"

    export default {
        name: "WebHome",
        components: {
            Frames,
            LayoutUnit,
            Tags
        },
        mounted() {
            // this.getArticlesHot();
        },
        data() {
            return {
                articles: '',
            };
        },
        methods: {
            async getArticlesHot() {
                const res = await home.getArticlesHot(6);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>

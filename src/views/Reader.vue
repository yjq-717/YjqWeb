<template>
    <div class="reader">
        <div class="reader-images">
            <template v-for="item in comicData.pageSize">
                <el-image :src="`${comicData.pictureFolder}${item}.jpg`" lazy ref="image">
                    <el-skeleton slot="placeholder" style="width:700px;height: 995px" loading animated>
                        <template slot="template">
                            <el-skeleton-item
                                    variant="image"
                                    style="width:700px;height: 995px"
                            />
                        </template>
                    </el-skeleton>
                </el-image>
            </template>
            <el-select class="reader-page-select" v-model="page" @change="handleCommand">
                <el-option
                        v-for="item in comicData.pageSize"
                        :key="item"
                        :label="`Page ${item}/${comicData.pageSize}`"
                        :value="item">
                </el-option>
            </el-select>
        </div>
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
    import Frames from "@/components/Frame";

    export default {
        name: "Reader",
        components: {
            Frames,
            LayoutUnit,
        },
        watch: {
          // page(val) {
          //     console.log('num', val);
          // }
        },
        mounted() {
            document.getElementsByClassName('main-footer')[0].style.display = 'none';
            window.addEventListener('scroll', this.handleScroll)
        },
        data() {
            return {
                page: 1,
                comicData: {
                    articleId: 1,
                    createDate: '2023-2-19',
                    title: '一击男重制版 224话',
                    author: "毛玉牛乳",
                    upLoader: '你我他',
                    viewCounts: 2,
                    commentCounts: 1,
                    summary: '毁掉了啦',
                    background: "http://43.142.168.59/img/01/1.jpg",
                    pictureFolder: "http://43.142.168.59/img/01/",
                    pageSize: 34,
                    articleTag: [
                        {
                            tagId: 1,
                            tagName: '热血',
                            color: '#ffa801',
                        },
                        {
                            tagId: 3,
                            tagName: '奇幻',
                            color: '#3c40c6',
                        },
                        {
                            tagId: 6,
                            tagName: '冒险',
                            color: '#9501ff',
                        },
                        {
                            tagId: 12,
                            tagName: '魔法',
                            color: '#f53b57',
                        },
                    ]
                },
            };
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset + 100;
                const images = this.$refs.image;
                for (var i = 0; i < images.length; i++) {
                    if (scrollTop < images[i].$el.offsetTop) {
                        this.page = i;
                        break;
                    }
                }
            },
            handleCommand(val) {
                window.removeEventListener('scroll', this.handleScroll);
                const imageTop = this.$refs.image[val -1].$el.offsetTop - 60;
                document.documentElement.scrollTop = imageTop;
                let check = setInterval(() => {
                    if (document.documentElement.scrollTop === imageTop) {
                        window.addEventListener('scroll', this.handleScroll);
                        clearInterval(check);
                    }
                },100)
            }
        },
        beforeDestroy() {
            document.getElementsByClassName('main-footer')[0].style.display = 'block';
        },
    }
</script>

<style lang="less" scoped>
    .reader {
        width: 100%;

        .reader-images {
            max-width: 700px;
            width: 700px;
            display: flex;
            margin: 0 auto;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;

            .el-image {
                margin-bottom: 20px;
            }
        }

        .reader-page-select {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 140px;
        }

        .reader-page-select  /deep/ .el-input__inner {
            background: #eeeeee;
        }
    }
</style>

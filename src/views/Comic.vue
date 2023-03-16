<template>
    <div class="comic-body">
        <Section class="comic-left">
            <!--漫画封面-->
            <div class="comic-name">
                <span>Sauce</span>
                <img :src="comicData.background" alt="">
                <p class="comic-title">[村田雄介] {{ comicData.title }}</p>
                <small>[Yusuke Murata] ワンパンマン 224話</small>
                <br>
                <el-button type="primary" icon="el-icon-download">Download</el-button>
                <br>
                <el-button type="danger" icon="el-icon-star-off">Favorite</el-button>
            </div>
            <!--漫画标签-->
            <Module title="Tags" icon="icon-tag">
                <div class="tags" slot="module" v-for="tag in comicData.articleTag" :style="{ background: tag.color}">
                    <span class="text">
                        <i class="iconfont icon-tag"></i>
                        {{ tag.tagName }}
                    </span>
                </div>
            </Module>
            <!--漫画信息-->
            <Module title="Details" icon="icon-xinxikongxin">
                <template slot="module">
                    <div class="comic-details">
                        <span>upLoader:</span>
                        <span class="block">{{ comicData.upLoader }}</span>
                    </div>
                    <div class="comic-details">
                        <span>Summary:</span>
                        <span class="block">{{ comicData.summary }}</span>
                    </div>
                    <div class="comic-details">
                        <span>Upload date:</span>
                        <span>{{ comicData.createDate }}</span>
                    </div>
                </template>
            </Module>
            <!--漫画作者-->
            <Module title="Artists" icon="icon-xingzhuang-tupian">
                <div slot="module" style="display: flex">
                    <span class="block">{{ comicData.author }}</span>
                </div>
            </Module>
        </Section>
        <Section class="comic-right">
            <!--漫画内容-->
            <Module :title="`Callery(${comicData.pageSize})`" icon="icon-liebiao" class="comic-callery" ref="module">
                <template  slot="module">
                    <el-row :gutter="20">
                        <el-col v-for="item in comicData.pageSize" :span="6">
                            <el-image :src="`${comicData.pictureFolder}${item}.jpg`" alt="." :key="item" lazy @click="reader()">
                                <el-skeleton slot="placeholder" style="width:100%;height: 260px" loading animated :count="10">
                                    <template slot="template">
                                        <el-skeleton-item
                                                variant="image"
                                                style="width:100%;height: 260px"
                                        />
                                    </template>
                                </el-skeleton>
                            </el-image>
                        </el-col>
                    </el-row>

                    <div class="comic-callery-btn" v-if="loadMoreBtn">
                        <span @click="loadMore()">
                            <i class="iconfont icon-gengduo"></i>
                            Load more
                        </span>
                        <span @click="reader()">
                            <i class="iconfont icon-fuhao-yuedu"></i>
                            Start reading
                        </span>
                    </div>
                </template>
            </Module>
            <!--评论区-->
            <Module title="Discussion" icon="icon-pinglun">
                <Discussion slot="module"></Discussion>
            </Module>
            <!--推荐-->
            <LayoutUnit title="Popular comics" icon="icon-faxian" maxNum="7">
                <template slot="module" v-for="item in 8">
                    <Frames></Frames>
                </template>
            </LayoutUnit>
        </Section>
    </div>
</template>

<script>
    import LayoutUnit from "@/components/LayoutUnit";
    import Tags from "@/components/Tags";
    import Module from "@/components/Module";
    import Frames from "@/components/Frame";
    import Discussion from "@/components/Discussion";

    export default {
        name: "Comic",
        components: {
            LayoutUnit,
            Tags,
            Module,
            Frames,
            Discussion,
        },
        mounted() {
            // this.getArticlesHot();
        },
        data() {
            return {
                loadMoreBtn: true,
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
            loadMore() {
                this.$refs.module.$refs.body.style.height = 'auto';
                this.loadMoreBtn = false;
            },
            reader() {
                this.$router.push({ name: 'reader' })
            }
        }
    }
</script>

<style lang="less" scoped>
    .comic-body {
        display: flex;
        width: 100%;

        .comic-left {
            width: 23%;
            margin-right: 2%;

            .comic-name {
                padding: 10px;
                border-radius: 5px;
                background: #eeeeee;
                height: auto;
                text-align: center;
                margin-bottom: 20px;

                span {
                    background: #5e72e4;
                    padding: 2px 7px;
                    color: white;
                    font-weight: 100;
                    border-radius: 5px;
                }

                img {
                    padding: 25px 10px 10px 10px;
                    width: 100%;
                }

                .comic-title {
                    display: inline-block;
                    margin-bottom: 0;
                    padding: 5px 10px;
                    font-weight: bolder;
                }

                small {
                    color: #909399;
                }

                .el-button {
                    width: 100%;
                    margin-bottom: 5px;
                    font-weight: bolder;
                }

            }

            .tags {
                display: inline-block;
                text-align: center;
                padding: 3px 10px;
                background: #7bb3c1;
                border-radius: 5px;
                cursor: pointer;
                margin: 0 3px 3px 0;

                .text {
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 500;

                    i {
                        font-size: 12px;
                    }
                }
            }

            .comic-details {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }

            .comic-details:last-child {
                margin-bottom: 0;

                span:last-child {
                    padding: 4px 10px;
                }
            }

            .block {
                background: #dadada;
                padding: 4px 10px;
                color: #999999;
                font-size: 13px;
                border-radius: 5px;
                cursor: pointer;
            }

            .block:hover {
                opacity: 0.7;
            }
        }

        .comic-right {
            width: 75%;

            .comic-callery /deep/ .body {
                height: 700px;
                position: relative;
            }

            .comic-callery {

                .el-row {
                    padding: 0 10px;

                    .el-col {
                        padding-top: 10px;
                        padding-bottom: 10px;
                        border-radius: 5px;
                    }

                    .el-image {
                        width: 100%;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                }

                .comic-callery-btn {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 150px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(0deg,#eeeeee,#eeeeee 20%,transparent);

                    span {
                        cursor: pointer;
                        padding: 7px 20px;
                        background: #5e72e4;
                        color: #ffffff;
                        border-radius: 5px;
                        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);

                        i {
                            font-weight: 100 !important;
                        }
                    }

                    span:first-child {
                        margin-right: 20px;
                        background: #6c757d;
                    }
                }
             }
        }
    }
</style>

<template>
    <div class="layout-unit">
        <div class="header">
            <div class="title">
                <span class="text">
                    <i class="iconfont" :class="icon"></i>
                    {{ title }}
                </span>
                <span v-if="viewAll" class="view-all">
                    View all
                    <i class="iconfont icon-icon-arrow-right4"></i>
                </span>
            </div>
            <div class="tools">
                <div class="date">
<!--                    <b-dropdown text="本周" class="m-2" block size="sm" offset="0 5">-->
<!--                        <b-dropdown-item href="#">今天</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">本周</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">本月</b-dropdown-item>-->
<!--                        <b-dropdown-item href="#">全部</b-dropdown-item>-->
<!--                    </b-dropdown>-->
                </div>
                <div class="switch">
                    <i class="iconfont icon-icon-arrow-left4-copy" @click="prev()"></i>
                    <i class="iconfont icon-icon-arrow-right4" @click="next()"></i>
                </div>
            </div>
        </div>
        <div class="body" ref="body">
            <div class="content" ref="content" style="left: 0;">
                <slot name="module"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import Tags from "@/components/Tags";
    export default {
        name: "LayoutUnit",
        components: {
            Tags
        },
        props: {
            title: String,
            icon: String,
            maxNum: String,
            viewAll: {
                type: Boolean,
                default: false,
            },
        },
        mounted() {
            this.bodyWidth()
            // 监听窗口大小变化
            window.addEventListener('resize', () => {
                setTimeout(() => {
                    this.bodyWidth()
                }, 100);
            });

            this.mouseMove('mousedown','mousemove','mouseup');

            this.mouseMove('touchstart','touchmove','touchend');
        },
        watch: {

        },
        data() {
            return {
                tagWidth: 0,
                maxWidth: 1080,
                dragFlag: false,
                downX: '',
                moveX: '',
                contentLeft: '',
            };
        },
        computed: {

        },
        methods: {
            bodyWidth() {
                let width = this.$refs.body.offsetWidth + 20;
                let num = width / this.maxWidth * this.maxNum;
                let minNum = num < 2 ? 2 : num;
                let soltWidth = (width / parseInt(minNum) -20).toFixed(2) ;
                let tags = this.$slots.module;
                this.$refs.content.style.width = (Number(soltWidth) + 20) * tags.length + 'px';
                tags.forEach(item => {
                    item.elm.style.width = soltWidth + 'px';
                });
                this.tagWidth = parseInt(soltWidth);
            },

            prev(initWidth) {
                let left = initWidth === undefined ? parseInt(this.$refs.content.style.left) : initWidth;
                if (left) {
                    this.$refs.content.style.left = left + this.tagWidth + 20 + "px";
                } else if (initWidth !== undefined) {
                    this.$refs.content.style.left = initWidth + "px";
                }
            },

            next(initWidth) {
                let left = initWidth === undefined ? parseInt(this.$refs.content.style.left) : initWidth;
                let bodyWidth = this.$refs.body.offsetWidth;
                let nextLeft = left - (this.tagWidth + 20);
                let contentWidth = this.$refs.content.offsetWidth * -1;
                if ((nextLeft - bodyWidth) > contentWidth) {
                    this.$refs.content.style.left = nextLeft + "px";
                } else if (initWidth !== undefined) {
                    this.$refs.content.style.left = initWidth + "px";
                }
            },

            //添加滑动事件
            mouseMove(down, move, up) {
                const content = this.$refs.content;
                const body = this.$refs.body;
                let contentLeft;
                body.addEventListener(down,(e) => {
                    this.dragFlag = true;
                    this.downX = e.clientX || e.changedTouches[0].pageX;
                    contentLeft = parseInt(content.style.left);
                });

                body.addEventListener(move,(e) => {
                    if (this.dragFlag) {
                        this.moveX = e.clientX || e.changedTouches[0].pageX;
                        content.style.transition = 'none';
                        content.style.left = parseInt(content.style.left) + ((this.moveX  - this.downX) / (e.clientX ? 100 : 10)) + 'px';
                    }
                });

                window.addEventListener(up,(e) => {
                    if (this.dragFlag) {
                        if (this.moveX && this.downX) {
                            const distance = this.moveX  - this.downX;
                            content.style.transition = 'all 0.4s';
                            if (this.moveX  < this.downX && distance * -1 > this.tagWidth * (e.clientX ? 1.5 : 0.5)) {
                                this.next(contentLeft);
                            } else if (this.moveX  > this.downX && distance > this.tagWidth * (e.clientX ? 1.5 : 0.5)) {
                                this.prev(contentLeft);
                            } else {
                                content.style.left = contentLeft + 'px';
                            }
                        }
                        this.dragFlag = false;
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .layout-unit {
        user-select: none;
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        background: #eeeeee;
        .header {
            display: flex;
            justify-content: space-between;

            .title {
                .text {
                    margin-right: 10px;
                }
                .view-all {
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: normal;
                }
            }

            .tools {
                .date {

                }
                .switch {
                    i:first-child {
                        cursor: pointer;
                        padding-right: 10px;
                    }
                    i:last-child {
                        cursor: pointer;
                        padding-left: 10px;
                    }
                }
            }
        }

        .body {
            width: 100%;
            margin-top: 15px;
            overflow: hidden;

            .content {
                position: relative;
                left: 0;
                transition: all 0.4s;
                transition-timing-function: ease-in-out;
            }
        }
    }
</style>

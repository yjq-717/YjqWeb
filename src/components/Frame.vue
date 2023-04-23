<template>
    <div class="frame" @click="testClick()">
        <div class="img-container">
            <img src="../assets/cover.jpg"/>
        </div>
        <div class="message">
            <span  class="title">[Sky Dogma (Pandacorya)] Sparta Sensei ga Oshiego no Bitch Gal ni Ecchi na Koto Sareru Hanashi 3 | The Story of a Strict Teacher Who Got Fucked by Her Gyaru Bitch Student #3 [English] [YuriYaku]</span>
            <div class="tags">
                <template v-for="item in 3">
                    <span class="tag">Collerss</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Frame",
        methods: {
            testClick() {
                this.$router.push({
                    name: 'comic',
                });
            },
        }
    }
</script>

<style lang="less" scoped>
    .frame {
        position: relative;
        display: inline-block;
        width: 163px;
        margin: 0 10px;
        height: 290px;
        padding: 8px;
        background: #c0c0c0;
        border-radius: 5px;
        color: #ffffff;
        font-size: 15px;
        cursor: pointer;

        .img-container {
            width: 100%;
            height: 190px;
            border-radius: 5px;
            overflow: hidden;
            img {
                width: 100%;
                background-size:100% 100%;
                background-attachment:fixed;
            }
        }

        .message {
            height: 260px;
            width: calc(100% - 16px);
            /*position: absolute;*/
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: absolute;
            bottom: 10px;

            .title {
                position: relative;
                width: 100%;
                line-height: 1.2;
                /*height: 70%;*/
                background: #c0c0c0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                transition: all 0.5s;
            }

            .tags {
                position: relative;
                width: 100%;
                /*height: 30%;*/
                overflow: initial;
                white-space: nowrap;
                overflow: hidden;

                .tag {
                    font-size: 12px;
                    padding: 1px 5px;
                    display: inline-block;
                    border-radius: 5px;
                    background: red;
                    margin-right: 2px;
                    white-space: nowrap;
                    vertical-align: baseline;
                }
            }
        }
    }
    .frame:first-child {
        margin-left: 0;
        margin-right: 10px;
    }
    .frame:last-child {
        margin-left: 10px;
        margin-right: 0;
    }

    .frame:hover {
        .message {

            .title {
                display: block;
            }

            .tags {
                height: 48px;
                white-space: normal;
            }
        }
    }
</style>

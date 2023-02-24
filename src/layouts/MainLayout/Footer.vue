<template>
    <div  class="main-footer">
        <div class="body">
            <div class="language-footer">
                <b-dropdown id="dropdown-left" text="Left align" variant="primary" class="m-2">
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="logo-footer">
                <img src="../../assets/logo.jpeg" alt=""/>
            </div>
            <div class="news-footer">
                <span>DMCA</span>
                <span>18 U.S.C. 2257</span>
                <span><i class="iconfont icon-feijichang"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style lang="less" scoped>
    .main-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #eeeeee;
        height: 60px;
        padding: 5px 0;

        .body {
            max-width: 1150px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            justify-content: center;
            div {
                height: 100%;
            }

            .language-footer {
                width: 120px;
            }

            .logo-footer {
                cursor: pointer;
                width: 773px;
                height: 50px;
                display: flex;
                justify-content: center;
                img {
                    height: 50px;
                }
            }

            .news-footer {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 13px;
                font-weight: bolder;
                color: #787878;
                span {
                    cursor: pointer;
                    margin: 0 10px;
                }
                span:hover {
                    color: #000000;
                }
            }
        }
    }
</style>

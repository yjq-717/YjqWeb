<template>
    <div  class="main-footer">
        <div class="body">
            <div class="language-footer">
                <b-dropdown id="dropdown-dropup" dropup text="🌐English" class="m-2" block size="sm" offset="0 5">
                    <b-dropdown-item href="#">English</b-dropdown-item>
                    <b-dropdown-item href="#">Chinese</b-dropdown-item>
                    <b-dropdown-item href="#">Indonesian</b-dropdown-item>
                    <b-dropdown-item href="#">French</b-dropdown-item>
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
        width: 100%;
        background: #eeeeee;
        height: 60px;
        padding: 5px 0;

        .body {
            max-width: 1110px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            justify-content: space-between;
            div {
                height: 100%;
            }

            .language-footer {

                .m-2 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 !important;
                }
            }

            .logo-footer {
                cursor: pointer;
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

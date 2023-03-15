<template>
    <div class="main-header">
        <div class="body">
            <div class="logo-header">
                <img src="../../assets/logo.jpeg" alt="" @click="backHome"/>
            </div>
            <div class="menu-header">

            </div>
            <div class="tool-header">
                <div class="search">
                    <i class="iconfont icon-sousuo"></i>
                </div>
                <div class="logo">
                    <span @click="loginBtn">Login</span>
                </div>
                <div class="register">
                    <b-button
                            variant="primary"
                            size="sm"
                            style="font-weight: bolder;font-size: 13px"
                    >
                        Register
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        data() {
            return {

            };
        },
        methods: {
            loginBtn() {
                this.$emit('loginBtn');
            },
            backHome() {
                if (this.$route.name !== 'home') {
                    this.$router.push({ name: 'home' });
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .main-header {
        position: fixed;
        top: 0;
        width: 100%;
        background: #eeeeee;
        height: 60px;
        padding: 5px 0;
        z-index: 100;

        .body {
            max-width: 1110px;
            display: flex;
            margin: 0 auto;
            height: 100%;
            justify-content: space-between;
            div {
                height: 100%;
            }

            .logo-header {
                cursor: pointer;
                img {
                    height: 50px;
                }
            }

            .menu-header {
                height: 50px;
            }

            .tool-header {
                display: flex;
                align-items: center;
                justify-content: space-around;
                div {
                    color: #787878;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin: 0 10px;
                    cursor: pointer;
                    font-weight: bolder;
                    font-size: 13px;
                }
                div:hover {
                    color: #000000;
                }
                div:last-child {
                   margin-right: 0;
                }

                .search {
                    i {
                        font-size: 20px;
                        font-weight: bolder;
                    }
                }

                .register {
                    .btn-content {
                       font-weight: bolder;
                       font-size: 13px;
                   }
                }
            }
        }
    }
</style>

<template>
    <div>
        <el-dialog
                @close="close"
                :show-close="false"
                :visible.sync="visible"
                width="30em"
                center>
            <div slot="title" class="title">
                <div><i class="iconfont icon-login"></i></div>
                <p class="login-text">Login</p>
                <p>Login to your account.</p>
            </div>
            <el-form ref="form" :model="form" class="model-body">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="Username">
                        <i slot="prepend" class="iconfont icon-yonghu"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" type="password" placeholder="Password">
                        <i slot="prepend" class="iconfont icon-mima"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit">Login</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Login",
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                form: {
                    name: '',
                    password: '',
                    checked: []
                }
            };
        },
        methods: {
            close() {
                this.$emit('update:visible', false);
            },
        }
    }
</script>

<style lang="less" scoped>
    .title {
        color: #999999;

        div {
            width: 50px;
            height: 50px;
            margin: 0 auto;
            border-radius: 30px;
            background: #eeeeee;

            i {
                font-size: 32px;
                color: #000000;
            }
        }

        p {
            margin-bottom: 0;
        }
        .login-text {
            font-size: 18px;
            color: #000000;
        }
    }
    .model-body {
        .submit {
            width: 100%;
            font-size: 18px;
            font-weight: bolder;
        }
    }
</style>

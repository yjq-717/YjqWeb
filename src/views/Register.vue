<template>
    <!--注册-->
    <div class="register-body">
        <div class="register-left">
            <div>
                <p class="title1">CY</p>
            </div>
            <div>
                <p class="title2">打个胶先</p>
                <p class="title3">你们才是真正的英雄</p>
                <p class="title4">(v50) 経験に3を加えて,失礼します [中国翻訳] [无修正]</p>
            </div>
        </div>
        <div class="register-right">
            <div class="register-form">
                <div class="register-form-header">
                    <p class="title3">欢迎注册</p>
                    <p>已有账号？<a href="#">登录</a></p>
                </div>
                <div>
                    <el-form ref="formRegister" label-width="0" :model="formRegister">
                        <el-form-item prop="email" :rules="formRule.email">
                            <el-input
                                    v-model="formRegister.email"
                                    placeholder="邮箱"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="user" :rules="formRule.user">
                            <el-input
                                    v-model="formRegister.user"
                                    placeholder="用户名"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="password" :rules="formRule.password">
                            <el-input
                                    type="password"
                                    v-model="formRegister.password"
                                    show-password
                                    placeholder="密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="confirm" :rules="formRule.confirm">
                            <el-input
                                    type="password"
                                    v-model="formRegister.confirm"
                                    show-password
                                    placeholder="确认密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" class="submit" @click="submitForm('formRegister')">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            let confirmRule = (rule, value, callback) => {
                if (value !== this.formRegister.password) {
                    callback(new Error('两次输入密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                labelPosition: 'right',
                formRegister: {
                    email: '',
                    user: '',
                    password: '',
                    confirm: '',
                },
                formRule: {
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                    ],
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    confirm: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                        { validator: confirmRule, trigger: 'blur' }
                    ]
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .register-body {
        width: 100%;
        height: 100%;
        padding: 100px;
        background-size: cover;
        background-image: url("../assets/register.jpg");
        display: flex;
        justify-content: space-between;

        .register-left {
            width: 50%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .register-right {
            width: 50%;
            display: flex;
            justify-content: flex-end;

            .register-form {
                padding: 50px;
                background: rgba(255, 255, 255, 0.7);
                width: 400px;
                height: 100%;
                border-radius: 10px;

                .submit {
                    width: 50%;
                    position: relative;
                    left: 22%;
                }
            }
        }
    }
</style>

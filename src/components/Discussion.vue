<template>
    <div class="discussion">
        <div  class="discussion-login">
            <p>You must be logged in in order to post a comment on this comic.</p>
            <div class="discussion-login-btn">
                <span>Login</span>
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
</template>

<script>
    export default {
        name: "Discussion"
    }
</script>

<style lang="less" scoped>
    .discussion {
        width: 100%;
        border: 2px #ffffff dashed;

        .discussion-login {
            width: 100%;
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .discussion-login-btn {
                span {
                    margin-right: 20px;
                }
            }
        }
    }
</style>

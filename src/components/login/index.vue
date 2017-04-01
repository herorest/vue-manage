<template lang="html">
    <div class="login clearfix">
        <template v-if="isLogin">
            欢迎&nbsp;&nbsp;<a target="_blank" href="https://member.meizu.com/uc/webjsp/member/detail"><span class="userName"></span></a>&nbsp;|&nbsp;<a href="/c/loginout/logout?useruri=<%=cdn%>">退出</a>
        </template>
        <template v-else>
            <a class="l_btn" href="">登录</a>
        </template>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isLogin: false
        }
    },
    methods: {

    }
}

</script>

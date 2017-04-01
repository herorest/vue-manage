<template lang="html">
    <div class="crumbs clearfix">
        <el-breadcrumb separator="/">
            <template v-for="item in crumb">
                <el-breadcrumb-item v-if="item == '首页'" :to="{ path: '/' }">{{item}}</el-breadcrumb-item>
                <el-breadcrumb-item v-else>{{item}}</el-breadcrumb-item>
            </template>
        </el-breadcrumb>
        <Login />
    </div>

</template>

<script>
import Login from '../login';

export default {
    data() {
        return {
            isLogin: false
        }
    },
    props: ['crumb'],
    components: {
        Login
    },
    methods: {

    }
}

</script>

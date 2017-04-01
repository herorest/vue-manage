<template lang="html">
    <div class="content">
        <Crumbs :crumb="crumb" />
        <div class="main">
            <div class="welcome">欢迎访问管理平台<br />请点击左侧菜单访问</div>
        </div>
    </div>
</template>

<script>
import Crumbs from '../../components/crumbs';

export default {
    name: 'welcome',
    components: {
        Crumbs
    },
    data: function(){
        return {
            crumb:['首页']
        }
    }
}
</script>

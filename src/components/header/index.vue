<template lang="html">
<div class="header clearfix">
    <a href="http://syncmanage.meizu.com" class='meizuLogo'>
        云服务管理平台
    </a>

    <div class="nav">
        <el-col>
            <el-menu default-active="2" unique-opened class="el-menu-vertical-demo" @select="handleOpen" theme="dark">
                <el-submenu v-bind:index="key+''" v-for="todo,key in headerList">
                    <template slot="title">{{todo.title}}</template>
                    <el-menu-item v-bind:index="value.url" v-for="value,index in todo.list">{{ value.text }}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {
                headerList: [{
                    title: '查找手机',
                    list: [{
                        text: '远程flyme解锁',
                        url: 'phoneunlock'
                    }, {
                        text: '白名单',
                        url: 'findphonewhitelist'
                    }, {
                        text: '远程操作手机',
                        url: 'operatephone'
                    }, {
                        text: '远程绑定手机',
                        url: 'bindphone'
                    }]
                }, {
                    title: '用户管理',
                    list: [{
                        text: '用户管理',
                        url: 'useradmin'
                    }, {
                        text: '姓名素材修改',
                        url: 'listmng'
                    }]
                }, {
                    title: '同步业务',
                    list: [{
                        text: '黑名单管理',
                        url: 'backlistmng',
                    }, {
                        text: '日历恢复',
                        url: 'calendarmng'
                    }, {
                        text: '联系人恢复',
                        url: 'contactmng'
                    }, {
                        text: '通话记录恢复',
                        url: 'callmng'
                    }, {
                        text: '短信恢复',
                        url: 'smsmng'
                    }, {
                        text: '短信修复',
                        url: 'smsrepair'
                    }, {
                        text: '同步记录查询',
                        url: 'syncrecmng'
                    }, {
                        text: '批量短信修复',
                        url: 'batchsmsrepair'
                    }, {
                        text: '日历数据修复',
                        url: 'calendarrepair'
                    }]
                }, {
                    title: '发布记录',
                    list: [{
                        text: '项目管理',
                        url: 'releasenote'
                    }, {
                        text: '发布记录管理',
                        url: 'releasenote?id=release'
                    }]
                }, {
                    title: '路由规则',
                    list: [{
                        text: 'IDC路由分页管理',
                        url: 'routemanage?id=30'
                    }, {
                        text: 'User概况',
                        url: 'routemanage?id=31'
                    }]
                }, {
                    title: '群发短信',
                    list: [{
                        text: '短信通讯录和模板',
                        url: 'sms'
                    }]
                }, {
                    title: '查询平台',
                    list: [{
                        text: '总体查询',
                        url: 'search'
                    }, {
                        text: '自定义查询',
                        url: 'searchself'
                    }, {
                        text: '常用查询',
                        url: 'searchusual'
                    }, {
                        text: '全库查询',
                        url: 'globalsearch'
                    }]
                }, {
                    title: '机型管理',
                    list: [{
                        text: '机型查询',
                        url: 'imeisnsearch'
                    }, {
                        text: '数据同步查询',
                        url: 'datasyncsearch'
                    }]
                }, {
                    title: '用户反馈',
                    list: [{
                        text: '用户反馈',
                        url: 'userfeedbackmng'
                    }]
                }, {
                    title: '数据清理',
                    list: [{
                        text: '文件迁移',
                        url: 'cleanfile'
                    }, {
                        text: '数据迁移',
                        url: 'datatransfer'
                    }, {
                        text: '数据查询',
                        url: 'dataview'
                    }, {
                        text: '过期数据清理',
                        url: 'expireddataclean'
                    }]
                }],
                isLogin: false
            }
        },
        methods: {
            handleOpen(key, keyPath){
                window.location.href = '/#/' + key;
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
}

</script>

<template lang="html">
    <div class="content">
        <Crumbs :crumb="crumb" />
        <div class="main">
            <div class="titleDiv">
                用户反馈
            </div>
            <InputField
                v-bind:catData="catIdOption"
                v-bind:statusData="statusOption"
                v-bind:catSelect="catSelect"
                v-bind:statusSelect="statusSelect"
                v-bind:showNewDialog="showNewDialog"
                v-on:new-dialog-fun="toggleNewDialogFun"
                >
            </InputField>
            <DataTable v-bind:dataArray="tableArray"></DataTable>
            <NewQuestionDialog
                v-bind:showFlag="showNewDialog"
                v-bind:catIdOption="catIdOption"
                v-bind:catSelect="catSelect"
                v-on:close-dialog-fun="toggleNewDialogFun"
                >
            </NewQuestionDialog>
        </div>
    </div>
</template>

<script>
import Crumbs from '../../components/crumbs';
import InputField from './inputField';
import DataTable from './dataTable';
import path from 'path';
import NewQuestionDialog from './newQuestionDialog';
import Interface from '../../common/interface';

import '../../assets/css/feedback.css';

export default {
    name: 'feedback',
    components: {
        Crumbs,
        InputField,
        DataTable,
        NewQuestionDialog
    },
    data () {
        return {
            crumb:['首页','用户反馈'],
            catIdOption: [{
                value: 0,
                text: '所有类型'
            }, {
                value: 1,
                text: '问题'
            }, {
                value: 2,
                text: '操作'
            }],
            statusOption: [{
                value: '',
                text: '所有'
            }, {
                text: '新建',
                value: 0
            }, {
                value: 1,
                text: '已回复'
            }, {
                value: 3,
                text: '已解决'
            }, {
                value: 2,
                text: '未解决'
            }],
            catSelect: 0,
            statusSelect: '',
            tableArray: [],
            showNewDialog: false
        }
    },
    methods: {
        toggleNewDialogFun (flag) {//切换打开新建问题弹框的状态
            this.showNewDialog = flag;
        },
        getProblemTypeList () {
            this.$http.get(Interface.getProblemTypeList).then((response) => {
                //成功回调
                console.log(response);
            }, (response) => {
                //失败回调
                console.log('error');
            })
        }
    },
    created () {
        this.getProblemTypeList();
    }
}
</script>

<style lang="css">
</style>

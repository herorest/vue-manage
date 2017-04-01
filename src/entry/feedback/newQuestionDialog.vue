<template lang="html">
    <div class="dialog-wrapper">
        <el-dialog
            title="新建问题"
            v-model="showFlag"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :show-close="false"
            >
            <el-row>
                <el-col :span="2" :offset="1" class="title-wrapper">
                    <label class="input-title">问题分类</label>
                </el-col>
                <el-col :span="8" class="require-item">
                    <el-select v-model="catSelect" class="dialog-select">
                        <el-option v-for="todo in catIdOption" v-bind:label="todo.text" v-bind:value="todo.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="2" :offset="1" class="title-wrapper">
                    <label class="input-title">错误码</label>
                </el-col>
                <el-col :span="8">
                    <el-input :maxlength="11" class="dialog-input" placeholder="请输入错误码" type="text"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" :offset="1" class="title-wrapper">
                    <label class="input-title">标题</label>
                </el-col>
                <el-col :span="19" class="require-item">
                    <el-input :maxlength="64" type="text" class="input-for-title" placeholder="请输入标题"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" :offset="1" class="title-wrapper">
                    <label class="input-title">问题描述</label>
                </el-col>
                <el-col :span="19" class="require-item">
                    <el-input type="textarea" placeholder="请输入问题描述" :autosize="{ minRows: 2, maxRows: 6 }" resize="none"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" :offset="1" class="title-wrapper">
                    <label class="input-title">问题链接</label>
                </el-col>
                <el-col :span="19">
                    <el-input type="textarea" placeholder="请输入问题链接" :autosize="{ minRows: 2, maxRows: 6 }" resize="none"></el-input>
                </el-col>
            </el-row>
            <div slot="footer">
                <el-row>
                    <el-col :span="2" :offset="6">
                        <el-button type="primary">添加</el-button>
                    </el-col>
                    <el-col :span="2" :offset="5">
                        <el-button v-on:click="handleClose" type="primary">取消</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'newDialog',
    props: ['showFlag', 'catIdOption', 'catSelect'],
    methods: {
        handleClose (e) {
            this.$emit('close-dialog-fun', false);
        }
    }
}
</script>

<style lang="css">
    .input-title {
        font-size: 14px;
        font-weight: bold;
        height: 34px;
        line-height: 34px;
        text-align: right;
        display: inline-block;
    }
    .el-dialog {
        width: 820px;
        position: relative;
    }
    .title-wrapper {
        margin-right: 10px;
    }
    .dialog-select, .dialog-input {
        height: 34px;
        width: 250px;
    }
    .dialog-select .el-input {
        width: 100%;
        height: 32px;
    }
    .dialog-wrapper .el-input__inner {
        height: 34px;
    }
    .dialog-wrapper .input-for-title {
        width: 616px;
    }
    .dialog-wrapper .require-item {
        position: relative;
    }
    .dialog-wrapper .require-item:after {
        content: '*';
        position: absolute;
        line-height: 1;
        font-size: 14px;
        font-family: '宋体';
        top: 50%;
        right: -10px;
        color: rgb(237, 28, 36);
        transform: translateY(-50%);
    }
    .dialog-wrapper .el-dialog__header {
        position: relative;
    }
    .dialog-wrapper .el-dialog__header:after {
        content: '';
        position: absolute;
        line-height: 1px;
        height: 1px;
        background: #e5e5e5;
        width: 96%;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
    }
    .dialog-wrapper .el-dialog__footer {
        position: relative;
    }
    .dialog-wrapper .el-dialog__footer:after {
        content: '';
        position: absolute;
        line-height: 1px;
        height: 1px;
        background: #e5e5e5;
        width: 96%;
        left: 50%;
        transform: translateX(-50%);
        top: -10px;
    }
    .dialog-wrapper .el-dialog__footer .el-row {
        margin: 0;
    }
</style>

<template lang="html">
    <div class="contentDiv">
        <el-row>
            <el-col :span="2">
                <label class="input-title">问题id</label>
            </el-col>
            <el-col :span="6">
                <el-input type="text" :maxlength="19" placeholder="请输入问题的id"></el-input>
            </el-col>
            <el-col :span="2">
                <label class="input-title">问题分类</label>
            </el-col>
            <el-col :span="6">
                <el-select placeholder="请选择问题分类" v-model="catSelect">
                    <el-option v-for="todo in catData" v-bind:label="todo.text" v-bind:value="todo.value"></el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
                <label class="input-title">问题状态</label>
            </el-col>
            <el-col :span="6">
                <el-select placeholder="请选择问题状态" v-model="statusSelect">
                    <el-option v-for="todo in statusData" v-bind:label="todo.text" v-bind:value="todo.value"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">
                <label class="input-title">创建者</label>
            </el-col>
            <el-col :span="6">
                <el-input :maxlength="16" placeholder="请输入问题的创建者"></el-input>
            </el-col>
            <el-col :span="2">
                <label class="input-title">负责人</label>
            </el-col>
            <el-col :span="6">
                <el-input :maxlength="16" placeholder="请输入问题的负责人"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2" :offset="2">
                <el-button size="small" type="primary">查询</el-button>
            </el-col>
            <el-col :span="2" :offset="1">
                <el-button size="small" type="success" v-on:click="newQuestion">新建问题</el-button>
            </el-col>
        </el-row>
    </div>

</template>

<script>
export default {
    name: 'inputField',
    props: ['catData', 'statusData', 'catSelect', 'statusSelect', 'showNewDialog'],
    methods: {
        newQuestion (e) {
            if(!this.showNewDialog) {
                this.$emit('new-dialog-fun', true)
            }
        }
    }
}
</script>

<style lang="css">
    .contentDiv {
        text-align: center;
    }
    .input-title {
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        width: 100%;
        font-weight: bold;
        display: inline-block;
    }
    .el-input, .el-select {
        width: 280px;
        height: 36px;
    }
    .el-row {
        margin-bottom: 25px;
    }
    .el-button {
        width: 120px;
        height: 34px;
    }
</style>

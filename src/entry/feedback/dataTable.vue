<template lang="html">
    <div class="taber-wrapper">
        <el-table>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="typename" label="分类"></el-table-column>
            <el-table-column prop="errorCode" label="错误码"></el-table-column>
            <el-table-column prop="userName" label="创建者"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="respUserName" label="负责人"></el-table-column>
            <el-table-column prop="caseType" label="原因分类"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'dataTable',
    props: ['dataArray'],
    methods: {

    }
}
</script>

<style lang="css">
    .table-wrapper {
        width: 1200px;
        margin: 25px auto 0;
    }
    .el-table {
        width: 100%;
    }
</style>

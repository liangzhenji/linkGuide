<template>
    <el-dialog title="最新消息" :visible.sync="dialogTableVisible">
        <el-table
                :data="gridData"
                style="width: 100%"
                border
                :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="消息类型"
                    sortable
                    width="120">
            </el-table-column>
                <el-table-column
                        :show-overflow-tooltip="true"
                        prop="address"
                        label="消息内容">
                </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </el-dialog>
</template>>

<script>
    export default {
        name: "newMessage",
        data() {
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: '系统故障',
                    address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                }, {
                    date: '2016-05-04',
                    name: '系统故障',
                    address: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }, {
                    date: '2016-05-01',
                    name: '流量警告',
                    address: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }, {
                    date: '2016-05-03',
                    name: '流量警告',
                    address: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
                }],
                dialogTableVisible: false
            };
        },
        mounted() {
            this.$bus.$on("showNewMessage",() => {
                this.dialogTableVisible = !this.dialogTableVisible;
            })
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    };
</script>

<style>
    .block{
        margin-top: 20px;
    }
    .el-dialog__header{
        padding-top: 10px;
    }
    .el-dialog__body{
        padding-top: 10px;
        padding-bottom: 15px;
    }
</style>
<template>
    <el-menu
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        :background-color="bgColor"
        :text-color="tColor"
        router
        :active-text-color="tActiveColor">
        <div v-for="item in linkData" :key="item.index">
            <el-submenu v-if="item.child != null" :index="item.route" :show-timeout="showTimeout" :hide-timeout="hideTimeout">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="itemChild in item.child" :index="itemChild.route" :key="itemChild.route">{{itemChild.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else="" :index="item.route">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </div>
    </el-menu>
</template>

<script>
    export default {
        name: "NavBarLeft",
        data(){
            return {
                defaultActive : "/guide",/*默认选中*/
                bgColor:"rgba(148, 148, 148, .2)",/*背景颜色*/
                tColor:"#ffff99",/*字体颜色*/
                tActiveColor:"#ff6600",/*激活字体颜色*/
                showTimeout:0,/*下拉延迟时间*/
                hideTimeout:0,/*隐藏延迟时间*/
                linkData:[
                    // {icon:"el-icon-location",title:"网站监测",index:"1",child:[{title:"选项1",index:"1-1"},{title:"选项2",index:"1-2"}]},
                    {icon:"el-icon-stopwatch",title:"网站监测",route:"/monitor"},
                    {icon:"el-icon-menu",title:"网站向导",route:"/guide"},
                    {icon:"el-icon-document",title:"更新公告",route:"/announcement"},
                    {icon:"el-icon-setting",title:"系统设置",route:"/setting"}
                ]
            }
        }
    }
</script>

<style scoped>
    .el-menu{
        height: inherit;/**/
        border: 0px;/*取消白边*/
    }
</style>
<template>
<!--    <a href="pref.html" target="_blank">Preface</a>-->
    <div class="guideContainer">
        <el-card class="box-card">
            <div slot="header">
                <a href="pref.html" target="_blank">
                    <span>个人博客/毕业设计</span>
                </a>

            </div>
            <span>个人的毕业设计，部分功能有待完善</span>
        </el-card>
        <el-card class="box-card">
            <div slot="header">
                <a href="pref.html" target="_blank">
                    <span>手机小商城/VueDemo</span>
                </a>

            </div>
            <span>个人的Vue学习demo</span>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "webGuide"
    }
</script>

<style>
    .guideContainer{
        display: flex;
        justify-content: center;
    }
    .box-card {
        width: 48%;
        background-color: rgba(239,120,245,0.3);
        margin-top: 20px;
        margin-right: 1%;
        margin-left: 1%;
    }
    .el-card__header{
        padding: 5px 8px 5px 8px;
    }
    .el-card__header span{
        padding: 5px 8px 5px 8px;
        color: orangered;
        font-weight: bold;
        font-size: large;
    }
</style>
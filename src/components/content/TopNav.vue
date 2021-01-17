<template>
    <el-badge :value="newMessage" :max="99" class="item">
        <el-button @click="showMessage" size="small">消息</el-button>
    </el-badge>
</template>

<script>
    export default {
        name: "TopNav",
        data(){
            return{
                newMessage:11
            }
        },
        methods:{
            showMessage(){
                this.$bus.$emit("showNewMessage")
            }
        }
    }
</script>

<style scoped>
    .item{
        opacity: 0.7;
    }
</style>
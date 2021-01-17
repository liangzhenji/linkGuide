<template>
  <el-container direction="horizontal" id="container" :style="{'background-image':backgroundImage}">
      <el-aside width="200px">
        <NavBarLeft/>
      </el-aside>
      <el-container direction="vertical">
        <el-header height="56px">
            <logo-box/>
            <TopNav class="topNav"/>
            <MusicBox class="music"/>
        </el-header>
        <el-main>
            <keep-alive><router-view></router-view></keep-alive>
        </el-main>
      </el-container>
      <new-message/>
<!--      <el-footer height="60px">Footer</el-footer>-->
  </el-container>
</template>

<script>

  import NavBarLeft from "components/content/NavBarLeft"
  import MusicBox from "components/content/MusicBox"
  import LogoBox from "components/content/LogoBox"
  import TopNav from "./components/content/TopNav"
  import newMessage from "./components/content/newMessage";

export default {
  name: 'App',
    data(){
      return{
          backgroundImage:""
        }
    },
    mounted(){
        this.$bus.$on("changeBackGround",(backGround) => {
            console.log(backGround)
            this.backgroundImage = "url('"+ backGround +"')"
        })
    },
  components: {
    NavBarLeft,
      MusicBox,
      LogoBox,
      TopNav,
      newMessage
  }
}
</script>

<style>
  @import "assets/css/base.css";
  .el-container{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: rgba(148, 148, 148, .2);
    padding: 0px;
  }
  .el-header{
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
  .el-aside {
    height:inherit;
  }

  .el-main {
    background-color: transparent;
    padding: 0px;
    height:100%;
  }
  .music{
    margin-right: 5px;
  }
    #container{
        background-color: #ffffff;
        width:100%;
        height:100%;
        background-size:cover;
    }
    .topNav{
        margin-right: 20px;
    }
</style>

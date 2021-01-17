<template>
    <div class="musicBox">
        <el-row type="flex" align="middle">
            <el-col :span="2">
                <div class="musicImgDiv">
                    <img class="musicImg" :src="music.imgSrc" alt="error">
                </div>
            </el-col>
            <el-col :span="5">
                <el-tooltip class="item" effect="dark" :content="music.title" placement="top">
                    <div class="musicTitle">
                        {{music.title}}
                    </div>
                </el-tooltip>
            </el-col>
            <el-col :span="4">
                <el-slider
                        @change="changeTime"
                        :max="music.maxTime"
                        :show-tooltip="false"
                        v-model="music.currentTime">
                </el-slider>
            </el-col>
            <el-col :span="5" class="musicTime">
                {{formatTime(music.currentTime)}}/{{formatTime(music.maxTime)}}
            </el-col>
            <el-col :span="2">
                <div :class="playAndPauseClass"
                    class="playAndPause"
                    @click="play">
                </div>
            </el-col>
            <el-col :span="2">
                <div class="VolumeGroup">
                    <div class="increase el-icon-caret-top"
                         @click="setVolume(10)">
                    </div>
                    <div class="reduce el-icon-caret-bottom"
                         @click="setVolume(-10)">
                    </div>
                </div>
            </el-col>
            <el-col :span="3">
                    <div class="afterMusic el-icon-caret-left"
                         @click="afterMusic()">
                    </div>
                    <div class="nextMusic el-icon-caret-right"
                         @click="nextMusic()">
                    </div>
            </el-col>
        </el-row>
        <audio ref="music">
            <source :src="music.musicSrc" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
    export default{
        name: 'MusicBox',
        data(){
            return {
                musicAddress:{
                  music:"http://localhost:8081/music/",
                  img:"http://localhost:8081/musicImg/"
                },
                music:{
                    isPlay:false,//是否播放
                    currentTime:0,//当前时间
                    maxTime:0,//歌曲最大时间
                    volume:100,//音量

                    title:"喜欢你 GEM-邓紫棋",
                    imgSrc:"http://localhost:8081/musicImg/dengziqi.jpeg",
                    musicSrc:"http://localhost:8081/music/xihuanni.mp3",
                    backgroundSrc:"http://localhost:8081/musicImg/dengziqi2.jpg",
                    musicNum:0,
                    listLength:4
                },
                //歌曲列表暂时由前端写死
                musicList:[
                    {
                        title:"喜欢你 GEM-邓紫棋",
                        imgSrc:"dengziqi.jpeg",
                        musicSrc:"xihuanni.mp3",
                        backgroundSrc:"dengziqi2.jpg"
                    },{
                        title:"此生不换 青鸟飞鱼",
                        imgSrc:"cishengbuhuan.jpg",
                        musicSrc:"cishengbuhuan.mp3",
                        backgroundSrc:"cishengbuhuan2.jpeg"
                    },{
                        title:"Lanterns Xomu",
                        imgSrc:"lanterns.jpg",
                        musicSrc:"lanterns.mp3",
                        backgroundSrc:"lanterns2.jpg"
                    },{
                        title:"临安 水浒Q传",
                        imgSrc:"linan.jpg",
                        musicSrc:"linan.mp3",
                        backgroundSrc:"linan2.jpeg"
                    }
                ]
            }
        },
        computed:{
            playAndPauseClass(){//暂停开始按钮的图标
                return this.music.isPlay?'el-icon-video-pause':'el-icon-video-play';
            }
        },
        mounted(){
            this.$nextTick(()=>{
                setInterval(this.listenMusic,1000)
                this.$bus.$emit("changeBackGround",this.music.backgroundSrc)//初始背景
            })
        },
        methods:{
            listenMusic(){//计时器定时获取歌曲初始状态
                if(!this.$refs.music){
                    return
                }
                if(this.$refs.music.readyState){
                    this.music.maxTime = this.$refs.music.duration
                }
                this.music.isPlay=!this.$refs.music.paused
                this.music.currentTime = this.$refs.music.currentTime
                //判断是否继续下一首歌
                if (this.music.currentTime == this.$refs.music.duration){
                    this.nextMusic()
                }
            },
            play(){//暂停播放
                if(this.$refs.music.paused){
                    this.$refs.music.play()
                }else{
                    this.$refs.music.pause()
                }
                this.music.isPlay=!this.$refs.music.paused
            },
            changeTime(time){//求换进度
                this.$refs.music.currentTime = time
            },
            setVolume(v){//调节音量
                this.music.volume += v
                if(this.music.volume>100){
                    this.music.volume = 100
                }
                if(this.music.volume<0){
                    this.music.volume = 0
                }
                this.$refs.music.volume = this.music.volume/100
            },
            afterMusic(){
                let musicLength = this.music.listLength
                let currentMusic
                if(this.music.musicNum >= 1){
                    this.music.musicNum = (this.music.musicNum-1)%musicLength
                    currentMusic = this.musicList[this.music.musicNum]
                }else{
                    this.music.musicNum = musicLength-1
                    currentMusic = this.musicList[this.music.musicNum]
                }
                this.music.title = currentMusic.title
                this.music.imgSrc = this.musicAddress.img+currentMusic.imgSrc
                this.music.backgroundSrc = this.musicAddress.img+currentMusic.backgroundSrc
                this.music.musicSrc = this.musicAddress.music+currentMusic.musicSrc
                this.$refs.music.load()
                this.$refs.music.play()
                this.$bus.$emit("changeBackGround",this.music.backgroundSrc)
            },
            nextMusic(){
                let musicLength = this.music.listLength
                this.music.musicNum = (this.music.musicNum+1)%musicLength
                let currentMusic = this.musicList[this.music.musicNum]
                this.music.title = currentMusic.title
                this.music.imgSrc = this.musicAddress.img+currentMusic.imgSrc
                this.music.backgroundSrc = this.musicAddress.img+currentMusic.backgroundSrc
                this.music.musicSrc = this.musicAddress.music+currentMusic.musicSrc
                this.$refs.music.load()
                this.$refs.music.play()
                this.$bus.$emit("changeBackGround",this.music.backgroundSrc)
            },
            formatTime(time){//转换时间格式
                let it = parseInt(time)
                let m = parseInt(it/60)
                let s = parseInt(it%60)
                return (m<10?"0":"")+parseInt(it/60)+":"+(s<10?"0":"")+parseInt(it%60)
            }
        }
    }
</script>

<style scoped>
    .musicBox{
        height: 45px;
        width:510px;
        background-color: rgba(255, 102, 0, .6);
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 0 10px 0 10px;
    }
    .el-row{
        height: inherit;
    }
    .musicTime{
        padding-left: 10px;
        color:rgba(255, 0, 51, .6);
        font-size: 15px;
    }
    .musicTitle{
        padding-left: 5px;
        color:rgba(255, 0, 51, .6);;
        font-size: 15px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .VolumeGroup{
        display: flex;
        flex-direction:column;
        padding-left: 10px;
    }
    .playAndPause{
        height: 30px;
        width: 30px;
        font-size: 30px;
        cursor: pointer;
    }
    .increase, .reduce{
        cursor: pointer;
    }
    .increase:active , .reduce:active{
        color:#409EFF;
    }
    .afterMusic , .nextMusic{
        padding-top: 4px;
        font-size: 20px;
        cursor: pointer;
    }
    .afterMusic{
        padding-left: 10px;
    }
    .afterMusic:active , .nextMusic:active{
        color:#409EFF;
    }
    .musicImgDiv{
        display: flex;
    }
    .musicImg{
        width: 40px;
        height: 40px;
    }
    .el-slider{
        opacity: 0.6;
    }
</style>
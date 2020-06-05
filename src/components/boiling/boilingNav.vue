<template>
    <div class="boilingNav">
        <nav class="dock-nav">
            <ul class="nav-list">
                <li v-for="(item,key) in navList" :key="key" class="nav-item">
                    <a href="item.url">{{item.name}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default{
    data () {
        return{
            navList : [
                {
                    name: '推荐',
                    url: ''
                },
                {
                    name: '热门',
                    url: ''
                },
                {
                    name: '关注',
                    url: ''
                },
                {
                    name: '开源推荐',
                    url: ''
                },
                {
                    name: '内推招聘',
                    url: ''
                },
                {
                    name: '掘金相亲',
                    url: ''
                },
                {
                    name: '上班摸鱼',
                    url: ''
                },
                {
                    name: '应用安利',
                    url: ''
                },
                {
                    name: '开发工具',
                    url: ''
                },
                {
                    name: 'New资讯',
                    url: ''
                }
            ]
        }
    }
}
</script>

<style lang=scss>
.boilingNav {
    width: 112px;
    margin-right: 15px;
    .dock-nav{
        max-width: 112px;
        border-radius: .2rem;
        background-color: #fff;
        position: fixed;
        transition: all .2s linear;
        .nav-list{
            margin: 0;
            display: flex;
            flex-direction: column;
            padding: 16px 12px;
            .nav-item{
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #2e3135;
                padding: 0 12px;
                border-radius: .25rem;
                transition: background-color .2s,color .2s;
                cursor: pointer;
                &:not(:first-child){
                    margin-top: 10px;
                }
                &:not(.active):hover{
                    background-color: hsla(0,0%,94.9%,.6);
                }
                &:not(.active):hover>a{
                    color: #007fff;
                }
                a{
                    cursor: pointer;
                    color: #909090;
                }
            }
        }
    }
}
</style>
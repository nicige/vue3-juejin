<template>
    <div id="juejin">
        <div class="outside-nav">
            <div class="nav">
                <a class="a-logo" href="/">
                    <img class="logo" src="./assets/logo.svg" alt="掘金">
                </a>
                <ul class="nav-ul">
                    <router-link class="nav-ul-a" :to="item.key" v-for="item in navList" :key="item.key">
                        {{item.name}}
                    </router-link>                
                </ul>
                    <SearchInput @search="searchArticle" />
                    <Button :msg="'写文章'"/>
                    <span class="bell-icon"><i class="fas fa-bell " /></span>
                    <div class="photo"></div>
            </div>
        </div>
        <div class="concernTag" v-if="routerNow === 'timeline'">
            <ul class="tag-ul">
                <router-link class="tal-ul-a" :to="item.key" v-for="item in navList" :key="item.key">
                    {{item.name}}
                </router-link> 
            </ul>
        </div>
        <div class="page">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import SearchInput from '@/public/searchInput' ;
import Button from '@/public/button' ;
import { ref, onMounted } from 'vue' ;  

export default {
    components: {
        SearchInput,
        Button
    },
    setup () {
        const navList = useNavList()
        return {
            navList
        }
    },
    mounted () {
        console.log(this.$router.currentRoute.value.name)
    },
    computed: {
        routerNow () {
            return this.$router.currentRoute.value.name
        }
    },
    methods: {
        // 搜索文章
        searchArticle(val) {
            console.log(val)
        }
    }
}
function useNavList () {
    const navList = [
        {
            name:'首页',
            key:'/timeline'
        },
        {
            name:'沸点',
            key:'/boiling'
        },
        {
            name:'话题',
            key:'/topic'
        },
        {
            name:'小册',
            key:'/book'
        },
        {
            name:'活动',
            key:'/activity'
        }
    ]
    return navList ;
}
</script>

<style lang="scss">
body{
    margin: 0;
    background-color: #f4f5f5;
}
#juejin {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    width: 100%;
    .outside-nav{
        height: 60px;
        background-color: white;
        .nav {
            display: flex;
            max-width: 960px;
            margin: 0 auto;
            height: 60px;
            align-items: center;
            .a-logo {
                min-width: 98px;
                margin-right: 2rem;
                .logo {
                    width: auto;
                    height: auto;
                }
            }
            .nav-ul {
                width: 450px;
                padding: 0;
                .nav-ul-a {
                    text-decoration: none;
                    float: left;
                    margin: 5px 15px;
                    color: #71777c;
                    &:hover{
                        color: #0876e4;
                    }
                }
            }
            .bell-icon{
                cursor: pointer;
                margin: 0 10px;
                i{
                    font-size: 20px;
                    color: #71777c;
                    &:hover{
                        color: #0876e4;
                    }
                }
            }
            .photo{
                cursor: pointer;
                margin: 0 10px;
                height: 30px;
                width: 30px;
                border-radius: 50%;
                background: blue;
            }
        }
    }
    .concernTag{
        width: 100%;
        height: 2.8rem;
        background-color: white;
        border: 1px solid #f4f5f5;
        .tag-ul{
            max-width: 960px;
            margin: 0 auto;
            height: 100%;
            padding: 0;
            .tal-ul-a{
                text-decoration: none;
                float: left;
                line-height: 2.8rem;
                margin: 0 10px;
                font-size: 14px;
                color: #71777c;
                &:first-child{
                    margin-left: 0;
                }
                &:hover{
                    color: #0876e4;
                }
            }
        }
    }
    .page{
        max-width: 960px;
        margin: 0 auto;
        background-color: green;
    }
}
</style>

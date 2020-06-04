<template>
    <div id="main">
        <div class="outside-nav">
            <div class="head">
                <a v-if="navUlReduce !== 'reduceThird'" class="a-logo" href="/">
                    <img class="logo" src="./assets/juejin.svg" alt="掘金">
                </a>
                <a v-else href="/">
                    <img src="./assets/logo.svg" alt="掘金">
                </a>
                <nav class="nav">
                    <ul class="nav-ul" ref="navUl">
                        <li class="nav-menu">
                            <span v-if="navUlReduce === 'reduceFirst'">
                            <router-link class="nav-ul-a" :to="item.key" v-for="item in navList" :key="item.key">
                                {{item.name}}
                            </router-link>  
                            </span>
                            <span v-else-if="navUlReduce !== 'reduceFirst'">
                                <Select :msg="navList" msgRef="navUlReduce" />
                            </span>
                        </li>
                        <li class="nav-search"><SearchInput @search="searchArticle" :state="navUlReduce" /></li>
                        <li><Button :msg="'写文章'" v-if="navUlReduce === 'reduceFirst'" /></li>
                        <li><span class="bell-icon"><i class="fas fa-bell " style="margin-top: 5px;" /></span></li>
                        <li class="nav-user">
                            <div class="photo" @click="userSetting"></div>
                            <UserMenu class="user" v-if="showUserSetting"/>
                        </li>
                    </ul>
                </nav>
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
import Select from '@/public/select' ;
import UserMenu from '@/components/user/userMenu';
import { ref, onMounted, computed, watch } from 'vue' ;  

export default {
    components: {
        SearchInput,
        Button,
        Select,
        UserMenu
    },
    setup () {
        const { navList } = useNavList() ;
        const { showUserSetting, userSetting } = user() ;
        return {
            navList, showUserSetting, userSetting
        }
    },
    data () {
        return{
            clientWidth: 1920
        }
    },
    mounted() {
        this.clientWidth = document.body.clientWidth
        /* 窗口大小实时监听 */
        window.onresize = () => {
            return (() => {
                this.clientWidth = document.body.clientWidth
            })()
        }
    },
    computed: {
        navUlReduce () {
            if (this.clientWidth > 960) return 'reduceFirst' ;
            else if (this.clientWidth > 680) return 'reduceSecond' ;
            else return 'reduceThird' ;
        },
        routerNow () {
            return this.$router.currentRoute.value.name
        }
    },
    methods: {
        // 搜索文章
        searchArticle(val) {
            console.log(val)
        },
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
    ] ;
    return { navList} ;
}
function user () {
    let showUserSetting = ref(false) ;
    const userSetting = () => {
        showUserSetting.value = !showUserSetting.value
    } ;
    return {
        showUserSetting, userSetting
    } ;
}
</script>

<style lang="scss">
body{
    margin: 0;
    background-color: #f4f5f5;
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
}
#main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    width: 100%;
    .outside-nav{
        height: 60px;
        background-color: white;
        .head {
            display: flex;
            max-width: 960px;
            margin: 0 auto;
            height: 60px;
            align-items: center;
            flex-wrap: nowrap;
            justify-content: space-between;
            .a-logo {
                min-width: 98px;
                margin-right: 2rem;
                .logo {
                    width: auto;
                    height: auto;
                }
            }
            .nav{
                height: 100%;
                flex: 1 0 auto;
                .nav-ul {
                    display: flex;
                    padding: 0;
                    li {
                        .nav-ul-a {
                            float: left;
                            margin: 5px 15px;
                            color: #71777c;
                            &:hover{
                                color: #0876e4;
                            }
                        }
                    }
                    .nav-menu {
                        flex: 2 1 auto;
                    }
                    .nav-search{
                        justify-content: flex-end;
                    }
                    .nav-user {
                        position: relative;
                        .photo{
                            cursor: pointer;
                            margin: 0 10px;
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                            background: blue;
                        }
                        .user{
                            position: absolute;
                            top: 45px;
                            right: 5px;
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
                }
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
        margin: 0px auto;
        margin-top: 15px;
        background-color: green;
    }
}
</style>

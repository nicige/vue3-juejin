<template>
    <div id="juejin">
        <div class="nav">
            <a class="a-logo" href="/">
                <img class="logo" src="./assets/logo.svg" alt="掘金">
            </a>
            <ul class="nav-ul">
                <li class="nav-ul-li" v-for="item in navList" :key="item.key">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        const navList = useNavList()
        return {
            navList
        }
    },
}
function useNavList () {
    const navList = [
        {
            name:'首页',
            key:'index'
        },
        {
            name:'沸点',
            key:'boiling'
        },
        {
            name:'话题',
            key:'topic'
        },
        {
            name:'小册',
            key:'book'
        },
        {
            name:'活动',
            key:'activity'
        }
    ]
    return navList ;
}
</script>

<style lang="scss">
body{
    margin: 0;
}
#juejin {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    .nav {
        display: flex;
        height: 60px;
        background: yellow;
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
            padding: 0;
            list-style: none;
            .nav-ul-li {
                float: left;
                margin: 5px 15px;
                color: #71777c;
            }
        }
    }
}
</style>

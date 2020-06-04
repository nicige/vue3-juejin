<template>
    <div class="link-shortcut">
        <ul>
            <li class="link-li" v-for="(item,key) in linkShortCut" :key='key' >
                <a :href="item.url" class="link-item">
                    <img class="link-img" :src="item.img" alt="">
                    <span class="link-title">{{item.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    setup () {
        const {linkShortCut} = useLinkShortCut()
        return {
            linkShortCut
        }
    }
}
function useLinkShortCut () {
    const linkShortCut = [
        {
            name:'收藏集',
            url:'',
            img:'https://b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png'
        },
        {
            name:'掘金社区漫游指南',
            url:'',
            img:'https://b-gold-cdn.xitu.io/v3/static/img/book.75582b2.png'
        },
        {
            name:'下载掘金浏览器插件',
            url:'',
            img:'https://b-gold-cdn.xitu.io/v3/static/img/juejin-extension-icon.4b79fb4.png'
        },
        {
            name:'前往掘金翻译计划',
            url:'',
            img:'https://b-gold-cdn.xitu.io/v3/static/img/juejin-miner.b78347c.png'
        },
        {
            name:'商务合作',
            url:'',
            img:'https://b-gold-cdn.xitu.io/v3/static/img/juejin-partner.4dd2d8c.png'
        }
    ] ;
    return {
        linkShortCut
    }
}
</script>

<style lang=scss>
.link-shortcut{
    .link-li{
        .link-item{
            display: flex;
            align-items: center;
            padding: 12px;
            .link-img{
                height: 36px;
                width:36px;
                margin-right: 9.6px;
            }
            .link-title{
                font-size: 14px;
                color: #333;
            }
        }
    }
}
</style>
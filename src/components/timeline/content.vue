<template>
    <div class="timeline-content">
        <header class="timeline-header">
            <nav class="content-nav">
                <ul class="content-nav-ul">
                    <li v-for="(item) in contentNavList" :key="item.key">
                        <a href="#" @click="getContentData(item.key)">{{item.name}}</a>
                    </li>
                </ul>
            </nav>
            <div class="content-list">
                <div class="content-list-item" v-for="(item,key) in contentList" :key="key" @mouseenter="showShareIcon(key)">
                    <div class="item-info">
                        <div class="meta-row">
                            <ul class="meta-ul">
                                <li v-for="(i,k) in item.meta" :key="k">
                                    <a href="#" v-if="i === true" style="color:red;">热</a>
                                    <a href="#" v-else>{{i}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="title-row">
                            <a href="#">{{item.title}}</a>
                        </div>
                        <div class="action-row">
                            <ul class="action-ul">
                                <li class="action-li">
                                    <a><i class="fas fa-thumbs-up" /><span>{{item.action.like}}</span></a>
                                </li>
                                <li class="action-li">
                                    <a><i class="fas fa-comment-alt" /><span>{{item.action.comment}}</span></a>
                                </li>
                                <li class="action-li" :class="{showShareIconClass: hoverIconKey === key}">
                                    <a><i class="fas fa-share-square" style="margin:0;"  /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { ref } from 'vue';
export default{
    setup () {
        const { contentList, contentNavList, getContentData } = useContentNavList()
        // 第一次进入获取热门信息
        getContentData('hot') ;
        let hoverIconKey = ref('') ;
        const showShareIcon = (key) => {
            hoverIconKey.value = key
        }
        return {
            contentList,contentNavList,getContentData,
            hoverIconKey,showShareIcon
        }
    }
}
function useContentNavList () {
    // 必须用响应式 ref reactive来定义 或者获取不到数据
    let contentList = ref([]) ;
    let contentListCache = {} ;
    const contentNavList = [
        {
            name:'热门',
            key:'hot'
        },
        {
            name:'最新',
            key:'new'
        },
        {
            name:'热榜',
            key:'rank'
        }
    ] ;
    const getContentData = (key) => {
        // 若存在缓存信息，返回缓存内容 ； 
        if ( contentListCache[key] ) return contentList.value = contentListCache[key] ;
        // 否则获取对用key的数据
        if (key === 'hot') getHotListData() ;
        else if (key === 'new') getNewListData() ;
        else getRankListData()
    } ;
    const getHotListData = () => {
        console.log('hot')
        contentList.value = [
            {
                meta: {
                    hot:true,
                    post:'专栏',
                    writer:'lcc1',
                    time:'1分钟前',
                    tag:'vue3'
                },
                title: 'hothothothothothothothothot',
                action:{
                    like:99,
                    comment:99,
                    share:''
                }
            },
            {
                meta: {
                    post:'专栏',
                    writer:'lcc2',
                    time:'1分钟前',
                    tag:'vue3'
                },
                title: 'hothothothothothothothothot',
                action:{
                    like:99,
                    comment:99,
                    share:''
                }
            }
        ] ;
        contentListCache['hot'] = contentList.value ;
    } ;
    const getNewListData = () => {
        console.log('new')
        contentList.value = [
            {
                meta: {
                    post:'专栏',
                    writer:'lcc1',
                    time:'1分钟前',
                    tag:'vue3'
                },
                title: 'newnewnenwenewnewnewnewnew',
                action:{
                    like:99,
                    comment:99,
                    share:''
                }
            },
            {
                meta: {
                    post:'专栏',
                    writer:'lcc2',
                    time:'1分钟前',
                    tag:'vue3'
                },
                title: 'newnewnenwenewnewnewnewnew',
                action:{
                    like:99,
                    comment:99,
                    share:''
                }
            }
        ] ;
        contentListCache['new'] = contentList.value ;
    } ;
    const getRankListData = () => {
        console.log('rank')
        contentList.value = [
            {
                meta: {
                    hot:true,
                    post:'专栏',
                    writer:'lcc1',
                    time:'1分钟前',
                    tag:'vue3'
                },
                title: 'rankrankrankrankrankrankrank',
                action:{
                    like:99,
                    comment:99,
                    share:''
                }
            },
            {
                meta: {
                    post:'专栏',
                    writer:'lcc2',
                    time:'1分钟前',
                    tag:'vue3'
                },
                title: 'rankrankrankrankrankrankrank',
                action:{
                    like:99,
                    comment:99,
                    share:''
                }
            }
        ] ;
        contentListCache['rank'] = contentList.value ;
    } ;
    return {
        contentList, contentListCache, contentNavList, getContentData
    }
}
</script>

<style lang=scss>
.timeline-content{
    width: 100%;
    background: white;
    .timeline-header{
        .content-nav{
            padding: 12px 24px;
            border-bottom: 1px solid hsla(0,0%,59.2%,.1);
            justify-content: flex-start;
            .content-nav-ul{
                display: flex;
                margin: 0;
                li{
                    margin-right: 5px;
                    a{
                        font-size: 14px;
                    }
                }
            }
        }
        .content-list{
            .content-list-item{
                border-bottom: 1px solid rgba(178,186,194,.15);
                cursor: pointer;
                .item-info{
                    padding: 18px 24px;
                    .meta-row{
                        .meta-ul{
                            display: flex;
                            margin: 0;
                            align-items: center;
                            li{
                                margin-right: 5px;
                                a{
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .title-row{
                        margin: 6px 0 12px;
                        a{
                            font-size: 18px;
                            color: #2e3135;
                            font-weight: 600;   
                            &:hover{
                                text-decoration: underline;
                            }
                            &:visited{
                                color: #909090;
                            }
                        }
                    }
                    .action-row{
                        .action-ul{
                            display: flex;
                            margin: 0;
                            align-items: center;
                            .action-li{
                                border: 1px solid #edeeef;
                                border-radius: 1px;
                                white-space: nowrap;
                                padding: 3px;
                                a{
                                    margin: 8px;
                                    color: #b2bac2;
                                    font-size: 12px;
                                    span{
                                        font-weight: 700;
                                    }
                                    i{
                                        margin-right: 5px;
                                    }
                                }
                                &:hover{
                                    background-color: #f7f8fa;
                                }
                                &:last-child{
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.showShareIconClass{
    opacity: 1 !important;
}
</style>
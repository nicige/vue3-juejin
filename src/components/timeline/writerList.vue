<template>
    <div class="writer-list">
        <header class="writer-list-header">🎖️作者榜</header>
        <ul class="writer-list-ul">
            <li v-for="(item,key) in writerList" :key="key">
                <a class="writer-item-link" href="">
                    <div class="writer-item-img" :style="{backgroundImage:`url(${item.img})`}"></div>
                    <div class="writer-item-info">
                        <a class="writer-name" href="" target="_blank">
                            {{item.name}}
                            <a class="writer-level" target="_blank">
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/lv-3.e108c68.svg" alt="">
                            </a>
                        </a>
                        <div class="writer-work">{{item.work}}</div>
                        <div class="writer-description">{{item.description}}</div>
                    </div>
                </a>
            </li>
            <li>
                <div class="more">
                    <span>完整榜单</span>
                    <i class="fas fa-angle-right" style="margin-left:5px;"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    setup () {
        const {writerList} = useWriterList()
        writerList.forEach(item => {
            item.img = require('../../assets/'+item.img+'.jpg') 
        });
        return {
            writerList
        }
    }
}
function useWriterList() {
    const writerList = [
        {
            name:'lcc',
            img:'photo',
            work:'html',
            description:'info-info-info',
            url:''
        },
        {
            name:'lcc',
            img:'photo',
            work:'css',
            description:'cc-c-c-c-c-c-c--c-c-ccccccccccccccccccccccccccc'
        },
        {
            name:'lcc',
            img:'photo',
            work:'vue',
            description:'l-l-l-l-l-l-l-l-'
        }
    ] ;
    return {
        writerList
    }
}
</script>

<style lang=scss>
.writer-list{
    height: 330px;
    .writer-list-header{
        padding: 0.8rem 1rem;
        border-bottom: 1px solid rgba(151, 151, 151, 0.1);
        font-size: 14px;
    }
    .writer-list-ul{
        margin: 0;
        .writer-item-link{  
            padding: 0.8rem 1rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            .writer-item-img{
                flex: 0 0 auto;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                margin-right: .8rem;
                background-size: cover;
            }
            .writer-item-info{
                overflow: hidden;
                text-overflow: ellipsis;
                .writer-name{
                    font-size: 16px;
                    font-weight: 400;
                    color: #333;
                    white-space: nowrap;
                    margin-bottom: 3px;
                    .writer-level{
                        margin-left: .33rem;
                        vertical-align: middle;
                    }
                }
                .writer-work,.writer-description{
                    color: #909090;
                    font-size: 14px;
                    margin-bottom: 3px;
                    white-space: nowrap;
                    
                }
            }
        }
    }
    .more{
        color: #007fff;
        padding: 0.5rem 0;
        text-align: center;
        border-top: 1px solid hsla(0,0%,59.2%,.1);
        font-size: 14px;
    }
}
</style>
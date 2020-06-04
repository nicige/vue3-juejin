<template>
    <div class="">
        <div class="info-more">
            <ul class="more-list" v-for="(item,key) in moreInfo" :key="key" >
                <li v-for="(i,k) in item" :key="k">
                    <a href="">{{i.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    setup () {
        const {moreInfo} = useMoreInfo()
        return {
            moreInfo
        }
    }
}
function useMoreInfo () {
    const moreInfo = [
        [
            {
                name: '关于',
                url:''
            },
            {
                name: '使用指南',
                url:''
            },
            {
                name: '建议反馈',
                url:''
            },
            {
                name: '加入我们',
                url:''
            }
        ],
        [
            {
                name: '商务合作',
                url:''
            },
            {
                name: '友情链接',
                url:''
            },
            {
                name: '用户协议',
                url:''
            },
            {
                name: '隐私政策',
                url:''
            }
        ],
        [
            {
                name: '津ICP备15003202号-2',
                url:''
            }
        ],
        [
            {
                name: '京公网安备11010802026719号',
                url:''
            }
        ],
        [
            {
                name: '©2020 掘金',
                url:''
            },
            {
                name: 'Powered by QingCloud',
                url:''
            },
        ]
    ] ;
    return {
        moreInfo
    }
}
</script>

<style lang=scss>
.info-more{
    background-color: transparent !important;
    box-shadow: none;
    margin-bottom: 1.2rem;
    padding-left: 5px;
    .more-list{
        font-size: 14px;
        line-height: 1.6;
        color: #9aa3ab;
        margin: 0;
        width:100%; 
        overflow:hidden;
        a{
            text-decoration: none;
            cursor: pointer;
            color: #909090;
            font-size: 12px;
            &::after{
                content: "·";
                color: rgb(198, 207, 218);
                margin: 0px 5px;
            }
        }
        li{
            float:left;
            line-height: 1.4;
        }
    }
}
</style>
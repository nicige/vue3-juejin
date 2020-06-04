<template>
    <div class="concern-tag">
        <nav class="nav-tag">
            <ul class="tag-ul">
                <li class="tag-ul-li" v-for="item in tagMenuList" :key="item.key">
                    <router-link class="tag-link" :to="item.key" >
                        {{item.name}}
                    </router-link>
                </li>
            </ul>
            <span class="manager-tag">标签管理</span>
        </nav>
    </div>
</template>

<script>
export default{
    setup () {
        const {tagMenuList} = useTagMenuList()
        return {
            tagMenuList
        }
    }
}
function useTagMenuList() {
    const tagMenuList = [
        {
            name:'test1',
            key:'test1'
        },
        {
            name:'test2',
            key:'test2'
        },
        {
            name:'test3',
            key:'test3'
        }
    ]
    return {
        tagMenuList
    }
}
</script>

<style lang=scss>
.concern-tag{
    height: 2.8rem;
    background-color: white;
    border: 1px solid #f4f5f5;
    .nav-tag{
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        .tag-ul{
            padding: 0;
            .tag-ul-li{
                float: left;
            }
            .tag-link{
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
        .manager-tag{
            cursor: pointer;
            color: #71777c;
            font-size: 14px;
            &:hover{
                color: #0876e4;
            }
        }
    }
}
</style>
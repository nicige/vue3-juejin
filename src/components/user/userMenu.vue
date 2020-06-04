<template>
    <ul class="userUl">
        <div class="user-group" v-for="(group,key) in userMenuList" :key="key">
            <li class="user-item" v-for="item in group.items" :key="item.key">
                <router-link class="user-item-link" :to="item.key">
                    <i class="fas icon" :class="item.icon"/>
                    <span>{{item.name}}</span>
                </router-link>  
            </li>
        </div>
    </ul>
</template>

<script>
export default{
    setup () {
        const { userMenuList } = useUserMenuList()
        return {
            userMenuList
        }
    }
}
function useUserMenuList () {
    const userMenuList = [
        {
            name: 'write',
            items: [
                { key:'write', name:"写文章", icon:'fa-pencil-alt' },
                { key:'draft', name:"草稿", icon:'fa-sticky-note' }
            ]
        },
        {
            name: 'mine',
            items: [
                { key:'index', name:"我的主页", icon:'fa-user-alt' },
                { key:'praise', name:"我赞过的", icon:'fa-thumbs-up' },
                { key:'collect', name:"我的收藏集", icon:'fa-star' },
                { key:'bought', name:"已购", icon:'fa-shopping-cart' },
                { key:'tag', name:"标签管理", icon:'fa-tag' },
            ]
        },
        {
            name: 'other',
            items: [
                { key:'setting', name:"设置", icon:'fa-cog' },
                { 
                    key:'info', 
                    name:"关于", 
                    icon:'fa-bell',
                    msg:[ 
                        { key:'download', name:"下载应用" },
                        { key:'about', name:"关于我们" },
                        { key:'join', name:"加入我们" },
                        { key:'translate', name:"翻译计划" },
                        { key:'partner', name:"合作伙伴" } 
                    ] 
                }
            ]
        },
        {
            name: 'user',
            items: [
                // { key:'login', name:"登入" },
                { key:'logout', name:"登出", icon:'fa-door-open' }
            ]
        }
    ] ;
    return {
        userMenuList
    }
}
</script>

<style lang=scss>
.userUl{
    border: 1px solid rgba(177,180,185,.45);
    border-radius: 4px;
    padding: 5px;
    width: 160px;
    height: 425px;
    background-color: white;
    padding: 0;
    .user-group{
        border-bottom: 1px solid rgba(177,180,185,.45);
        padding: 12px 0;
        &:last-child{
            border-bottom: 0;
        }
        .user-item{
            width: 100%;
            .user-item-link{
                display: flex;
                align-items: center;
                padding: 6px 15px;
                color: #71777c;
                &:hover{
                    background-color: hsla(0,0%,94.9%,.5);
                }
                .icon{
                    color: #b2bac2;
                    margin-right: 12px;
                }
            }
        }
    }
}
</style>
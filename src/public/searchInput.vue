<template>
    <span class="searchInput">
        <i v-if="state !== 'reduceThird'" class="fas fa-search icon" @click="searchValue"></i>
        <input id="search" type="text" :placeholder="搜索掘金" value="">
    </span>
</template>

<script>
import { ref, watch } from 'vue'
export default{
    props: ['state'],
    // setup() {
    //     let inputValue = ref('') ;
    //     // 点击搜索图标更新inputValue信息
    //     const searchValue = () => {
    //         inputValue.value = document.getElementById("search").value ;
    //     }
    //     return {
    //         searchValue
    //     }
    // }
    methods: {
        searchValue () {
            let _value = document.getElementById("search").value ;
            this.$emit('search', _value)
        }
    }
}
</script>

<style lang=scss>
.searchInput{
    margin: 0 10px;
    position: relative;
    .icon{
        position: absolute;
        color: #dcdee2;
        right: 0px;
        padding: 0 10px;
        line-height: 32px;
        cursor: pointer;
    }
    input{
        border: 1px solid #dcdee2;
        border-radius: 5px;
        height: 20px;
        width: 150px;
        padding: 5px;
        padding-left: 10px;
    }
}
</style>
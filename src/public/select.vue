<template>
    <span class="select">
        <select :ref="msgRef" @change="getTheRouter">
            <option v-for="item in msg" :key="item.key" :value="item.key">
                <router-link :to="item.key">
                    {{item.name}}
                </router-link>  
            </option>
        </select>
    </span>
</template>

<script>
export default{
    props: ["msg","msgRef"],
    methods: {
        getTheRouter() {
            let _idx = this.$refs.navUlReduce.selectedIndex
            this.$router.push(this.$refs.navUlReduce.options[_idx].value)
        }
    }
}
</script>

<style lang=scss>
.select{
    select{
        height: 100%;
        border: 0;
        color: #71777c;
        font-size: 16px;
        &:focus{
            outline: 0;
        }
        option{
            &:hover{
                color: #0876e4;
            }
        }
    }
}
</style>
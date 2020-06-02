<template>
    <div class="button">
        <button class="publish" @click="publishNewArticle">{{msg}}</button>
        <button class="more"><i class="fas fa-angle-down icon"></i></button>
    </div>
</template>

<script>
export default{
    props:['msg'],
    methods: {
        publishNewArticle() {
            this.$router.push('/newArticle')
        }
    }
}
</script>

<style lang=scss>
.button{
    margin: 0 10px;
    display: flex;
    .publish{
        background-color: #007fff;
        border: 0px solid white;
        border-radius: 4px 0 0 4px;
        height: 32px;
        color: white;
        padding: 0 0.9rem;
        cursor: pointer;
        &:hover{
            background-color: #0876e4;
        }
        &:focus{
            outline: none;
        }
    }
    .more{
        padding: 0 0.2rem;
        background-color: #007fff;
        border-radius: 0 4px 4px 0;
        height: 32px;
        border: 0;
        border-left: 0.03rem solid white;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: #0876e4;
        }
        &:focus{
            outline: none;
        }
        .icon{
            font-size: 10px;
        }
    }
}
</style>
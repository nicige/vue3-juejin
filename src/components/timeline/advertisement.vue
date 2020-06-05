<template>
    <div class="advertisement">
        <a :href="url" target="_blank">
            <img class="advertisement-img" :src="img" alt="advertisement">
        </a>
    </div>
</template>

<script>
export default{
    props:['url','img']
}
</script>

<style lang=scss>
.advertisement{
    height: 200px;
    .advertisement-img{
        background-size: cover;
        height: 100%;
    }
}
</style>
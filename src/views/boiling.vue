<template>
    <div id="boiling">
        <div class="left-nav">
            <BoilingNav />
        </div>
        <div class="middle-content">
            <BoilingContent />
        </div>
        <div class="right-user"></div>
        
    </div>
</template>

<script>
import BoilingNav from "@/components/boiling/boilingNav" ;
import BoilingContent from "@/components/boiling/boilingContent" ;
export default{
    components: {
        BoilingNav,BoilingContent
    }
}
</script>

<style lang=scss>
#boiling{
    margin-top: 20px;
    margin-bottom: 6rem;
    display: flex;
    align-items: flex-start;
    height: 500px;
    .middle-content{

    }
    .right-user{

    }
}
</style>
<template>
    <div id="timeline">
        <div class="left-box"></div>
        <div class="right-box">
            <Advertisement class="right-div-bottom"/>
            <WriterList class="right-div-bottom"/>
            <AppDownload class="right-div-bottom"/>
            <LinkShortcut class="right-div-bottom"/>
            <InfoMore/>
        </div>
    </div>
</template>

<script>
import Advertisement from '@/components/timeline/advertisement';
import WriterList from '@/components/timeline/writerList';
import AppDownload from '@/components/timeline/appDownload';
import LinkShortcut from '@/components/timeline/linkShortcut';
import InfoMore from '@/components/timeline/infoMore';

export default{
    components: {
        Advertisement,WriterList,AppDownload,LinkShortcut,InfoMore
    },
    setup () {
    }
}
</script>

<style lang=scss>
#timeline{
    display: flex;
    justify-content: space-between;
    .left-box{
        background: blue;
        height: 200px;
        width: 700px;
    }
    .right-box{
        width: 240px;
        .right-div-bottom{
            margin-bottom: 1.2rem;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
            border-radius: 2px;
            color: #333;
        }
    }
}
</style>
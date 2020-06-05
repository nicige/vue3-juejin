<template>
    <div id="timeline">
        <div class="left-box">
            <Content />
        </div>
        <div class="right-box">
            <div v-for="(item,key) in advertisementData" :key="key">
                <Advertisement :url='item.url' :img='item.img' class="right-div-bottom"/>
            </div>
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
import Content from '@/components/timeline/content';

export default{
    components: {
        Advertisement,
        WriterList,
        AppDownload,
        LinkShortcut,
        InfoMore,
        Content
    },
    setup () {
        const {advertisementData} = useAdvertisementData()
        return {
            advertisementData
        }
    }
}
function useAdvertisementData () {
    const advertisementData = [
        {
            url:'https://juejin.im/pin/5ed99dc6e51d451a65330fa9',
            img:'https://user-gold-cdn.xitu.io/159132014201564409ec3c8026cec7b9676a4291b53de.jpg?imageView2/1/q/85/format/webp/interlace/1'
        },
        {
            url:'https://2020.tlc.ivweb.io/',
            img:'https://user-gold-cdn.xitu.io/15909798522655328d6e470b6d28b03d6e4118e1ec252.jpg?imageView2/1/q/85/format/webp/interlace/1'
        }
    ] ;
    return {
        advertisementData
    }
}
</script>

<style lang=scss>
#timeline{
    display: flex;
    justify-content: space-between;
    .left-box{
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
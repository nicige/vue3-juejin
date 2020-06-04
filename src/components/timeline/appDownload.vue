<template>
    <div class="juejin-app-download">
        <div>
            <a class="app-link" href="https://juejin.im/app" target="_blank">
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/timeline.e011f09.png" alt="">
                <div class="app-context">
                    <div class="head-info">下载掘金客户端</div>
                    <div class="context-info">一个帮助开发者成长的社区</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default{
}
</script>

<style lang=scss>
.juejin-app-download{
    .app-link{
        display: flex;
        align-items: center;
        padding: 15.6px;
        img{
            width: 50px;
            height:50px;
            margin-right: 6px;
        }
        .app-context{
            .head-info{
                font-size: 14px;
                font-weight: 600;
                color: #333;
            }
            .context-info{
                margin-top: 6px;
                font-size: 12px;
                color: #909090;
            }
        }
    }
}
</style>
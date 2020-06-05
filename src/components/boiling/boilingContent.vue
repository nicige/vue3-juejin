<template>
    <div class="boiling-content">
        <div class="boiling-wrapper">
            <div class="editor">
                <div class="editor-body">
                    <div class="text-content">
                        <textarea class="text-input" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="editor-bottom"></div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default{
}
</script>

<style lang=scss>
.boiling-content{
    width: 570px;
    max-width: 100%;
    flex-shrink: 0;
    margin-right: 15px;
    background: white;
    .boiling-wrapper{
        padding-bottom: 60px;
        .editor{
            padding: 18px;
            margin-bottom: 8px;
            .editor-body{
                .text-content{
                    position: relative;
                    border-radius: 2px;
                    outline: 1px solid hsla(0,0%,59.2%,.2);
                    background-color: rgba(226,230,235,.2);
                    .text-input{
                        padding: 0;
                        border: none;
                        width: 100%;
                        /* min-height: 75px; */
                        resize: none;
                    }
                }
            }
        }
    }
}
</style>
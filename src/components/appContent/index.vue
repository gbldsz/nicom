<template>
    <div class="appContent" ref="rs">
        <div>
            <span style="height:30px;display:inline-block;">3</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
@Component({})
export default class Index extends Vue {
    ck(){
        console.log(1)
    }
    mounted() {

        (<HTMLElement>this.$refs.rs).addEventListener("click",(e:any)=>{
            this.$store.dispatch("setEl",e.target)
            console.dir(e.target)
        },true)

    }
}
</script>


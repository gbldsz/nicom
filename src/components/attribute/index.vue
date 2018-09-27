<template>
    <div class="attribute">
        <div>
            <span>内容</span>
            <input type="text" v-model="b">
        </div>
            <div>
                <span>高度</span>
                <input type="text" v-model="el_height">
        </div>
                <div>
                    <span>宽度</span>
                    <input type="text" v-model="el_width">
        </div>

                    <pre v-if="bbb">
            {{bbb.innerHTML}}
        </pre>
                </div>

</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class MyComp extends Vue {
    //内容
  b: any = 1;
  @Watch("b")
  onChange(v: string, ov: string) {
      this.bbb.innerHTML = v;
  }
    //高度
  el_height: any = "";
  @Watch("el_height")
  onChange_el_height(v: string, ov: string) {
      this.bbb.style.height = v;
  }
    //宽度
  el_width: any = "";
  @Watch("el_width")
  onChange_el_width(v: string, ov: string) {
      this.bbb.style.width = v;
  }

  created() {}

  get bbb() {
    return this.$store.state.el;
  }

  
  @Watch("bbb")
  onChangeb(v: string, ov: string) {
    this.b = this.bbb.innerHTML;
    this.el_height = this.bbb.style.height;
    this.el_width = this.bbb.style.width;
  }
}
</script>

<style>
@import url("./attribute.css");
</style>


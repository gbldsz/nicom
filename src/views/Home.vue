<template>
  <div class="home">
    <appContent class="w80 h100 fl"></appContent>
    <attribute class="w20 h100 fr"></attribute>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import appContent from '@/components/appContent/index.vue'; // @ is an alias to /src
import attribute from '@/components/attribute/index.vue';
@Component({
  components: {
    appContent,
    attribute
  },
})
export default class Home extends Vue {
  
}
</script>

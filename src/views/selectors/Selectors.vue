<template>
  <div class="selectors">
    <SelectorsNav />
    
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SelectorsNav from './SelectorsNav.vue';

@Component({
  components: {
    SelectorsNav,
  },
})
export default class Selectors extends Vue {}
</script>

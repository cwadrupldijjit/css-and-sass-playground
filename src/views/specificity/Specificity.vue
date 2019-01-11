<template>
  <div class="specificity">
    <SpecificityNav />

    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpecificityNav from './SpecificityNav.vue';

@Component({
  components: {
    SpecificityNav,
  },
})
export default class Specificity extends Vue {}
</script>

<template>
  <div class="box-model view">
    <BoxModelNav />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoxModelNav from './BoxModelNav.vue';

@Component({
  components: {
    BoxModelNav,
  },
})
export default class BoxModel extends Vue {}
</script>

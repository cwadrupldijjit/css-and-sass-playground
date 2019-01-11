<template>
    <nav class="subnav">
        <ul>
            <router-link to="the-concept" tag="li">
                <a>Concept</a>
            </router-link>

            <router-link to="calculator" tag="li">
                <a>Calculator</a>
            </router-link>
        </ul>
    </nav>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SpecificityNav extends Vue {
    
}
</script>


<style lang="scss" scoped>
</style>

<template>
    <nav class="subnav">
        <ul>
            <router-link to="the-concept" tag="li">
                <a>Concept</a>
            </router-link>

            <router-link to="content" tag="li">
                <a>Content</a>
            </router-link>

            <router-link to="padding" tag="li">
                <a>Padding</a>
            </router-link>

            <router-link to="border" tag="li">
                <a>Border</a>
            </router-link>

            <router-link to="margins" tag="li">
                <a>Margins</a>
            </router-link>

            <router-link to="other" tag="li">
                <a>Other Properties</a>
            </router-link>

            <router-link to="examples" tag="li">
                <a>Examples</a>
            </router-link>
        </ul>
    </nav>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BoxModelNav extends Vue {
    
}
</script>


<style lang="scss" scoped>
</style>

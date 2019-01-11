<template>
    <nav class="subnav">
        <ul>
            <router-link to="the-concept" tag="li">
                <a>Concept</a>
            </router-link>

            <router-link to="element" tag="li">
                <a>Element</a>
            </router-link>

            <router-link to="class-and-attribute" tag="li">
                <a>Class and Attribute</a>
            </router-link>

            <router-link to="id" tag="li">
                <a>Id</a>
            </router-link>

            <router-link to="relative" tag="li">
                <a>Relative</a>
            </router-link>

            <router-link to="wildcard" tag="li">
                <a>Wildcard</a>
            </router-link>

            <router-link to="pseudo" tag="li">
                <a>Pseudo</a>
            </router-link>

            <router-link to="separators" tag="li">
                <a>Selector Separators</a>
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
export default class SelectorsNav extends Vue {
    
}
</script>


<style lang="scss" scoped>
</style>

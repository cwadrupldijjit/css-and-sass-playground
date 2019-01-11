<template>
    <nav>
        <ul>
            <router-link to="/" exact tag="li">
                <a>Home</a>
            </router-link>

            <router-link to="/overview" tag="li">
                <a>Overview</a>
            </router-link>
            
            <router-link to="/selectors" tag="li">
                <a>Selectors</a>
            </router-link>
            
            <router-link to="/specificity" tag="li">
                <a>Specificity</a>
            </router-link>
            
            <router-link to="/box-model" tag="li">
                <a>Box Model</a>
            </router-link>
            
            <router-link to="/position-and-layout" tag="li">
                <a>Position/Layout</a>
            </router-link>
            
            <router-link to="/flexbox-and-grid" tag="li">
                <a>Flexbox and Grid</a>
            </router-link>

            <router-link to="/sass" tag="li">
                <a>Sass/scss</a>
            </router-link>
        </ul>
    </nav>
</template>


<style scoped lang="scss">

nav {
    background-color: #ccf3f3;
}

li {
    font-size: 18px;
}

</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    
}
</script>

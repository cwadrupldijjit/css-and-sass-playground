<template>
  <div id="app">
    <Navbar />
    
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';

@Component({ components: { Navbar } })
export default class App extends Vue {
  
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  line-height: 1.45;
  letter-spacing: .03em;
}

:link,
:visited {
  text-decoration: none;
  color: #00e;
}

a:active,
a:focus,
a:hover {
  cursor: pointer;
  text-decoration: underline;
}

nav {
    width: 100%;
    display: flex;
    // background-color: #ccf3f3;

    ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        margin: 0 auto;
    }

    li:not(.active) a {
        &:hover,
        &:focus,
        &:active {
            color: green;
            // font-weight: 700;
            background-color: #fffa;
        }
    }

    a {
        display: inline-flex;
        padding: 0 20px;
        justify-content: center;
        align-items: center;
        line-height: 1em;
        height: 2.5em;
    }

    .active {
        font-weight: 800;
        background-color: #fff;

        a {
            color: black;
        }
    }
}

.subnav {
    background-color: #4bb1b1;

    li {
        font-size: 14px;
        
        &:not(.active) {
          :visited,
          :link {
            color: #eee;
          }

          :hover,
          :focus,
          :active {
            color: #444;
          }
        }
    }
}

article.subview {
  padding: 40px 15px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

hr {
  margin: 40px 0;
  border: 0;
  border-top: 1px solid #ddd;
}

dt {
  margin-bottom: .5em;
  text-decoration: underline;

  &:not(:first-child) {
    margin-top: .9em;
  }
}

.editor {
    height: 300px;
    border: 1px solid #ddd;
    margin: 1em auto;
}

code {
  display: inline-block;
  background-color: #f9f9f9;
  box-shadow: 0 0 2px #aaa;
  padding: 0 2px;
}

</style>

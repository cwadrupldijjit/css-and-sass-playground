<template>
  <article class="home subview">
    <h2>Welcome to the CSS Practice playground!</h2>

    <p>
      The links at the top of the site are different aspects of CSS or
      styling-related topics.  Clicking each of them will result in a page
      that is split into smaller subpages that will give an overview of the
      concept, have examples, or a playground that you can use to mess around
      with the concept.
    </p>

    <h2>About this site</h2>

    <p>
      This site was made as attempt to approach CSS in a simpler, more
      understandable way to aid those who have a hard time working with and
      understanding CSS in general.  This stems from a belief that nobody
      knows everything about CSS, but this site will cover some of the
      basics and fundamentals of it to get you started.
    </p>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>

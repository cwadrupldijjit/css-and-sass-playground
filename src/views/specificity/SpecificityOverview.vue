<template>
  <article class="specificity subview">
    <h2>Specificity</h2>

    <h3>TL;DR:</h3>

    <dl>
      <dd>The way CSS knows what wins between conflicting styles</dd>
      <dd>
        Ranks:
        (wildcard,combinators).element.class(attributes).id.<code>style</code>(attribute).<code>!important</code>
      </dd>
    </dl>

    <h3>What is specificity?</h3>

    <p>
      Specificity determines which styles are applied when conflicting style rules
      are applied to the same element.  Each style rule (such as
      <code>font-family: Arial;</code>) will have its own specificity, but it is
      determined based on the selectors used for the ruleset it is in or if it
      is found in a <code>style</code> attribute on an HTML tag.  It is easier to
      understand this by using a point-based system that follows this pattern:
    </p>

    <div class="specificity-point-system">
      <legend>
        <router-link to="/selectors/wildcard">Wildcard</router-link>
        and
        <router-link to="/selectors/relative">
          combinator
        </router-link>
      </legend>
      <legend>
        <router-link to="/selectors/element">Elements</router-link>
        and
        <router-link to="/selectors/pseudo">Pseudo Elements</router-link>
      </legend>
      <legend>
        <router-link to="/selectors/class-and-attribute">Classes and Attributes</router-link>
        and
        <router-link to="/selectors/pseudo">Pseudo Classes</router-link>
      </legend>
      <legend>
        <router-link to="/selectors/id">Id</router-link>
      </legend>
      <legend>
        <code>style</code> HTML attribute
      </legend>
      <legend>
        <code>!important</code> (rule-level importance)
      </legend>
      <div class="wildcard">
          N/A
      </div>
      <div class="element">
        0
      </div>
      <div class="class">
        0
      </div>
      <div class="id">
        0
      </div>
      <div class="style">
        0
      </div>
      <div class="important">
        0
      </div>
    </div>

    <p>Let me break it down a bit.</p>

    <p>
      Arranged from left to right in order of weight are the different levels of
      specificity.  Along the top, you can see what applies to each level.  It
      starts off with wildcards and combinators, which have no bearing on the
      spcificity of the selector (and because of this, everywhere else that this
      chart is used, it will not include those).  The next three use the rest of
      the selectors mentioned in the
      <router-link to="/selectors">selectors</router-link> pages.  The
      penultimate one is a modifier for a rule that increases the
      specificity exponentially  Every level beyond that will affect
      the specificity.
    </p>

    <p>
      Here are a couple of examples that can help you visualize how this point
      system works:
    </p>

    <p><code>*</code></p>

    <SpecificityGauge selector="*" />

    <p class="note">Can only override other selectors with the exact same selector</p>

    <p><code>div</code></p>

    <SpecificityGauge selector="div" />

    <p class="note">Stronger than </p>

    <p><code>.btn</code></p>

    <SpecificityGauge selector=".btn" />

    <p><code>#book</code></p>

    <SpecificityGauge selector="#book" />

    <p><code>#book > div .title</code></p>

    <SpecificityGauge selector="#book > div .title" />

    <p><code>#book > div .title:not(.smaller)::before</code></p>

    <SpecificityGauge selector="#book > div .title:not(.smaller)::before" />

    <p><code>&lt;div <b>style</b>=""&gt;&lt;/div&gt;</code></p>

    <SpecificityGauge :is-style="true" />

    <p><code>div { font-family: Arial !important; }</code></p>

    <SpecificityGauge selector="div" :includes-important="true" />

    <p class="note">Can only override other selectors with the exact same selector</p>

    <p><code>&lt;div <b>style</b>="font-family: Arial !important"&gt;&lt;/div&gt;</code> (💣)</p>

    <SpecificityGauge selector="" :is-style="true" :includes-important="true" />

    <p class="note">Can never be more specific than this</p>

    <h3>Cascading</h3>

    <p>
        Specificity always has more bearing on what styles are applied, but
        there are times when the specificity has the same scores.  What
        style wins then?  This is where the "cascading" part of CSS plays
        the largest role.
    </p>

    <p>
        Cascading says that the last time a style with the same specificity
        is found, use that one.  Here's an example of what I mean:
    </p>

    <p>HTML:</p>

    <monaco-editor
        class="editor"
        :value="cascadingHtml"
        language="html"
        :options="{
            scrollBeyondLastLine: false,
            readOnly: true,
        }"
    ></monaco-editor>

    <p>CSS:</p>

    <monaco-editor
        class="editor"
        :value="cascadingCss"
        language="css"
        :options="{
            scrollBeyondLastLine: false,
            readOnly: true,
        }"
    ></monaco-editor>

    <p>Result:</p>

    <div class="cascading-example" v-html="cascadingHtml"></div>

    <p>
      This is the reason why stylesheet order matters.
      If you include your styles in an HTML document before the
      styles for Bootstrap or another CSS library, then you can
      never win the style battle without making your own styles
      more specific than their counterparts in the library, which
      leads to harder-to-maintain styles overall.
    </p>

    <p>
      Rule of thumb, always include custom styles last to avoid
      this problem.
    </p>
  </article>
</template>


<style lang="scss">

.cascading-example {
  p {
    background-color: green;
  }

  p {
    background-color: yellow;
  }
}

</style>



<style lang="scss" scoped>

.specificity-point-system {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px 0;
  text-align: center;

  > div {
    margin: 0;
    // padding-block-start: 1.5em;
    border: 0;
    flex: 1;
    font-size: 24px;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  legend {
    color: #444;
    font-size: 12px;
    background-color: #fffa;
    align-self: center;
  }

  span {
    flex: 1;
    display: inline-flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: .5em;
  }

  .wildcard {
    background-color: #f8f8f8;
  }

  .element {
    background-color: #4dc5e4;
  }

  .class {
    background-color: #47ce6f;
  }

  .id {
    background-color: #f7e714;
  }

  .style {
    background-color: #ff8800;
  }

  .important {
    color: #fff;
    background-color: #910000;
  }
}

</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpecificityGauge from '../../components/SpecificityGauge.vue';

@Component({
  components: {
    SpecificityGauge,
  },
})
export default class Specificity extends Vue {
  public cascadingHtml = `<p>Which one will win?</p>`;

  public cascadingCss = `p {
    background-color: green;
}

/* more styles */

p {
    background-color: yellow;
}`;
};
</script>

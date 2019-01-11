<template>
    <article class="selectors-wildcard subview">
        <h2>Wildcard Selector</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dd>
                The <code>*</code> character
            </dd>
        </dl>

        <hr>

        <h3>What is a wildcard selector?</h3>
        
        <p>
            There are times when you don't need any specific selector, but may
            need to select everything.  In that case, you can use an asterisk
            (or <code>*</code> character) in lieu of another selector.  It's
            even more generalized than element selectors and when it comes to
            <router-link to="/specificity">specificity</router-link>, it
            doesn't add any more weight the more you use it.
        </p>

        <p>
            Since the specificity isn't affected by the wildcard selector, it
            may seem like you don't have to worry about its use.  However,
            using the wildcard character instead of other, more appropriate
            selectors can cause more issues than it's worth.  For instance, if
            you leave a lonely <code>*</code> as the selector for a ruleset,
            it will apply every style inside of it to everything and can destroy
            style inheritance with properties like <code>font-size</code>,
            <code>font-family</code>, <code>color</code>, etc.  As such, it's
            best if you use this in conjunction with other selectors to ensure
            that you are only affecting certain things with styles that employ
            this selector.
        </p>

        <h4>Example:</h4>

        <monaco-editor
            class="editor"
            v-model="sampleCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <div class="example" v-html="sampleHtml"></div>

        <PageControls
            back-link="relative"
            back-text="Relative Selectors"
            forward-link="pseudo"
            forward-text="Pseudo Selectors" />
    </article>
</template>


<style lang="scss">

.example {
    section > * {
        outline: 2px solid hotpink;
    }
}

</style>


<style lang="scss" scoped>

pre {
    font-size: 18px;
}

.selector {
    display: inline-block;
    padding: 0 2px;
    font-weight: 600;
    outline: 2px solid red;
}

</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SelectorsWildcard extends Vue {
    public sampleHtml = `<section>
    <h3>Today is a good day!</h3>

    <p class="subtext">What should we do today?</p>

    <ul>
        <li>Write a song</li>
        <li id="book">Read a book</li>
        <li>Ride a horse</li>
    </ul>

    <p>Remember that</p>

    <blockquote>
        Well done is better than well said.<br>
        <span class="space-before">- Benjamin Franklin</span>
    </blockquote>
</section>`;

    public sampleCss = `/* Select all direct children of the "section" */
section > * {
    outline: 2px solid hotpink;
}`;
};
</script>

<template>
    <article class="selectors-element subview">
        <h2>Element Selector</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dd>
                The tag's name
            </dd>
        </dl>

        <hr>

        <h3>What is an element selector?</h3>
        
        <p>
            This type of selector matches elements based on their name.  For
            instance, a paragraph tag's selector would simply be
            <code>p</code>, a heading tag could be <code>h3</code>, and an anchor
            tag would be <code>a</code>.  Element selectors are also
            case-insensitive, so <code>blockquote</code>,
            <code>BLOCKQUOTE</code>, and <code>bLoCkQuOtE</code> will all match
            the same, though out of the three, it's highly suggested you only
            use lower-case letters.
        </p>
        
        <p>
            To summarize, here is the example from the overview with only element
            selectors used:
        </p>

        <monaco-editor
            class="editor"
            v-model="sampleCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <div class="example">
            <section>
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
            </section>
        </div>

        <PageControls
            back-link="the-concept"
            back-text="Concept"
            forward-link="class-and-attribute"
            forward-text="Class and Attribute Selectors" />
    </article>
</template>


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

.example {
    section {
        border: 1px solid #ddd;
        padding: 25px;
    }

    h3 {
        margin-top: 0;
        font-size: 25px;
    }

    p {
        font-style: italic;
    }

    blockquote {
        border-left: 2px solid #aab;
        margin-inline-start: 0;
        padding-left: 40px;
    }

    span {
        margin-left: 1em;
    }
}

</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SelectorsElement extends Vue {
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
    public sampleCss = `section {
    border: 1px solid #ddd;
    padding: 25px;
}

h3 {
    margin-top: 0;
    font-size: 25px;
}

p {
    font-style: italic;
}

blockquote {
    border-left: 2px solid #aab;
    margin-inline-start: 0;
    padding-left: 40px;
}

span {
    margin-left: 1em;
}`;
};
</script>

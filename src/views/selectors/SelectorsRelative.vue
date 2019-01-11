<template>
    <article class="selectors-relative subview">
        <h2>Relative Selectors</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dd>
                Selectors that indicate some sort of relationship or relative
                position requirements in a document
            </dd>
            <dd>
                Examples are <b>a space character</b>, <b>&gt;</b>, <b>+</b>, and
                <b>~</b>
            </dd>

            <dt>Also called</dt>
            
            <dd>
                <b>Combinators</b>
            </dd>
        </dl>

        <hr>

        <h3>What is a relative selector?</h3>
        
        <p>
            Typically when styling a document, it becomes difficult to achieve
            the look you want when only using single selectors.  They can either
            be too broad (such as element selectors) or too narrow (such as
            id selectors).  Occasionally, you want to style only certain items
            found inside of another item, or only want the next one in a series
            to receive the styling.  For these cases, using one of the relative
            selectors will be useful.
        </p>
        
        <p>
            When composing selectors with the following characters, realize that
            any base selector (which I'm using as the term for the selector
            appearing before the character it mentions) will only be used to
            find elements <u>on its way</u> to the final selector in the series.
            It will not itself actually be selected.  For example, in the
            descendant selector <code>div p</code>, only the <code>p</code>
            elements will be selected, not the <code>div</code> tag itself.
        </p>

        <p>
            Before discussing the following relative selectors, it is something
            to note that these kinds of selectors do not alter
            <router-link to="/specificity">specificity</router-link> at all.
        </p>

        <p>
            Before we get into other, relative selectors, let's just mention
            how to combine multiple selectors for the same element.
        </p>



        <h4>Multiple Selectors (combined with no space)</h4>

        <p>
            When two or more selectors are put one immediately following the
            other, they indicate that the elements selected must match every
            selector in that series.
        </p>

        <p></p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="multipleSelectorHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="multipleSelectorCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="multiple-selectors-example" v-html="multipleSelectorHtml"></div>

        <hr>

        <p>
            The rest of these are examples of relative selectors.
        </p>



        <h4>Descendant Selector (space character)</h4>

        <p>
            When two selectors are separated by only spaces (or any whitespace
            character), then it will select all elements that match the second
            selector as long as they are found somewhere inside of the first
            selector, no matter how many levels deep.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="sampleHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="descendantSelectorCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="descendant-example" v-html="sampleHtml"></div>



        <h4>Child Selector (<code>&gt;</code>)</h4>

        <p>
            When two selectors are separated by a greater than symbol (i.e.,
            <code>&gt;</code>), then it will select all elements that match the
            second selector as long as it is directly inside of an element
            matching the first selector and no deeper.
        </p>

        <p>
            Below, notice that the "- Benjamin Franklin" isn't selected but the
            others that are directly inside of the <code>section</code> are.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="sampleHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="childSelectorCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="child-example" v-html="sampleHtml"></div>



        <h4>Next Sibling Selector (<code>+</code>)</h4>

        <p>
            When two selectors are separated by a plus sign, it will start its
            search for the first selector and only match the second selector if
            it is the next child in the parent, or "sibling".  If it doesn't
            appear directly next to it, then it will not match.
        </p>

        <p>
            In other words, if there was another element that isn't another list
            item added directly beneath the <code>#book</code> element, then it
            won't match anything.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="sampleHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="nextSiblingSelectorCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="next-sibling-example" v-html="sampleHtml"></div>



        <h4>(Following) Sibling Selector (<code>~</code>)</h4>

        <p>
            When two selectors are separated by a tilde <code>~</code>,
            it will start its
            search for the first selector and only match the second selector if
            it is one of the children following it in the parent, or a "following
            sibling".  If it doesn't appear after it but still inside of the
            parent, then it will not match.
        </p>

        <p>
            Notice in the example below that because the <code>#book</code> is
            the second item in the list, only the <code>li</code>s following it
            will be selected.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="sampleHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="siblingSelectorCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="sibling-example" v-html="sampleHtml"></div>

        <PageControls
            back-link="id"
            back-text="Id Selectors"
            forward-link="wildcard"
            forward-text="Wildcard Selectors" />
    </article>
</template>


<style lang="scss">

.selectors-relative .quote {
    color: #888;
    font-style: italic;
    padding: 1em 40px;
}

.multiple-selectors-example {
    .my-btn {
        background-color: transparent;
        border: 1px solid black;
        padding: 12px;
        cursor: pointer;
    }

    .my-btn.primary {
        background-color: #46c7ee;
    }

    .my-btn.secondary {
        background-color: #07b44a;
    }
}

.descendant-example {
    section div {
        outline: 2px solid hotpink;
    }
}

.child-example {
    section > div {
        outline: 2px solid hotpink;
    }
}

.next-sibling-example {
    #book + li {
        outline: 2px solid hotpink;
    }
}

.sibling-example {
    #book ~ li {
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
export default class SelectorsRelative extends Vue {
    public sampleHtml = `<div class="outside-section">Outside of section</div>

<section>
    <div>Today is a good day!</div>

    <div class="subtext">What should we do today?</div>

    <ul>
        <li>Watch a movie</li>
        <li id="book">Read a book</li>
        <li>Write a song</li>
        <li>Ride a horse</li>
    </ul>

    <p>Remember that</p>

    <div class="quote">
        Well done is better than well said.
        <div class="space-before">- Benjamin Franklin</div>

    </div>
</section>`;

    public multipleSelectorHtml = `<button class="my-btn">Standard button</button>

<button class="my-btn primary">Primary button</button>

<button class="my-btn secondary">Secondary button</button>`;

    public multipleSelectorCss = `.my-btn {
    background-color: transparent;
    border: 1px solid black;
    padding: 12px;
    cursor: pointer;
}

.my-btn.primary {
    background-color: #46c7ee;
}

.my-btn.secondary {
    background-color: #07b44a;
}`;

    public descendantSelectorCss = `/* Any div inside of a "section" tag */
section div {
    outline: 2px solid hotpink;
}`;

    public childSelectorCss = `/* Any div directly inside of a "section" tag */
section > div {
    outline: 2px solid hotpink;
}`;

    public nextSiblingSelectorCss = `/* Any li directly next to the "#book" */
#book + li {
    outline: 2px solid hotpink;
}`;

    public siblingSelectorCss = `/* Any li sibling after to the "#book" tag */
#book + li {
    outline: 2px solid hotpink;
}`;
};
</script>

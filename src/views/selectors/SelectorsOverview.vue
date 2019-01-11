<template>
    <article class="selectors-overview subview">
        <h2>The Concept</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dt>Selector</dt>

            <dd>
                A combination of words and symbols used to match elements in
                a document
            </dd>
            <dd>
                There are several types of selectors with different meanings such
                as
                <router-link to="element" tag="b"><a>element</a></router-link>,
                <router-link to="class" tag="b"><a>class and attribute</a></router-link>,
                <router-link to="id" tag="b"><a>id</a></router-link>,
                <router-link to="relative" tag="b"><a>relative</a></router-link>,
                <router-link to="wildcard" tag="b"><a>wildcard</a></router-link>,
                <router-link to="pseudo" tag="b"><a>pseudo</a></router-link>, and
                <router-link to="combined" tag="b"><a>combined</a></router-link> selectors
            </dd>
        </dl>

        <hr>

        <h3>What is a selector?</h3>
        
        <p>
            CSS, as its name suggests, is used to style HTML documents.  It needs
            several things before it can do its job properly, such as answering the
            questions of "what it should style" and "what styles should it apply".
            Selectors answer the first question.
        </p>

        <p>
            Each selector is a pattern of words and symbols that tells CSS which
            elements it should apply the given styles to.  The styles that are
            applied may depend upon the element that is selected.  For instance, a 
            "list-style" property doesn't do anything on elements that aren't
            some sort of list like a paragraph or link tag, but will work on
            "ul"s or "ol"s.  
        </p>

        <p>
            This element-matching pattern begins a ruleset or style block like so:
        </p>

        <pre>
    <span class="selector">div</span> {
        /* some styles */
    }
    </pre>

        <p>
            There are many different types of selectors. To name a few:
        </p>

        <ul>
            <li>
                <b>Element</b>: A tag name (like <code>p</code>)
            </li>
            <li>
                <b>Class</b>: One or many words you can give to an element to
                categorize or identify it (like <code>.some-class</code>)
            </li>
            <li>
                <b>Id</b>: A single word that can identify a single item (like
                <code>#my-id</code>)
            </li>
            <li>
                <b>Relative</b>: A selector that indicates a relationship or path
                to an element (like <code>p .special</code>)
            </li>
            <li>
                <b>Wildcard</b>: A selector for all the things (<code>*</code>)
            </li>
            <li>
                <b>Pseudo</b>: Selects elements only in certain states or that are
                there in spirit (better explanation on the "pseudo" page; like
                <code>::before</code> or <code>:hover</code>)
            </li>
            <li>
                <b>Combined/complex</b>: Many selectors composed together into one
                selector (like <code>p a.special-link</code>)
            </li>
        </ul>

        <h3>Example:</h3>

        <p>
            Given the following template:
        </p>

        <monaco-editor
            class="editor"
            v-model="sampleHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>
            And the following css:
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

        <p>
            It would render like this:
        </p>

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

        <PageControls forward-link="element" forward-text="Element Selectors" />
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

    .subtext {
        color: #889;
    }

    #book::after {
        content: ' 📖';
    }

    blockquote {
        border-left: 2px solid #aab;
        margin-inline-start: 0;
        padding-left: 40px;
    }

    span.space-before {
        margin-left: 1em;
    }
}

</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SelectorOverview extends Vue {
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
    public sampleCss = `/* Element selectors */
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

/* Class selector */
.subtext {
    color: #889;
}

/* Id and pseudo selector combined */
#book::after {
    content: ' 📖';
}

/* Element selector */
blockquote {
    border-left: 2px solid #aab;
    margin-inline-start: 0;
    padding-left: 40px;
}

/* Element selector with a class */
span.space-before {
    margin-left: 1em;
}`;
};
</script>

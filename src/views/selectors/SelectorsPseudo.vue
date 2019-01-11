<template>
    <article class="selectors-pseudo subview">
        <h2>Pseudo Selectors</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dt>Pseudo selectors</dt>
            <dd>
                Selectable parts of the DOM only available at runtime
            </dd>
            
            <dt>Pseudo element selectors</dt>
            <dd>
                Start with either one or two colons
            </dd>
            <dd>
                Sections of the template not found in the HTML itself but
                that can be styled as if they were elements.
            </dd>
            <dd>
                Examples are <code>::before</code>, <code>::after</code>, and
                <code>::first-line</code>
            </dd>

            <dt>Pseudo class selectors</dt>
            <dd>
                Start with only one colon
            </dd>
            <dd>
                An automatic class-like selector that matches based off of the
                current state or position of an element.
            </dd>
            <dd>
                Examples are <code>:hover</code>, <code>:focus</code>,
                <code>:first-child</code>, and <code>:last-child</code>
            </dd>
        </dl>

        <hr>

        <h3>What are pseudo selectors?</h3>
        
        <p>
            "Pseudo selectors" are selectors that never show up in the HTML at
            development-time.  They represent things that can only ever exist at
            runtime, once the elements are displayed on the page.  These
            simplify styling sections of the page that would be difficult or
            impossible to otherwise style.  Each one starts with one or two
            colons.  The two types are <b>pseudo elements</b> and
            <b>pseudo classes</b>.
        </p>

        <h3>What is a pseudo element?</h3>
        
        <p>
            A pseudo element is a part of the DOM that is generated and styled
            on-demand.  These elements provide the ability to select and control
            aspects of the DOM such as content that will appear
            <code>::before</code> or <code>::after</code> the contents of the
            selected elements or even the <code>::first-line</code> in a body of
            text.
        </p>

        <p>
            Pseudo elements are set apart from pseudo classes in syntax by the
            double colons (<code>::</code>) prefixing the name.  Most browsers
            (at least modern ones) support using only one colon instead if you
            prefer.  However, the distinction between a pseudo class and a
            pseudo element is the main reason why you might use the double colon
            syntax instead.
        </p>

        <p>
            These are examples of pseudo element selectors:
        </p>



        <h4><code>::first-line</code> and <code>::first-letter</code></h4>

        <p>
            These two pseudo elements deal with a body of text.  The
            <code>::first-line</code> will select all of the text on the first
            line of a body of text (meaning if the text spills onto the next
            line, it will no longer be selected and styled).  The
            <code>::first-letter</code> will likewise only select the first
            character in the text it's selecting.  So for instance, this fancy
            drop-caps and first line text transformation is possible by using a
            combination of these pseudo elements:
        </p>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="firstTextHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="firstTextCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="first-text-example" v-html="firstTextHtml"></div>



        <h4><code>::before</code> and <code>::after</code></h4>

        <p>
            These two selectors give you the ability to add content to the
            otherwise selected elements.  As can be expected,
            <code>::before</code> adds it before the contents of the selected
            element whereas <code>::after</code> adds it after.  This has
            historically been the go-to for many icon fonts to add a character
            to an element with a predefined class.  Bootstrap has also used both
            of these selectors in order to <code>clear</code> the
            <code>float</code> applied to the contents of the selected element.
        </p>

        <p>
            Many others have used these properties in order to make complex
            shapes and animations with pure CSS.  Examples of this can be found
            in <a href="https://css-tricks.com/the-shapes-of-css/">
                this article on CSS-tricks</a>.
        </p>

        <p>
            It's not uncommon for one of these to be used with modals or
            tooltips to simplify the template.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="beforeAfterHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="beforeAfterCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="before-after-example" v-html="beforeAfterHtml"></div>



        <h3>What is a pseudo class?</h3>
        
        <p>
            A pseudo class appears when an element is in a certain state.  For
            instance, it may only appear when you <code>:hover</code> over an
            element, when it's currently <code>:focus</code>ed, if it contains
            a <code>:link</code> or if that link has been <code>:visited</code>.
            These states are often only applied as the user interacts with the
            site.
        </p>

        <p>
            Some pseudo classes also are only applied when the element is in a
            certain position or order.  Some of these include
            <code>:first-child</code>, <code>:last-child</code>,
            <code>:nth-child(n)</code>, or <code>:only-child</code>.  These ones
            are great when dealing with lists of items and need to style any
            of them specially.
        </p>

        <p>
            Below are only a few of the pseudo classes I find the most useful.
            If you want to see a larger list and look at what they do, I suggest
            going to
            <a href="https://www.w3schools.com/css/css_pseudo_classes.asp">this w3schools site</a>.
        </p>



        <h4><code>:hover</code>, <code>:focus</code>, <code>:active</code></h4>

        <p>
            Each of these states have to deal with a focal point in a page.
            <code>:hover</code> is applied whenever the mouse's cursor is
            positioned above it.  <code>:focus</code> is applied whenever the
            tab focus is on it.  <code>:active</code> is applied whenever the
            button, link, or element is clicked, pressed, or had "Enter" pressed.
            Each of these is used for interactive UIs or accessibility purposes.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="focusHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="focusCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="focus-example" v-html="focusHtml"></div>



        <h4><code>:link</code> and <code>:visited</code></h4>

        <p>
            These two selectors are specifically for links and they change
            depending on your browser history.  If the browser sees that you
            have visited the page before, it will apply the <code>:visited</code>
            pseudo class.  If not, then it will just apply the <code>:link</code>
            class.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="linkHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="linkCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="link-example" v-html="linkHtml"></div>



        <h4><code>:not()</code></h4>

        <p>
            Forasmuch as there are a multitude of pseudo selectors that can do
            most of the things you need them to, you have cases where you want
            the inverse of what a selector would select.  In those cases, you
            can use <code>:not()</code>.
        </p>

        <p>
            It works this way:  Inside of the parentheses, you put the selector
            that you want to negate.  Works with any selector.  Say I want to
            grab any child of the <code>section</code> like we did in the
            <router-link to="relative">relative</router-link> examples, but this
            time, we want anything but the <code>div</code>s.  The example below
            shows how we can do this.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="notHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="notCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="not-example" v-html="notHtml"></div>



        <h4><code>:first-child</code>, <code>:last-child</code>, and <code>:nth-child()</code></h4>

        <p>
            When it comes to lists, it's not uncommon to need to style some
            elements differently and perhaps highlight every other row.  In
            the case that you want to only affect the first item, consider
            using <code>:first-child</code>.  If you only want some styles to
            affect the last item, use <code>:last-child</code>.  If you want to
            style only a specific child at a specific spot or if you want to
            style several according to a pattern, then look into
            <code>:nth-child()</code>.
        </p>

        <p>
            <code>:nth-child()</code> is super powerful.  You can use it to
            select the second one, the fifth one, or even every other one.  
            Each of those can be done in the following ways respectively:
        </p>

        <p>
            <code>:nth-child(2)</code><br>
            <code>:nth-child(5)</code><br>
            <code>:nth-child(even)</code>
        </p>

        <p>
            If that wasn't cool enough, you can specify a different increment
            by using the algebraic variable <code>n</code>.  Here is the
            selector for evens, odds, and every third
            one starting at the second one:
        </p>

        <p>
            <code>:nth-child(2n)</code><br>
            <code>:nth-child(2n + 1)</code><br>
            <code>:nth-child(3n + 2)</code>
        </p>

        <p>
            As you can get a feeling for, there are three parts to the formula
            you can pass into the <code>:nth-child</code> selector:
            The <b>coefficient</b> (that spaces out each one selected;
            "3" is every third one), <code>n</code> (which is the placeholder
            for whichever row number it's currently iterating through), and
            the <b>shift</b>, which gives it how many rows it should offset
            the count by.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="listHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="listCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="list-example" v-html="listHtml"></div>

        <PageControls
            back-link="wildcard"
            back-text="Wildcard Selector"
            forward-link="separators"
            forward-text="Selector Separators" />
    </article>
</template>


<style lang="scss">

.selectors-pseudo .quote {
    color: #888;
    font-style: italic;
    padding: 1em 40px;
}

.first-text-example {
    p::first-letter {
        font-family: serif;
        font-size: 3em;
        line-height: .9;
        float: left;
        margin-right: .2em;
    }

    p::first-line {
        text-transform: uppercase;
        font-style: italic;
    }
}

.before-after-example {
    button::before {
        content: '🎉';
    }

    button::after {
        content: '🎂';
    }
}

.focus-example {
    button:hover {
        font-weight: bold;
    }

    button:active {
        background-color: forestgreen;
        color: white;
    }
    
    button:focus {
        outline: 2px solid hotpink;
    }
}

.link-example {
    :link {
        color: forestgreen;
    }

    :visited {
        color: goldenrod;
    }
}

.not-example {
    section > :not(div) {
        outline: 2px solid hotpink;
    }
}

.list-example {
    li:first-child {
        text-decoration: underline;
    }

    li:last-child {
        font-weight: 600;
    }
    
    li:nth-child(2n + 1) {
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
export default class SelectorsPseudo extends Vue {
    public firstTextHtml = `<p>
    It was the best of times, it was the worst of times,<br>
    it was the age of wisdom, it was the age of foolishness,<br>
    it was the epoch of belief, it was the epoch of incredulity,<br>
    it was the season of Light, it was the season of Darkness,<br>
    it was the spring of hope, it was the winter of despair...
</p>`;

    public firstTextCss = `p::first-letter {
    font-family: serif;
    font-size: 2em;
    float: left;
}

p::first-line {
    text-transform: uppercase;
}`;


    public beforeAfterHtml = `<button>Happy birthday!</button>`;

    public beforeAfterCss = `button::before {
    content: '🎉';
}

button::after {
    content: '🎂';
}`;


    public focusHtml = `<button>Hover, focus, or click me!</button>`;

    public focusCss = `button:hover {
    font-weight: bold;
}

button:active {
    background-color: forestgreen;
    color: white;
}

button:focus {
    outline: 2px solid hotpink;
}`;


    public linkHtml = `<a href="https://google.com">Google</a>`;

    public linkCss = `:link {
    color: forestgreen;
}

:visited {
    color: goldenrod;
}`;

    public notHtml = `
<div class="outside-section">Outside of section</div>

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

    public notCss = `/* Any child that is not a div that is directly inside of a "section" tag */
section > :not(div) {
    outline: 2px solid hotpink;
}`;

    public listHtml = `<ul>
    <li>Watch a movie</li>
    <li>Read a book</li>
    <li>Write a song</li>
    <li>Ride a horse</li>
    <li>Learn a new game</li>
    <li>Play a kazoo</li>
    <li>Practice a swan dive</li>
</ul>`;

    public listCss = `li:first-child {
    text-decoration: underline;
}

li:last-child {
    font-weight: 600;
}

li:nth-child(2n + 1) {
    outline: 2px solid hotpink;
}`;
};
</script>

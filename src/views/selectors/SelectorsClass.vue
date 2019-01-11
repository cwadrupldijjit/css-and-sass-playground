<template>
    <article class="selectors-class subview">
        <h2>Class and Attribute Selectors</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dt>Class selector</dt>
            <dd>
                A selector that starts with a <code>.</code>
            </dd>
            <dd>
                Any one word (separated by spaces) in an element's
                <code>class</code> attribute
            </dd>

            <dt>Attribute selector</dt>
            <dd>
                The ability to select an element based off of other attributes
                than just <code>class</code> or <code>id</code>
            </dd>
        </dl>

        <hr>

        <h3>What is an attribute?</h3>
        
        <p>
            Elements in HTML can have other information stored in the tag in the
            form of <code>key="value"</code> pairs.  In the case of classes,
            they are one of the attributes that an element can have.
        </p>

        <h3>What is a class?</h3>

        <p>
            A class is an attribute whose purpose is to classify or group like
            elements together.  You can use the same class name many times on any
            element to get similar results.  If you have used Bootstrap, this
            is the primary way of how it styles elements.
        </p>

        <p>
            For instance:
        </p>

        <monaco-editor
            class="editor"
            v-model="singleClassHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>
            You can specify more than one class on a single element by separating
            each class by a space.  The nice thing about this is that it allows
            us to compose or use multiple specialized classes to style different
            aspects of the element.
        </p>
        
        <p>
            Take this example html:
        </p>

        <monaco-editor
            class="editor"
            v-model="multipleClassHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>
            The result would look like this:
        </p>

        <div class="multi-class-example" v-html="multipleClassHtml"></div>

        <p>
            You can see that the paragraph tag has three classes in it:
            <code>bigger</code>, <code>italics</code>, and <code>bold</code>.
            Each of the styles defined above it are being applied separately
            and resulting in the look that we want for it.
        </p>

        <h3>What is a class selector?</h3>

        <p>
            A class selector targets one of these classes on elements.  Each one,
            as seen in the example above, has a corresponding class selector in
            the style block above it.  Class selectors start with a period and
            can contain hyphens, underscores, numbers, and text.  Also be careful
            about capitalization, as classes are case-sensitive and "Bigger" does
            not equal "bigger". 
        </p>

        <h3>What is an attribute selector?</h3>

        <p>
            An attribute selector can target any attributes on an element.  This
            includes the "class" and "id" attributes, but you will generally not
            use it to select those attributes.  However, you may if you need
            more flexibility in selecting text contained in the classes or id.
        </p>

        <p>
            There are several types of attribute selectors and below, we'll go
            through each of them.  Every one of them is contained within square
            brackets (i.e. <code>[</code> and <code>]</code>), and each selector
            can only contain one attribute; if you want to select more than one
            attribute, you will need to put them side-by-side like this:
            <code>[attr1][attr2]</code>.
        </p>



        <h4>Attribute Exists (<code>[attr]</code>)</h4>

        <p>
            This type only selects elements that include that attribute.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="attributeExistsHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="attributeExistsCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="attribute-exists-example" v-html="attributeExistsHtml"></div>



        <h4>Attribute is Equal To (<code>[attr="value"]</code>)</h4>

        <p>
            This type only selects elements that have the attribute and the exact
            value you specify.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="attributeEqualToHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="attributeEqualToCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="attribute-equal-example" v-html="attributeEqualToHtml"></div>



        <h4>Attribute Starts With (<code>[attr^="value"]</code>)</h4>

        <p>
            This type only selects elements that have the matching attribute and
            only if it starts with the given value.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="attributeContainsHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="attributeEqualToCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="attribute-starts-with-example" v-html="attributeContainsHtml"></div>



        <h4>Attribute Ends With (<code>[attr$="value"]</code>)</h4>

        <p>
            This type only selects elements that have the matching attribute and
            only if it ends with the given value.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="attributeContainsHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="attributeEndsWithCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="attribute-ends-with-example" v-html="attributeContainsHtml"></div>



        <h4>Attribute Contains (<code>[attr*="value"]</code>)</h4>

        <p>
            This type only selects elements that have the matching attribute and
            only if it contains the given value.
        </p>

        <h5>Example:</h5>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            :value="attributeContainsHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

        <monaco-editor
            class="editor"
            :value="attributeContainsCss"
            language="css"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>Result:</p>

        <div class="attribute-contains-example" v-html="attributeContainsHtml"></div>

        <hr>
        
        <p>
            There are more types, but these are ones that may be the most useful
            in most situations.
        </p>
        
        <PageControls
            back-link="element"
            back-text="Element Selectors"
            forward-link="id"
            forward-text="Id Selectors" />
    </article>
</template>

<style lang="scss">

.multi-class-example {
    .bigger {
        font-size: 18px;
    }

    .italics {
        font-style: italic;
    }

    .bold {
        font-weight: bold;
    }
}

.attribute-exists-example {
    [type] {
        outline: 2px solid hotpink;
    }
}

.attribute-equal-example {
    [type="text"] {
        outline: 2px solid hotpink;
    }
}

.attribute-starts-with-example {
    [class^="action"] {
        outline: 2px solid hotpink;
    }
}

.attribute-ends-with-example {
    [class$="action"] {
        outline: 2px solid hotpink;
    }
}

.attribute-contains-example {
    [class*="action"] {
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

    blockquoTe {
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
export default class SelectorsClass extends Vue {
    public singleClassHtml = `<p class="my-class"></p>

<div class="my-class">
    <button class="btn"></button>
</div>

<span class="my-class"></span>`;

    public multipleClassHtml = `<style>
    .bigger {
        font-size: 18px;
    }

    .italics {
        font-style: italic;
    }

    .bold {
        font-weight: bold;
    }
</style>

<p class="bigger italics bold">How are you?</p>`;



    public attributeExistsHtml = `<button>Without a [type]</button>

<button type="submit">With a [type]</button>


<input placeholder="Without a [type]" />

<input type="text" placeholder="With a [type]" />`;

    public attributeExistsCss = `[type] {
	outline: 2px solid hotpink;
}`;



    public attributeEqualToHtml = `<input type="password" placeholder="Type [password]" />

<input type="text" placeholder="Type [text]" />

<input type="date" placeholder="Type [date]" />`;

    public attributeEqualToCss = `[type="text"] {
	outline: 2px solid hotpink;
}`;



    public attributeContainsHtml = `<p class="action not-activity">This is an action</p>

<p class="activity">This is not an action</p>

<p class="main-action">This is a main action</p>`;


    public attributeStartsWithCss = `[class^="action"] {
	outline: 2px solid hotpink;
}`;

    public attributeEndsWithCss = `[class$="action"] {
	outline: 2px solid hotpink;
}`;

    public attributeContainsCss = `[class*="action"] {
	outline: 2px solid hotpink;
}`;




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

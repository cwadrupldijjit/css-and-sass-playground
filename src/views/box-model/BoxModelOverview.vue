<template>
  <article class="box-model subview">
    <h2>The Concept</h2>

    <h3>TL;DR:</h3>

    <dl>
        <dt>Box Model:</dt>

        <dd>Every element has a box</dd>
        <dd>
            Each box has
            <router-link to="content" tag="b"><a>content</a></router-link>,
            <router-link to="padding" tag="b"><a>padding</a></router-link>,
            <router-link to="border" tag="b"><a>border</a></router-link>, and
            <router-link to="margin" tag="b"><a>margin</a></router-link>
        </dd>
        <dd>
            Aspects of each of these can be manipulated separately and can
            affect the position of itself and other elements on the page
        </dd>
    </dl>

    <hr>

    <h3>What is the Box Model?</h3>
    
    <p>
        When the HTML is loaded into the DOM, every tag (even hidden ones)
        results in a box surrounding the contents.  If a tag in the template
        contains other tags, then those tags will be part of the content of
        the parent tag and also have boxes of their own.
    </p>

    <p>
        The Box Model has to do with each of these boxes that are created
        when the browser renders a template and the space that each element
        takes.  It includes different parts of the box that can each be styled
        separately from each other to mold it into the shape, size, and
        position that you want.
    </p>

    <p>
        Each box has four different sections (starting from the inmost
        part and going out):
    </p>

    <ul>
        <li>
            <b>Content</b>: The actual contents of the element
        </li>
        <li>
            <b>Padding</b>: The space between the contents and the border
        </li>
        <li>
            <b>Border</b>: A line that can separate the contents and padding from
            everytyhing else
        </li>
        <li>
            <b>Margin</b>: The space between the border of an element and other
            elements
        </li>
    </ul>

    <p>
        Though this section doesn't explicitly deal with positioning and
        layout, the box model can change how flow and positioning works for
        elements.  A larger discussion can be found in the
        <router-link to="/position-and-layout">Positioning and Layout</router-link>
        guide.
    </p>

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
        May the Force be with you!
    </div>

    <p>
        Breaking them down into each part, we get this:
    </p>

    <div class="margin">
        <span class="label">Margin</span>
        <fieldset class="padding">
            <legend class="border-label">Border</legend>
            <span class="label">Padding</span>
            <div class="content">
                <span class="label">Content</span>

                May the Force be with you!
            </div>
        </fieldset>
    </div>

    <PageControls forward-link="content" forward-text="Content" />
  </article>
</template>


<style lang="scss" scoped>

.example {
    margin: 10px;
    border: 3px solid black;
    padding: 10px;
}

.margin,
.padding,
.content {
    position: relative;
    padding: 25px 10px 10px;
}

.margin {
    background-color: #f09f5d;
}

.label,
.border-label {
    color: #444;
    font-weight: 600;
    font-size: 14px;
}

.label {
    left: 5px;
    top: 5px;
    position: absolute;
}

.padding {
    background-color: #6de64f;
    border: 3px solid black;

    > .label {
        top: 22px;
    }
}

.border-label {
    background-color: #fffd;
    padding-inline-end: 10px;
    padding-inline-start: 10px;
    padding-block-end: 2px;
    padding-block-start: 2px;
    border: 1px solid black;
}

.content {
    background-color: #22c0d4;
}

</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class BoxModelOverview extends Vue {
    public sampleHtml = `<p>May the Force be with you!</p>`;
    public sampleCss = `.example {
    margin: 10px;
    border: 3px solid black;
    padding: 10px;
}`;
}
</script>

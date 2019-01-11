<template>
    <article class="selectors-separators subview">
        <h2>Selector Separators</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dd>
                The <code>,</code> character
            </dd>
            <dd>
                Allows for multiple sets of selectors to be applied to the same
                ruleset
            </dd>
        </dl>

        <hr>

        <h3>What is a selector separator?</h3>
        
        <p>
            Quite simply, it is the <code>,</code> symbol, which tells CSS that
            you want to use the same ruleset with more than just one selector
            or combination of selectors.  This becomes useful when you can't
            select all of the items you want to style the same with just one
            selector, to prevent from over-styling (being too broad) or
            under-styling (being too specific).
        </p>

        <h4>Example:</h4>

        <p>HTML:</p>

        <monaco-editor
            class="editor"
            v-model="sampleHtml"
            language="html"
            :options="{
                scrollBeyondLastLine: false,
                readOnly: true,
            }"
        ></monaco-editor>

        <p>CSS:</p>

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
            back-link="pseudo"
            back-text="Pseudo Selectors"
            forward-link="examples"
            forward-text="Examples" />
    </article>
</template>


<style lang="scss">

.example {
    input[type="text"],
    input[type="password"],
    input[type="number"] {
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
    public sampleHtml = `<form>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <input type="number" placeholder="Age" />
    <input type="submit" value="Submit" />
</form>`;

    public sampleCss = `input[type="text"],
input[type="password"],
input[type="number"] {
    outline: 2px solid hotpink;
}`;

    public mounted() {
        requestAnimationFrame(() => {
            const form = document.querySelector<HTMLFormElement>('form')
            
            if (form) form.addEventListener('submit', this.handleSubmit);
        });
    }

    public beforeDestroy() {
        const form = document.querySelector<HTMLFormElement>('form');

        if (form) form.removeEventListener('submit', this.handleSubmit);
    }

    public handleSubmit(e: Event) {
        e.preventDefault();
    }
};
</script>

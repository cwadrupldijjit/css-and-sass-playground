<template>
    <article class="selectors-id subview">
        <h2>Id Selector</h2>

        <h3>TL;DR:</h3>

        <dl>
            <dd>
                A selector that starts with a <code>#</code>
            </dd>
            <dd>
                Matches the value in the tag's <code>id</code> attribute
            </dd>
        </dl>

        <hr>

        <h3>What is an id selector?</h3>
        
        <p>
            This type of selector matches elements based on the value in the
            <code>id</code> attribute which can be used in your CSS by beginning
            it with the <code>#</code> symbol.
            This approach is similar to that of classes in that it is a
            developer-provided name to identify an element and is
            case-sensitive.  Where it differs is that it only allows for one
            unbroken word (with hyphens, underscores, and numbers) instead of
            multiple and
            should only ever be used once for one element and in one place.
        </p>

        <p>
            That is not to say that CSS won't honor the id if it's used in
            multiple places.  As mentioned above, you can only specify
            one id per element (if used, spaces would become a part of it and
            would break how you'd use it in your CSS).  It also has higher
            <router-link to="/specificity">specificity</router-link> than every
            other selector, which means that it will be harder to override the
            styles if necessary.
        </p>

        <p>
            A good rule of thumb for this is to only use ids for styling if you
            have one-off exceptions&mdash;anything else further complicates your
            styles and makes it harder to maintain.
        </p>
        
        <p>
            To summarize, here is the example from the 
            <router-link to="the-concept">overview</router-link>
            with only an id selector used:
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

        <div class="example" v-html="sampleHtml"></div>

        <PageControls
            back-link="class-and-attribute"
            back-text="Class and Attribute Selectors"
            forward-link="relative"
            forward-text="Relative Selectors" />
    </article>
</template>


<style lang="scss">

.example {
    #book {
        font-weight: 600;
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
export default class SelectorsId extends Vue {
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

    public sampleCss = `#book {
    font-weight: 600;
}`;
};
</script>

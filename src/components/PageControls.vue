<template>
    <div class="page-controls">
        <div class="back">
            <router-link v-if="backLink" :to="backLink">
                Back: &laquo; {{ backText }}
            </router-link>
        </div>

        <div class="vr" v-if="backLink && forwardLink"></div>

        <div class="next">
            <router-link v-if="forwardLink" :to="forwardLink">
                Next: {{ forwardText }} &raquo;
            </router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.page-controls {
    display: flex;
    height: 3em;
    border-top: 1px solid #ddd;
    margin-top: 45px;
    padding-top: 20px;
    font-size: 18px;
}

.back,
.next {
    flex: 1;
    display: flex;
    align-items: center;
}

.back {
    // justify-content: ;
}

.vr {
    display: inline-block;
    border-left: 1px solid #ddd;
    height: 100%;
}

.next {
    justify-content: flex-end;
}

</style>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PageControls extends Vue {
    @Prop()
    public backLink: string;
    
    @Prop()
    public forwardLink: string;

    @Prop()
    public backText: string;
    
    @Prop()
    public forwardText: string;
};
</script>

<template>
    <div class="specificity-calculator">
        <h2>Specificity Calculator</h2>

        <div class="selector-a">
            <input type="text" v-model="selectorA" />
            <SpecificityGauge :selector="selectorA" @results="onResultEmit('a', $event)" />
        </div>
        
        <div class="comparison"></div>

        <div class="selector-b"></div>
    </div>
</template>


<style lang="scss" scoped>

</style>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SpecificityGauge from '../../components/SpecificityGauge.vue';
import { ISpecificity } from '../../types/specificity';

@Component({
    components: {
        SpecificityGauge,
    },
})
export default class SpecificityCalculator extends Vue {
    public selectorA = '';
    public selectorB = '';

    public onResultEmit(side: 'a'|'b', specificity: ISpecificity) {
        console.log(specificity);
    }

    private compareSpecificities(specA: ISpecificity, specB: ISpecificity) {
        return specA.important - specB.important ||
            specA.style - specB.style ||
            specA.id - specB.id ||
            specA.class - specB.class ||
            specA.element - specB.element;
    }
};
</script>

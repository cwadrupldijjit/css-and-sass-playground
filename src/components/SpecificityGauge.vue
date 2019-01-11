<template>
    <div class="specificity-gauge">
      <div class="element">
        {{ specificity.element }}
      </div>
      <div class="class">
        {{ specificity.class }}
      </div>
      <div class="id">
        {{ specificity.id }}
      </div>
      <div class="style">
        {{ specificity.style }}
      </div>
      <div class="important">
        {{ specificity.important }}
      </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { parseSelector } from '../utilities/parse-selector';

@Component
export default class SpecificityGauge extends Vue {
    @Prop()
    public selector: string;
    @Prop({
        default: false,
    })
    public isStyle: boolean;
    @Prop({
        default: false,
    })
    public includesImportant: boolean;

    public specificity = {
        element: 0,
        class: 0,
        id: 0,
        style: 0,
        important: 0,
    };

    public created() {
        this.updateSelector();
        
        this.$watch('selector', () => this.updateSelector());
        this.$watch('isStyle', () => this.updateSelector());
        this.$watch('includesImportant', () => this.updateSelector());
    }

    private updateSelector() {
        const specificity = parseSelector(this.selector, this.isStyle, this.includesImportant);
        this.specificity = specificity

        this.$emit('results', specificity);
    }
};
</script>


<style lang="scss" scoped>

.specificity-gauge {
  display: flex;

  > div {
    padding: .2em .7em;
  }
}

.wildcard {
  background-color: #f8f8f8;
}

.element {
  background-color: #4dc5e4;
}

.class {
  background-color: #47ce6f;
}

.id {
  background-color: #f7e714;
}

.style {
  background-color: #ff8800;
}

.important {
  color: #fff;
  background-color: #910000;
}

</style>

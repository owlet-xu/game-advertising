import { Vue, Component } from 'vue-property-decorator';
import Title from '@/components/title/title';

@Component({
    components: {
        Title
    }
})
export default class Award extends Vue {

    apply() {
        this.$emit('apply');
    }
}

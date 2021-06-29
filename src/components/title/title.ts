import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Title extends Vue {
    @Prop({ default: '' })
    title: any;

}

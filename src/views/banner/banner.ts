import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Banner extends Vue {

    private navText = ['比赛流程', '明星评委团', '线上考核', '赛事规则', '赛事奖励', '立即报名'];
    apply(index: any) {
        if (index === 5) { this.$emit('apply'); } else {
            this.$emit('changeAnchor', index);
        }
    }
}

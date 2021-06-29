import { Vue, Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import attachService from '@/api/attach';
import ResizeMixin from '@/common/mixin/resize-mixin';

// 组件
import Banner from '@/views/banner/banner';
import About from '@/views/about/about';
import Flow from '@/views/flow/flow';
import Star from '@/views/star/star';
import Rules from '@/views/rules/rules';
import Award from '@/views/award/award';
import Title from '@/components/title/title';

@Component({
    components: { Title, Banner, About, Flow, Star, Rules, Award }
})
export default class Home extends mixins(ResizeMixin) {
    private sliber = [
        '立即报名',
        '比赛流程',
        '明星评委团',
        '线上考核',
        '赛事规则',
        '赛事奖励',
        'TOP'
    ];
    private formShow = false;

    private name = '';
    private phone = '';
    private gameId = '';
    private gameArae = '';
    private level = '';
    private hishory = '';
    //
    private fileList: any = [];
    private videoFile: any;
    private isUpload = true;

    reset() {
        this.name = '';
        this.phone = '';
        this.gameId = '';
        this.gameArae = '';
        this.level = '';
        this.hishory = '';
    }

    get formValid() {
        if (this.name.length > 0
            && this.phone.length > 0
            && this.gameId.length > 0
            && this.gameArae.length > 0
            && this.level.length > 0
            && this.hishory.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    closeForm() {
        this.formShow = false;
    }

    apply() {
        this.formShow = true;
    }

    sliberClick(index: number) {
        if (index === 0) {
            this.formShow = true;
        }
        this.changeAnchor(index - 1);
    }

    changeAnchor(payload: any) {
        let dom: HTMLElement | any;
        if (payload === 0) {
            dom = document.getElementById('flow');
        }
        if (payload === 1) {
            dom = document.getElementById('star');
        }
        if (payload === 2) {
            dom = document.getElementById('upload');
        }
        if (payload === 3) {
            dom = document.getElementById('rules');
        }
        if (payload === 4) {
            dom = document.getElementById('award');
        }
        if (payload === 5) {
            dom = document.getElementById('home');
        }
        if (dom) {
            dom.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    }

    xiaohei() {
        this.$router.push({ path: '/xiaohei' });
    }

    /**
     * 预览
     * @param file
     */
    uploadVideo(file: any) {
        if (!this.isUpload) {
            this.$message({
                message: '视频已经上传，系统审核中...'
            });
            return;
        }
        if (file.raw.size && file.raw.size > 0) {
            // 文件类型是否为视频
            if (file.raw.type === 'video/mp4' || file.raw.type === 'video/mov' || file.raw.type === 'video/video/x-m4v') {
                // 是否超过50M
                if (file.raw.size <= 50000 * 10240) {
                    this.videoFile = file;
                } else {
                    this.$message({
                        message: '视频大于50M',
                        type: 'warning'
                    });
                }
            } else {
                this.$message({
                    message: '请上传视频',
                    type: 'warning'
                });
            }
        }
    }

    /**
     * 提交
     */
    submit() {
        if (this.formValid) {
            const peopleInfo = [
                this.name,
                this.phone,
                this.gameId,
                this.gameArae,
                this.level,
                this.hishory
            ];
            const people = peopleInfo.toString();
            if (this.videoFile && this.videoFile.name.length > 0) {
                const formData = new FormData();
                formData.append('file', this.videoFile.raw);
                attachService.uploadFile(formData, 1, people).then((res: any) => {
                    this.$message({
                        message: '视频上传成功，系统审核中...'
                    });
                    this.reset();
                    this.fileList = [];
                    this.formShow = false;
                });
                this.isUpload = false;
            } else {
                this.$message({
                    message: '请上传参赛视频...'
                });
            }
        } else {
            this.$message({
                message: '信息不完整',
                type: 'warning'
            });
        }
    }

}

import { Vue, Component } from 'vue-property-decorator';
import Title from '@/components/title/title';
import attachService from '@/api/attach';

@Component({
    components: {
        Title
    }
})
export default class Table extends Vue {
    private tableData: any = [];
    private videoUrl = '';
    private dialogTableVisible = false;

    async created() {
        this.refresh();
    }

    refresh() {
        attachService.getAllVideo(1).then((data: any) => {
            this.tableData = data;
            this.$message({
                message: '操作成功',
                type: 'success'
            });
        });

    }

    tableTransform(data: any, index: number) {
        if (data) {
            const tt = data.split(',');
            return tt[index];
        }
    }

    playVideo(fildId: any) {
        const url = attachService.getVideoByFileId(fildId);
        this.videoUrl = url;
        this.dialogTableVisible = true;
    }

    delteVideo(data: any) {
        attachService.deleteVideo(data.fileId, data.module).then((res: any) => {
            this.refresh();
        });
    }

    dowonVideo(fildId: any) {
        attachService.dowonVideo(fildId);
    }
}

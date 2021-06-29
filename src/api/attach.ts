import store from '@/store';
import * as httpclient from 'justin-http/dist/httpclient';
import { attachUrl } from '@/common/url/attach';
import { stringFormat } from 'justin-package-gutils/dist/string-helper';

/**
 * 附件上传
 * @author Justin
 */
export default {
    async uploadFile(file: FormData, metadata: any, peopleInfo: any): Promise<any> {
        const url = store.getters.configs.attachUrl + attachUrl.uploadBatch;
        const config: any = {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        };
        file.append('metadata', `{"module":"${metadata}","remark":"false","system":"xiaohei","businessId":"${peopleInfo}"}`);
        return await httpclient.postPromise(url, file, config);
    },

    async getAllVideo(moduleName: any): Promise<any> {
        const url = stringFormat(store.getters.configs.attachUrl + attachUrl.getAllVideo, moduleName);

        return await httpclient.getPromise(url);
    },

    getVideoByFileId(fileId: any) {
        const url = stringFormat(store.getters.configs.attachUrl + attachUrl.preview, fileId);
        return url;
    },

    async deleteVideo(fileId: string, moduleName: any): Promise<any> {
        const url = stringFormat(store.getters.configs.attachUrl + attachUrl.deleteVideo, fileId, moduleName);
        return await httpclient.deletePromise(url);
    },

    dowonVideo(fileId: string) {
        const url = stringFormat(store.getters.configs.attachUrl + attachUrl.dowonVideo, fileId);
        const a = document.createElement('a'); // 创建a标签
        a.setAttribute('download', ''); // download属性
        a.setAttribute('href', url); // href链接
        a.click(); // 自执行点击事件
    }

};

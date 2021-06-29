import { Component, Vue } from 'vue-property-decorator';

/**
 * 监听窗口的宽度，做小屏幕自适应
 */
@Component
export default class ResizeMixin extends Vue {
    created() {
        this.resizeHandler();
    }

    beforeMount() {
        window.addEventListener('resize', this.resizeHandler);
    }

    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    private getDeviceType() {
        const htmlDom = document.getElementsByTagName('html')[0];
        const rect = document.body.getBoundingClientRect();
        if (rect.width - 1 < 1200) {
            htmlDom.style.fontSize = '14px';
            htmlDom.className = '';
        }
        if (rect.width - 1 < 750) {
            htmlDom.style.fontSize = '12px';
            htmlDom.className = '';
        }
    }

    private resizeHandler() {
        if (!document.hidden) {
            this.getDeviceType();
        }
    }
}

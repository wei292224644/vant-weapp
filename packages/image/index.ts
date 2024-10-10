import { VantComponent } from '../common/component';
import { button } from '../mixins/button';

VantComponent({
  mixins: [button],

  classes: ['custom-class', 'loading-class', 'error-class', 'image-class'],

  props: {
    src: {
      type: String,
      observer(src) {
        this.setData({
          error: false,
          loading: true,
        });
        this.changeImageSrc(src);
      },
    },
    round: Boolean,
    width: null,
    height: null,
    radius: null,
    lazyLoad: Boolean,
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    showMenuByLongpress: Boolean,
    useGlobalPrefix: Boolean,
    fit: {
      type: String,
      value: 'fill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    showError: {
      type: Boolean,
      value: true,
    },
    showLoading: {
      type: Boolean,
      value: true,
    },
  },

  data: {
    imageSrc: "",
    error: false,
    loading: true,
    viewStyle: '',
  },

  methods: {
    onLoad(event) {


      this.setData({
        loading: false,
      });

      this.$emit('load', event.detail);
    },

    onError(event) {
      this.setData({
        loading: false,
        error: true,
      });

      this.$emit('error', event.detail);
    },

    changeImageSrc(src) {
      if (this.data.useGlobalPrefix) {
        const app = getApp();
        if (app.globalData?.imagePrefix) {
          this.setData({
            imageSrc: app.globalData?.imagePrefix + src
          })
        } else {
          this.setData({
            imageSrc: src
          })
        }
      } else {
        this.setData({
          imageSrc: src
        })
      }
    },

    onClick(event) {
      this.$emit('click', event.detail);
    },
  },
});

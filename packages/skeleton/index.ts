import { VantComponent } from '../common/component';

VantComponent({
  classes: ['avatar-class', 'title-class', 'row-class'],
  props: {
    row: {
      type: Number,
      value: 0,
      observer(value: number) {
        this.setData({ rowArray: Array.from({ length: value }) });
      },
    },
    isCustomNavigation: {
      type: Boolean,
      value: false,
    },
    title: Boolean,
    avatar: Boolean,
    loading: {
      type: Boolean,
      value: true,
    },
    animate: {
      type: Boolean,
      value: true,
    },
    avatarSize: {
      type: String,
      value: '32px',
    },
    avatarShape: {
      type: String,
      value: 'round',
    },
    titleWidth: {
      type: String,
      value: '40%',
    },
    rowWidth: {
      type: null,
      value: '100%',
      observer(val) {
        this.setData({ isArray: val instanceof Array });
      },
    },
  },

  data: {
    isArray: false,
    rowArray: [],
    navHeight: 0,
  },

  created() {
    if (!this.data.isCustomNavigation) return;

    const custom = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navHeight: custom.height + custom.top,
    });
  },
});

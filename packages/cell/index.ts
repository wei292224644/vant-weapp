import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
import { useParent } from '../common/relation';

VantComponent({
  classes: [
    'title-class',
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class',
  ],
  relation: useParent('cell-group'),

  mixins: [link],

  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true,
    },
    titleStyle: String,
    listenLast: {
      type: Boolean,
      value: true
    }
  },

  data: {
    isLast: false,
  },

  methods: {
    onClick(event: WechatMiniprogram.TouchEvent) {
      this.$emit('click', event.detail);
      this.jumpLink();
    },
  },
});

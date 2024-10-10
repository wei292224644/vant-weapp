import { useChildren } from '../common/relation';
import { VantComponent } from '../common/component';

VantComponent({
  relation: useChildren('cell', function (target) {
    this.updateChild(target);
  }),
  props: {
    title: String,
    border: {
      type: Boolean,
      value: false,
    },
    inset: Boolean,
  },
  methods: {
    updateChild(target) {

      setTimeout(() => {
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          child.setData({
            isLast: i == this.children.length - 1
          })
        }
      }, 0)
    },
  }
});

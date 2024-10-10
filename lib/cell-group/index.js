"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var relation_1 = require("../common/relation");
var component_1 = require("../common/component");
(0, component_1.VantComponent)({
    relation: (0, relation_1.useChildren)('cell', function (target) {
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
        updateChild: function (target) {
            var _this = this;
            setTimeout(function () {
                for (var i = 0; i < _this.children.length; i++) {
                    var child = _this.children[i];
                    child.setData({
                        isLast: i == _this.children.length - 1
                    });
                }
            }, 0);
        },
    }
});

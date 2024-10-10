"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var button_1 = require("../mixins/button");
(0, component_1.VantComponent)({
    mixins: [button_1.button],
    classes: ['custom-class', 'loading-class', 'error-class', 'image-class'],
    props: {
        src: {
            type: String,
            observer: function (src) {
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
        onLoad: function (event) {
            this.setData({
                loading: false,
            });
            this.$emit('load', event.detail);
        },
        onError: function (event) {
            this.setData({
                loading: false,
                error: true,
            });
            this.$emit('error', event.detail);
        },
        changeImageSrc: function (src) {
            var _a, _b;
            if (this.data.useGlobalPrefix) {
                var app = getApp();
                if ((_a = app.globalData) === null || _a === void 0 ? void 0 : _a.imagePrefix) {
                    this.setData({
                        imageSrc: ((_b = app.globalData) === null || _b === void 0 ? void 0 : _b.imagePrefix) + src
                    });
                }
                else {
                    this.setData({
                        imageSrc: src
                    });
                }
            }
            else {
                this.setData({
                    imageSrc: src
                });
            }
        },
        onClick: function (event) {
            this.$emit('click', event.detail);
        },
    },
});

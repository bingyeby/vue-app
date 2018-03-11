//es6加载模块
import Vue from 'vue'
import Vuex from 'Vuex';

import bsIndex from "./test_bs/index.vue"
import welcome from "./test_bs/welcome.vue"

new Vue({
    el: '#test_bs',
    data() {
        return {};
    },
    computed: {},
    methods: {},
    components: {bsIndex, welcome}
});


(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
import Vuex from "vuex";


const common = {
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
}
const moduleB = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}


export default new Vuex.Store({
    modules: {
        moduleA: common,
        moduleB
    }
})


export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    actions: {
        adicionarProduto({commit}, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1500)
        }
        // ADICIONANDO NA 'RAIZ'
        // adicionarProduto: {
        //     root: true,
        //     handle({commit}, payload) {
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload)
        //         }, 1000)
        //     }
        // }
    }
}

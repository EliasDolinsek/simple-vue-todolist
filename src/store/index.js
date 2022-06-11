import {createStore} from "vuex";

export const store = createStore({
    state(){
        return {
            lastId: 0,
            items: []
        }
    },
    getters: {
        itemsSortedByDate(state){
            return state.items.slice().sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        }
    },
    mutations: {
        addItem(state, item){
            item.id = ++state.lastId
            state.items.push(item)
        },
        toggleDone(state, itemId){
            const index = state.items.findIndex(value => value.id === itemId)
            state.items[index].done = !state.items[index].done
        },
        deleteItem(state, itemId){
            const index = state.items.findIndex(value => value.id === itemId)
            state.items.splice(index, 1)
        }
    }
})
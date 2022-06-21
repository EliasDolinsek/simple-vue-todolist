import {createStore} from "vuex";
import {addTodoItem, deleteTodoItem, getAllItems, updateTodoItem} from "@/dataSource/apiDataSource";

export const store = createStore({
    state() {
        return {
            items: []
        }
    },
    getters: {
        itemsSortedByDate(state) {
            return state.items.slice().sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        }
    },
    mutations: {
        async addItem(state, item) {
            const result = await addTodoItem(item)
            console.log(result.status)
            if (result.status === 201) {
                item.id = result.data.data.id
                state.items.push(item)
            }
        },
        async deleteItem(state, itemId) {
            const result = await deleteTodoItem(itemId)
            if (result.status === 200) {
                const index = state.items.findIndex(value => value.id === itemId)
                state.items.splice(index, 1)
            }
        },
        async updateItem(state, item) {
            const result = await updateTodoItem(item.id, {
                title: item.title,
                description: item.description,
                deadline: item.deadline,
                done: item.done ? 1 : 0
            })

            if (result.status === 200) {
                const index = state.items.findIndex(value => value.id === item.id)
                const attributes = result.data.data.attributes

                state.items[index] = {
                    id: item.id,
                    title: attributes.title,
                    description: attributes.description,
                    deadline: attributes.deadline,
                    done: attributes.done
                }
            }
        },
        async loadAllItems(state) {
            const result = await getAllItems()
            if (result.status === 200) {
                state.items = result.data.data.map(element => ({
                    id: element.id,
                    title: element.attributes.title,
                    description: element.attributes.description,
                    done: element.attributes.done === "1",
                    deadline: element.attributes.deadline
                }))
            }
        }
    }
})
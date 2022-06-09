<template>
    <div class="list-group">
        <TodoListItem v-for="item in items" :key="item.id" :item="item" @done-changed="() => onDoneChanged(item.id)" @delete-item="() => onDeleteItem(item.id)"/>
    </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
    name: "TodoItemsList",
    components: { TodoListItem },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        onDoneChanged(id) {
            this.$emit("done-changed", id)
        },
        onDeleteItem(id) {
            this.$emit("delete-item", id)
        }
    }
}
</script>
<template>
    <div class="list-group">
        <TodoListItem v-for="item in items" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
    name: "TodoItemsList",
    components: [TodoListItem],
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        descriptionOfItem(item) {
            return item.description || "No description"
        }
    }
}
</script>
<template>
    <a class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" :checked="item.done" @change="onDoneChanged" id="itemDone">
            <label :class="{ 'title': true, 'mb-1': true, 'h5': true, 'title-todo': !item.done, 'title-done': item.done }" @click="onDelete">{{item.title}}</label>
        </div>
        <p class="mb-1">{{ descriptionOfItem(item) }}</p>
        <small>{{ item.deadline }}</small>
    </a>
</template>

<script>
export default {
    name: "TodoListItem",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        descriptionOfItem(item) {
            return item.description || "No description"
        },
        onDoneChanged() {
            this.$emit("done-changed")
        },
        onDelete(){
            this.$emit("delete-item")
        }
    }
}
</script>

<style scoped>
.title:hover {
    cursor: pointer;
    text-decoration: line-through;
}
</style>
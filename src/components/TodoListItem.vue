<template>
    <a class="list-group-item list-group-item-action flex-column align-items-start">
        <h5 class="mb-1">{{ item.title }}</h5>
        <p class="mb-1">{{ descriptionOfItem(item) }}</p>
        <small>{{ item.deadline }}</small>
    </a><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
}
</script>
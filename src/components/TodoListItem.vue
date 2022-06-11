<template>
  <a class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" :checked="item.done" @change="onDoneChanged" id="itemDone">
        <label :class="{ 'title': true, 'mb-1': true, 'h5': true, 'title-todo': !item.done, 'title-done': item.done }"
               @click="onDelete">{{ item.title }}</label>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-outline-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
               viewBox="0 0 16 16">
            <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
        </button>
        <button type="button" class="btn btn-outline-danger">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
               viewBox="0 0 16 16">
            <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </div>
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
      this.$store.commit("toggleDone", this.item.id)
    },
    onDelete() {
      this.$store.commit("deleteItem", this.item.id)
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
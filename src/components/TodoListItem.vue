<template>
  <a class="list-group-item flex-column align-items-start">
    <div v-if="editMode">
      <form @submit.prevent="onUpdate">
        <div class="form-group">
          <label for="titleInput">Title</label>
          <input type="text" class="form-control" id="titleInput"
                 placeholder="Enter title" v-model="title" required>
        </div>
        <div class="form-group">
          <label for="descriptionInput">Description</label>
          <input type="text" class="form-control" id="descriptionInput"
                 placeholder="Enter description" v-model="description">
        </div>
        <div class="from-group">
          <label for="dateInput">Deadline</label>
          <input type="date" class="form-control" id="dateInput" placeholder="Date Input" v-model="deadline" required>
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary mr-2">Submit</button>
          <button class="btn btn-outlined-secondary" @click="editMode = false">Cancel</button>
        </div>
      </form>
    </div>
    <div v-else>
      <div class="d-flex w-100 justify-content-between">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" :checked="item.done" @change="onDoneChanged" id="itemDone">
          <label :class="{'title': true, 'mb-1': true, 'h5': true, 'item-done':item.done}">{{ item.title }}</label>
        </div>
        <TodoListItemActions @edit="editMode = true" @delete="onDelete"/>
      </div>
      <p class="mb-1">{{ descriptionOfItem(item) }}</p>
      <small>{{ item.deadline }}</small>
    </div>
  </a>
</template>

<script>
import TodoListItemActions from "@/components/TodoListItemActions";

export default {
  name: "TodoListItem",
  components: {TodoListItemActions},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      title: this.item.title,
      description: this.item.description,
      deadline: this.item.deadline
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
    },
    onUpdate() {
      const item = {id: this.item.id, title: this.title, description: this.description, deadline: this.deadline}
      this.$store.commit("updateItem", item)
      this.editMode = false
    }
  }
}
</script>

<style scoped>
.item-done {
  text-decoration: line-through;
}
</style>
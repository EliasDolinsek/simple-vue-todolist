<template>
  <div class="card">
    <div class="card-header">
      Add Todo Item
    </div>
    <div class="card-body">
      <div v-if="showInput">
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="titleInput">Title</label>
            <input type="text" class="form-control" id="titleInput" aria-describedby="emailHelp"
                   placeholder="Enter title" v-model="title" required>
            <small id="emailHelp" class="form-text text-muted">What do you want to get done?</small>
          </div>
          <div class="form-group">
            <label for="descriptionInput">Description</label>
            <input type="text" class="form-control" id="descriptionInput" aria-describedby="emailHelp"
                   placeholder="Enter description" v-model="description">
          </div>
          <div class="form-group">
            <label for="dateInput">Deadline</label>
            <input type="date" class="form-control" id="dateInput" placeholder="Date Input" v-model="deadline" required>
          </div>
          <button type="submit" class="btn btn-primary mr-2">Submit</button>
          <button type="submit" class="btn btn-outlined-secondary" @click="showInput = false">Cancel</button>
        </form>
      </div>
      <div v-else>
        <p class="card-text">Do you want to get something done?</p>
        <a href="#" class="btn btn-primary" @click="showInput = true">Add Item</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AddTodoItemCard",
  data() {
    return {
      id: 2,
      showInput: false,
      title: "",
      description: "",
      deadline: new Date().toISOString().split('T')[0]
    }
  },
  methods: {
    clearInputs() {
      this.title = ""
      this.description = ""
    },
    submit() {
      const item = {
        title: this.title,
        description: this.description,
        deadline: this.deadline,
        done: false
      }

      this.$store.commit("addItem", item)

      this.showInput = false
      this.clearInputs()
    }
  }
}
</script>
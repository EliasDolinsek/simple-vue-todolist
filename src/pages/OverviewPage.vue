<template>
  <div class="container">
    <div class="mt-3">
      <AddTodoItemCard @add-item="handleAddItem" />
      <div class="mt-3">
        <div v-if="items.length > 0">
          <TodoItemsList :items="itemsSortedByDate" @done-changed="(id) => onDoneChanged(id)"
            @delete-item="(id) => onDeleteItem(id)" />
        </div>
        <div v-else>
          <div class="alert alert-primary" role="alert">
            There are no todo items.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodoItemCard from "@/components/AddTodoItemCard";
import TodoItemsList from "@/components/TodoItemsList";

export default {
  name: "OverviewPage",
  components: { AddTodoItemCard, TodoItemsList },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Some title",
          description: "Some description",
          deadline: "2020-01-01",
          done: true
        }
      ]
    }
  },
  methods: {
    handleAddItem(item) {
      this.items.push(item)
    },
    onDoneChanged(id) {
      const index = this.items.findIndex(item => item.id === id)
      this.items[index].done = !this.items[index].done
      console.log(this.items)
    },
    onDeleteItem(id) {
      const index = this.items.findIndex(item => item.id === id)
      this.items.splice(index, 1)
    }
  },
  computed: {
    itemsSortedByDate() {
      return this.items.sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline)
      })
    }
  }
}
</script>

<style scoped>
</style>
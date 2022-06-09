<template>
  <div class="container">
    <div class="mt-3">
      <AddTodoItemCard @add-item="handleAddItem"/>
      <TodoItemsList :items="items" class="mt-3"/>
    </div>
  </div>
</template>

<script>
import AddTodoItemCard from "@/components/AddTodoItemCard";
import TodoItemsList from "@/components/TodoItemsList";

export default {
  name: "OverviewPage",
  components: {AddTodoItemCard, TodoItemsList},
  data() {
    return {
      items: []
    }
  },
  methods: {
    handleAddItem(item) {
      this.items.push(item)
    }
  }
}
</script>

<style scoped>

</style>
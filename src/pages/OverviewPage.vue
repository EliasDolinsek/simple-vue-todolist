<template>
  <div class="container">
    <div class="mt-3">
      <AddTodoItemCard/>
      <div class="mt-3">
        <div v-if="itemsSortedByDate.length > 0">
          <TodoItemsList />
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
import {mapGetters} from "vuex";

export default {
  name: "OverviewPage",
  components: {AddTodoItemCard, TodoItemsList},
  computed: mapGetters(["itemsSortedByDate"])
}
</script>

<style scoped>
</style>
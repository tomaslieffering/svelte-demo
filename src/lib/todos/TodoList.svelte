<script lang="ts">
   import AddTodo from "./AddTodo.svelte";
   import Todo from "./Todo.svelte";

   type Todo = {
      id: number;
      todo: string;
      completed: boolean
   }
   
   let todos: Array<Todo> = [];
   let id = 1;

   function addTodo(event: CustomEvent) {
      todos = [{id, completed: false, todo: event.detail}, ...todos];
      id += 1;
   }

   function completeTodo(event: CustomEvent) {
      let update = todos.find((todo) => todo.id === event.detail.id)
      if (update) update.completed = true;
      todos = todos;
   }

   function removeTodo(event: CustomEvent) {
      todos = todos.filter((todo) => event.detail.id !== todo.id);
   }

   $: percentageComplete = (todos.filter((todo) => todo.completed).length / todos.length) * 100
</script>

<div class="border-b-2 pt-8">
   <h2 class="text-2xl font-bold pb-4">Todo List</h2>
   <AddTodo on:add={addTodo}/>

   <div class="grid grid-cols-2 gap-4 pb-8 border-b border-dashed ">      
      <div class="flex flex-col gap-2 rounded p-4 border border-dashed">
         <span class="text-lg font-bold">Todo:</span>
         {#each todos.filter((todo) => !todo.completed) as todo}
            <Todo {todo} on:complete={completeTodo}/>
         {/each}
      </div>
      <div class="flex flex-col gap-2 rounded p-4 border border-dashed">
         <span class="text-lg font-bold">Done:</span>
         {#each todos.filter((todo) => todo.completed) as todo}
            <Todo {todo} on:remove={removeTodo}/>
         {/each}
      </div>
   </div>
   <div class="flex justify-center font-bold pt-8 pb-8">
      {#if todos.length}
         <span>You have completed {percentageComplete.toFixed(0)}% of your todo list.
            {#if percentageComplete === 100}
               Congratulations!
            {/if}
         </span>
      {:else}
         <span>Add something to your todo list to get started!</span>
      {/if}
   </div>
</div>
<script>
   import { createEventDispatcher } from 'svelte';

   const dispatch = createEventDispatcher();
   let todo = "";

   const handleSubmit = () => {
      if (todo) {
         dispatch('add', todo);
         todo = "";
      }
   }
</script>

<div class="pb-4 w-full">
   <form>
      <label for="todo" class=" text-gray-700 text-sm font-bold mb-2">New Todo:</label>
      <div class="flex w-full justify-between">
         <input id="todo" bind:value={todo} placeholder="Add a todo..." class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight flex-grow h-12" type="text">
         <button on:click|preventDefault={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">Add todo</button>
      </div>
   </form>
</div>
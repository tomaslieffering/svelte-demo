<script lang="ts">
   import { LoaderCircle } from "lucide-svelte";

   export let message = "Loading..."
</script>

<div class="flex justify-center">
   <div class="flex items-center bg-indigo-500 text-white font-bold py-2 px-8 h-16 rounded">
      <LoaderCircle class="animate-spin"/>
      <span class="pl-2">
         {message}
      </span>
   </div>
</div>
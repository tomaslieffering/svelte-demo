<script>
   let open = false;
   export let post;
</script>

<div class="flex flex-col rounded shadow-lg">
   <div class="px-6 py-4 grow">
     <div class="font-bold text-xl mb-2">{post.title}</div>
     <p class="text-gray-700 text-base">
         {post.body}
     </p>
   </div>
   <div class="px-6 pt-4 pb-2">
      {#each post.tags as tag}
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
      {/each}
   </div>
 </div>
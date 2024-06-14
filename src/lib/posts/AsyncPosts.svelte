<script lang="ts">
   import { fade } from 'svelte/transition';
   import Post from "./Post.svelte";
   import Loader from "./Loader.svelte";
   import Error from "./Error.svelte";

   let promise = requestData();

   async function requestData() {
      const skip = Math.floor((Math.random() * 20))
      const response = await fetch(`https://dummyjson.com/posts?limit=10&delay=2000&skip=${skip}`)
      const posts = await response.json();

      if (response.ok) return posts;
      else throw new Error(posts);
   }

   const requestNew = () => {
      promise  = requestData();
   }
</script>

<div class="py-8 border-b-2">
   <div class="flex pb-4">
      <h2 class="grow text-2xl font-bold">Posts</h2>
      <button on:click={requestNew} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">
         Request new posts
      </button>
   </div>
   {#await promise}
      <Loader message={"Waiting for posts..."}/>
   {:then posts}
      <div in:fade class="grid grid-cols-2 gap-4">
         {#each posts.posts as post}
            <Post {post}/>
         {/each}
      </div>
   {:catch error}
      <Error />
   {/await}
</div>

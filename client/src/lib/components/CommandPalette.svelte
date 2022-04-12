<script>
  import IoIosSearch from "svelte-icons/io/IoIosSearch.svelte";
  let visible = false;
  let searchQuery;
  function togglePallette() {
    visible = !visible;
  }
  function handleKeydown(event) {
    let key = event.key;
    if (key === "Escape") {
      visible = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="icon p-1" on:click={togglePallette}>
  <IoIosSearch />
</div>

{#if visible}
  <!-- Modal -->
  <div class="cmd-bg fixed z-20 left-0 top-0 w-full h-full grid justify-items-center ">
    <div class="w-5/6 md:w-1/2 pt-20">
      <div class="bg-secondary dark:bg-coal my-5 p-5 rounded-md">
        <input
          type="text"
          class="bg-transparent text-xl text-midGrey dark:text-white 
      focus:outline-none w-full py-1"
          placeholder="Search..."
          bind:value={searchQuery}
        />
      </div>
      {#if searchQuery}
        <div class="bg-secondary dark:bg-coal my-10 py-5 rounded-md h-96">
          <h1 class="text-xl text-midGrey text-center">Results</h1>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .cmd-bg {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  }
  .icon {
    width: 32px;
    height: 32px;
  }
</style>

<script>
  import IoIosSearch from "svelte-icons/io/IoIosSearch.svelte";
  import Button from "$lib/components/Button.svelte";
  let visible = false;
  let searchQuery;
  const options = [
    { title: "Home", link: "/app", keywords: "home app dashboard" },
    { title: "Run Test", link: "/app/run-test", keywords: "run quick start" },
    { title: "Create a Test", link: "/app/tests", keywords: "create new make test tests" },
    { title: "Account", link: "/app/account", keywords: "account profile avatar user" },
    { title: "Settings", link: "/app/settings", keywords: "settings" },
  ];
  let filteredOptions = [];
  function togglePallette() {
    visible = !visible;
  }
  function handleKeydown(event) {
    let key = event.key;
    if (key === "Escape") {
      visible = false;
    }
  }

  function filterOptions() {
    filteredOptions = [];
    for (let i = 0; i < options.length; i++) {
      const element = options[i];
      if (element.keywords.includes(searchQuery.toString())) {
        filteredOptions.push(element);
      }
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
          on:input={filterOptions}
        />
      </div>
      {#if searchQuery}
        <div class="bg-secondary dark:bg-coal my-10 py-5 rounded-md min-h-min">
          <h1 class="text-xl text-midGrey text-center">Results</h1>
          {#each filteredOptions as option}
            <div class="flex justify-between mx-10 my-5">
              <h5 class="pt-2 text-bold">{option.title}</h5>
              <Button link={option.link}>Go</Button>
            </div>
          {/each}
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

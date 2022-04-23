<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { get, put } from "$lib/api.svelte";
  import Loading from "$lib/Loading.svelte";
  import Button from "$lib/components/Button.svelte";
  import { theme } from "$lib/stores/theme";
  let loading;
  let showSearch;
  let darkMode = $theme;
  async function handleSubmit() {
    localStorage.setItem("showSearch", showSearch);
    theme.set(darkMode);
    goto("/app");
  }

  function onChange(event) {
    darkMode = event.currentTarget.value;
  }

  onMount(async () => {
    showSearch = JSON.parse(localStorage.getItem("showSearch")) || false;
  });
</script>

<div>
  {#if loading}
    <Loading />
  {:else}
    <div class="flex w-full my-5 justify-center">
      <div class="bg-white dark:bg-coal px-10 py-5 w-full md:w-9/12">
        <h2 class="text-center text-2xl py-5">Settings</h2>
        <form class="py-5" on:submit|preventDefault={handleSubmit}>
          <div class="flex justify-between py-3">
            <div class="text-coal dark:text-white text-lg">Show Search / Command Palette</div>
            <div
              class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
            >
              <input
                type="checkbox"
                bind:checked={showSearch}
                name="search"
                id="search"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white checked:bg-primary checked:right-0
                border-4 border-lightGrey appearance-none cursor-pointer"
              />
              <label
                for="search"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-midGrey cursor-pointer"
              />
            </div>
          </div>
          <div class="flex justify-between py-3">
            <div class="text-coal dark:text-white text-lg">Saved Dark Mode</div>
            <div class="flex justify-center">
              <div class="form-check form-check-inline px-3">
                <input
                  class="appearance-none rounded-full h-4 w-4 border border-midGrey bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  checked={darkMode === "light"}
                  group={darkMode}
                  on:change={onChange}
                  type="radio"
                  name="lightOption"
                  value="light"
                />
                <label class="form-check-label inline-block" for="lightOption">Light</label>
              </div>
              <div class="form-check form-check-inline px-3">
                <input
                  class="appearance-none rounded-full h-4 w-4 border border-midGrey bg-white checked:bg-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  checked={darkMode === "dark"}
                  group={darkMode}
                  on:change={onChange}
                  type="radio"
                  name="darkOption"
                  value="dark"
                />
                <label class="form-check-label inline-block" for="darkOption">Dark</label>
              </div>
            </div>
          </div>

          <div class="py-5">
            <Button class="bg-primary text-white" on:click={handleSubmit}>Update</Button>
          </div>
        </form>
      </div>
    </div>
  {/if}
</div>

<style>
  /* CHECKBOX TOGGLE SWITCH */
  /* @apply rules for documentation, these do not work as inline style */
  .toggle-checkbox:checked + .toggle-label {
    @apply bg-primary;
  }
</style>

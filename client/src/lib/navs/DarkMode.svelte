<script>
  import IoIosSunny from "svelte-icons/io/IoIosSunny.svelte";
  import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";
  import { theme } from "$lib/stores/theme";
  import { browser } from "$app/env";
  $: {
    if ($theme === "dark") {
      browser && document.documentElement.classList.add("dark");
    } else {
      browser && document.documentElement.classList.remove("dark");
    }
  }

  function toggleDarkMode() {
    //Set theme to be opposite
    theme.set($theme == "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  }
</script>

<div class="icon p-1" on:click={() => toggleDarkMode()}>
  {#if $theme === "dark"}
    <IoIosMoon />
  {:else}
    <IoIosSunny />
  {/if}
</div>

<style>
  .icon {
    width: 32px;
    height: 32px;
  }
</style>

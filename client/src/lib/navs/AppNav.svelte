<script>
  import Logo from "../Logo.svelte";
  import IoIosSunny from "svelte-icons/io/IoIosSunny.svelte";
  import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";
  import IoIosMenu from "svelte-icons/io/IoIosMenu.svelte";
  import IoIosSearch from "svelte-icons/io/IoIosSearch.svelte";
  export let toggle;
  export let dark = false;

  function toggleDarkMode() {
    dark = !dark;
    document.documentElement.classList.toggle("dark");
  }
</script>

<nav class="flex flex-row justify-between lg:px-10 px-5 py-3 bg-primary dark:bg-coal text-white">
  <div>
    <div class="lg:flex hidden"><a href="/app"><Logo /></a></div>
    <div class="lg:hidden icon p-1" on:click={toggle}>
      <IoIosMenu />
    </div>
  </div>
  <div class="lg:hidden grow flex justify-center">
    <a href="/app"><Logo /></a>
  </div>
  <div>
    <ul class="flex">
      <li class="mx-2">
        <div class="icon p-1">
          <IoIosSearch />
        </div>
      </li>
      <li class="mx-2">
        <div class="icon p-1" on:click={() => toggleDarkMode()}>
          {#if dark}
            <IoIosMoon />
          {:else}
            <IoIosSunny />
          {/if}
        </div>
      </li>
      <li class="mx-2">
        <img
          class="inline object-cover w-8 h-8 mr-2 rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile"
        />
      </li>
    </ul>
  </div>
</nav>

<style>
  .icon {
    width: 32px;
    height: 32px;
  }
</style>

<script>
  import Logo from "../Logo.svelte";
  import IoIosMenu from "svelte-icons/io/IoIosMenu.svelte";
  import CommandPallette from "$lib/components/CommandPalette.svelte";
  import AvatarDropdown from "./AvatarDropdown.svelte";
  import DarkMode from "./DarkMode.svelte";
  export let toggle;
  let showSearch = JSON.parse(localStorage.getItem("showSearch"));
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
      {#if showSearch}
        <li class="mx-2">
          <CommandPallette />
        </li>
      {/if}
      <li class="mx-2">
        <DarkMode />
      </li>
      <li class="mx-2">
        <AvatarDropdown />
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

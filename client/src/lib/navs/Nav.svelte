<script>
  import Logo from "../Logo.svelte";
  import IoIosMenu from "svelte-icons/io/IoIosMenu.svelte";
  import DarkMode from "./DarkMode.svelte";

  export let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  const links = [
    { name: "Home", link: "/" },
    { name: "Quick Test", link: "/quicktest" },
    { name: "About", link: "/about" },
    { name: "FAQ", link: "/faq" },
    { name: "Login", link: "/login" },
  ];
</script>

<div>
  <nav class="flex justify-around lg:px-10 px-5 py-3 bg-primary dark:bg-coal text-white">
    <div class="basis-2/12">
      <a href="/"><Logo /></a>
    </div>
    <div class="basis-10/12 flex justify-end">
      <ul class="flex">
        {#each links as link}
          <li class="flex-inline md:flex hidden px-5 mt-1 text-lg">
            <a href={link.link}>{link.name}</a>
          </li>
        {/each}
        <li class="mx-2">
          <DarkMode />
        </li>
        <li class="mx-2 md:hidden sm:flex">
          <div class="icon p-1" on:click={() => toggleMenu()}>
            <IoIosMenu />
          </div>
        </li>
      </ul>
    </div>
  </nav>
  {#if menuOpen === true}
    <div class="bg-primary dark:bg-coal text-white md:hidden">
      <ul class="text-center py-3">
        {#each links as link}
          <li class="text-lg my-2">
            <a href={link.link}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .icon {
    width: 32px;
    height: 32px;
  }
</style>

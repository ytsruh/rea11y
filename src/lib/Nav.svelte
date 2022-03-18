<script>
  import Logo from "./Logo.svelte";
  import IoIosSunny from "svelte-icons/io/IoIosSunny.svelte";
  import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";
  import IoIosMenu from "svelte-icons/io/IoIosMenu.svelte";
  export let dark = false;
  export let menuOpen = false;

  function toggleDarkMode() {
    dark = !dark;
    //console.log("Dark mode: " + dark);
    document.documentElement.classList.toggle("dark");
  }
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  const links = [
    { name: "Home", link: "/" },
    { name: "Quick Test", link: "/quicktest" },
    { name: "About", link: "/about" },
    { name: "FAQ", link: "/faq" },
  ];
</script>

<div>
  <nav class="flex justify-around lg:px-10 px-5 py-3 bg-primary dark:bg-darkGrey text-white">
    <div class="basis-2/12">
      <a href="/"><Logo /></a>
    </div>
    <div class="grow flex justify-center">
      {#each links as link}
        <li class="flex-inline md:flex hidden px-5 mt-1 text-xl">
          <a href={link.link}>{link.name}</a>
        </li>
      {/each}
    </div>
    <div class="basis-2/12 flex justify-end">
      <ul class="flex">
        <li class="mx-2">
          <div class="icon p-1" on:click={() => toggleDarkMode()}>
            {#if dark}
              <IoIosMoon />
            {:else}
              <IoIosSunny />
            {/if}
          </div>
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
    <div class="bg-primary dark:bg-neutral-800 text-white md:hidden">
      <ul class="text-center py-3">
        {#each links as link}
          <li class="text-xl my-2">
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

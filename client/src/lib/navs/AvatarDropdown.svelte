<script>
  import { clickOutside } from "$lib/clickOutside.js";
  let show = false;
  function toggle() {
    show = !show;
  }
  function close() {
    show = false;
  }
  const links = [
    { name: "Account", link: "/app/account" },
    { name: "Settings", link: "/app/settings" },
    { name: "Logout", link: "/app/logout" },
  ];
  const baseURL = import.meta.env.VITE_AZURE_STORAGE_URL;
  let profilePicture = JSON.parse(sessionStorage.getItem("user")).userData.profilePicture;
</script>

<div class="flex justify-center">
  <div on:click={toggle} use:clickOutside on:click_outside={close}>
    <img class="inline object-cover w-8 h-8 mr-2 rounded-full" src={baseURL + profilePicture} alt="Profile" />
  </div>

  {#if show}
    <ul
      class="min-w-max w-32 absolute top-12 right-10 md:right-14 bg-white dark:bg-coal 
          text-coal dark:text-white z-50 rounded-md text-center"
    >
      {#each links as link}
        <li>
          <a class="text-md py-2 px-4 block w-full hover:bg-primary hover:text-white" href={link.link}
            >{link.name}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

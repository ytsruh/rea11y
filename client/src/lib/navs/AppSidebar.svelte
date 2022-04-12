<script>
  import IoIosHome from "svelte-icons/io/IoIosHome.svelte";
  import IoIosApps from "svelte-icons/io/IoIosApps.svelte";
  import IoIosConstruct from "svelte-icons/io/IoIosConstruct.svelte";
  import IoIosFolderOpen from "svelte-icons/io/IoIosFolderOpen.svelte";
  import IoIosPerson from "svelte-icons/io/IoIosPerson.svelte";
  import IoIosSettings from "svelte-icons/io/IoIosSettings.svelte";
  import IoIosLogOut from "svelte-icons/io/IoIosLogOut.svelte";
  const links = [
    { name: "Home", link: "/app", icon: IoIosHome },
    { name: "Run Test", link: "/app/run-test", icon: IoIosConstruct },
    { name: "Projects", link: "/app/projects", icon: IoIosFolderOpen },
    { name: "Tests", link: "/app/tests", icon: IoIosApps },
    { name: "Account", link: "/app/account", icon: IoIosPerson },
    { name: "Settings", link: "/app/settings", icon: IoIosSettings },
    { name: "Logout", link: "/app/logout", icon: IoIosLogOut },
  ];
</script>

<div
  id="sidebar"
  class="w-64 min-h-full py-3 bg-white dark:bg-coal text-darkGrey dark:text-white hidden absolute lg:flex lg:shrink-0 lg:static"
>
  <div class="w-full mx-0 lg:mx-3">
    <ul>
      {#each links as link}
        <li class="w-full">
          <a
            href={link.link}
            class="inline-flex my-1 p-3 hover:bg-primary hover:text-white w-full rounded-md"
          >
            <div class="icon px-1 inline-flex">
              <svelte:component this={link.icon} />
            </div>
            <h5 class="inline-flex px-4 mt-2">{link.name}</h5>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .icon {
    width: 40px;
    height: 40px;
  }
</style>

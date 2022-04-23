<script>
  import { user } from "$lib/stores/auth";
  import { onMount, afterUpdate } from "svelte";
  import { goto } from "$app/navigation";
  import Alert from "$lib/components/Alert.svelte";
  import AppNav from "$lib/navs/AppNav.svelte";
  import AppSidebar from "$lib/navs/AppSidebar.svelte";

  function toggleSidebar() {
    document.querySelector("#sidebar").classList.toggle("hidden");
  }

  function checkAuth() {
    //Check user is still held in session storage
    $user = JSON.parse(sessionStorage.getItem("user"));
    const now = Math.floor(Date.now() / 1000);
    //Redirect if not valid or if token has expired
    if (!$user || now > $user.expiry) {
      goto("/login");
    }
  }

  onMount(checkAuth);
  afterUpdate(checkAuth);
</script>

<svelte:head>
  <title>Accessibility Testing | Re-a11y</title>
</svelte:head>

{#if $user}
  <div>
    <AppNav toggle={toggleSidebar} />
    <div class="flex flex-row min-h-screen">
      <AppSidebar />
      <div class="grow bg-slate-100 text-coal dark:bg-darkGrey dark:text-white">
        <div class="m-1"><Alert /></div>
        <div class="p-5">
          <slot />
        </div>
      </div>
    </div>
  </div>
{/if}

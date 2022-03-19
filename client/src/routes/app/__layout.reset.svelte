<script>
  import { user } from "$lib/stores/auth";
  import { onMount, afterUpdate } from "svelte";
  import { goto } from "$app/navigation";

  function checkAuth() {
    //Check user is still held in session stroage
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

{#if $user}
  <slot />
{/if}

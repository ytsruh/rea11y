<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { user } from "$lib/stores/auth";

  onMount(async () => {
    sessionStorage.clear();
    await user.set(null);
    goto("/login");
  });
</script>

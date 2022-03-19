<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    sessionStorage.clear();
    goto("/login");
  });
</script>

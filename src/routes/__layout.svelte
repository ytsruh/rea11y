<script>
  import "../index.css";
  import Nav from "$lib/Nav.svelte";
</script>

<div>
  <Nav />
  <div class="bg-slate-50 text-coal dark:bg-neutral-900 dark:text-white min-h-screen">
    <slot />
  </div>
</div>

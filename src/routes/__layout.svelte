<script>
  import "../index.css";
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div>
  <Nav />
  <div class="bg-white text-coal dark:bg-neutral-900 dark:text-white min-h-screen">
    <slot />
  </div>
  <Footer />
</div>

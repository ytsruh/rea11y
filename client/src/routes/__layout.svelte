<script>
  import "../index.css";
  import Nav from "$lib/navs/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-K79F7XS");
  </script>
  <!-- End Google Tag Manager -->
</svelte:head>

<div>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe
      title="Google Tag Manager"
      src="https://www.googletagmanager.com/ns.html?id=GTM-K79F7XS"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    />
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <Nav />
  <div class="bg-white text-coal dark:bg-neutral-900 dark:text-white min-h-screen">
    <slot />
  </div>
  <Footer />
</div>

<script>
  export let link = null;
  let clazz;
  export { clazz as class };
</script>

<a href={link} on:click class={`py-3 px-5 m-5 text-center ${clazz || "bg-primary text-white"}`}>
  <slot />
</a>

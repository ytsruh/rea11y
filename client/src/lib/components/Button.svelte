<script>
  export let link = null;
  let clazz = null;
  export { clazz as class };
</script>

<a
  href={link}
  on:click
  class={`py-3 px-5 text-center rounded-md cursor-pointer
${clazz || "bg-primary text-white"}
`}
>
  <slot />
</a>

<script>
  export let data;
  export let index;
  import { functions } from "$lib/helpers";
</script>

<div class="p-2 flex flex-col break-all">
  <hr class="border-1 w-3/4 place-self-center pb-2" />
  <h3><span class="text-lg">Item : </span>{index}</h3>
  <h3><span class="text-lg">HTML Location : </span>{data.context}</h3>
  <h3><span class="text-lg">WCAG Code : </span>{functions.wcagCodeFormatter(data.code)}</h3>
  <p><span class="text-lg">Description : </span>{data.message}</p>
</div>

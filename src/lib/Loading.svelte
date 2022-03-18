<script>
  import { DoubleBounce } from "svelte-loading-spinners";
  let color = "#00c389";
</script>

<div class="flex justify-center py-10">
  <div class="mx-3">
    <DoubleBounce size="60" {color} unit="px" duration="2s" />
  </div>
  <div class="mx-3">
    <DoubleBounce size="60" {color} unit="px" duration="2s" />
  </div>
  <div class="mx-3">
    <DoubleBounce size="60" {color} unit="px" duration="2s" />
  </div>
</div>

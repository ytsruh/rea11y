<script>
  import Button from "$lib/components/Button.svelte";
  let testUrl = "";
  async function runTest() {
    console.log(testUrl);
  }
</script>

<div
  class="relative overflow-hidden bg-no-repeat bg-cover h-64"
  style="
    background-position: 50%;
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
  "
>
  <div
    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
    style="background-color: rgba(0, 0, 0, 0.75)"
  >
    <div class="flex justify-center items-center h-full">
      <div class="text-center text-white w-4/5">
        <input
          type="text"
          class="bg-transparent text-3xl text-center focus:outline-none w-full"
          placeholder="Enter test url..."
          bind:value={testUrl}
        />
        <div class="my-10">
          <Button on:click={runTest}>Run Test</Button>
        </div>
      </div>
    </div>
  </div>
</div>

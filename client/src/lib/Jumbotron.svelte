<script>
  export let img = "https://via.placeholder.com/1200x400.png?text=Placeholder+Image";
</script>

<div
  class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
  style={`
    background-image: url(${img});
    height: 400px;
  `}
>
  <div
    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
    style="background-color: rgba(0, 0, 0, 0.6)"
  >
    <div class="flex justify-center items-center h-full">
      <div>
        <slot />
      </div>
    </div>
  </div>
</div>

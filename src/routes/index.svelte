<script>
  import IoIosMan from "svelte-icons/io/IoIosMan.svelte";
  import IoMdClipboard from "svelte-icons/io/IoMdClipboard.svelte";
  import IoIosPhonePortrait from "svelte-icons/io/IoIosPhonePortrait.svelte";
</script>

<svelte:head>
  <title>Accessability testing made quick & easy | Re-a11y</title>
  <meta
    name="description"
    content="Our goal is to be the primary source of accessibility information & to make accessibility testing as quick & simple as possible. Our testing tools let you focus on building great experiences."
  />
</svelte:head>

<section class="flex justify-center bg-primary dark:bg-neutral-900 text-white">
  <div class="basis-9/12 lg:basis-6/12 my-10">
    <h1 class="text-5xl my-5">Welcome to Re-a11y</h1>
    <p class="text-xl my-3">
      This is about making things accessible to all people, whether they have a disability or not.
    </p>
    <div class="my-10">
      <div class="flex justify-center">
        <a href="/quicktest" class="bg-coal dark:bg-primary text-white rounded-md px-10 py-3">
          Run Quick Test
        </a>
      </div>
    </div>
  </div>
</section>

<section class="flex flex-wrap justify-evenly p-10 md:py-10">
  <div class="basis-1/3 flex flex-col justify-center px-5 my-5 md:my-0">
    <div class="icon mx-auto dark:text-primary">
      <IoIosMan />
    </div>
    <h3 class="text-3xl my-5 text-center">Latest Information</h3>
    <p class="text-center">
      We aim to provide the latest information on accessibility, related technology and the web standards
      around the world.
    </p>
  </div>
  <div class="basis-1/3 flex flex-col justify-center px-5 my-5 md:my-0">
    <div class="icon mx-auto dark:text-primary">
      <IoMdClipboard />
    </div>
    <h3 class="text-3xl my-5 text-center ">Detailed Reports</h3>
    <p class="text-center">
      Our testing software provide reports on your test page providing all associated errors to allow you to
      prioritise fixes on your page.
    </p>
  </div>
  <div class="basis-1/3 flex flex-col justify-center px-5 my-5 md:my-0">
    <div class="icon mx-auto dark:text-primary">
      <IoIosPhonePortrait />
    </div>
    <h3 class="text-3xl my-5 text-center">Mobile Focussed</h3>
    <p class="text-center">
      More & more of the web is consumed via mobile. So our testing software is designed for both desktop &
      mobile devices.
    </p>
  </div>
</section>

<section class="mx-auto p-10 bg-lightGrey text-coal dark:text-white dark:bg-darkGrey">
  <h2 class="text-4xl font-bold text-center dark:text-primary my-8 uppercase">Accessibility</h2>
  <div class="flex items-center flex-wrap mb-20">
    <div class="w-full md:w-1/2 md:px-10">
      <h4 class="text-2xl dark:text-primary font-bold mb-3 uppercase">Keep in Mind</h4>
      <p class="mb-8">
        Designers & developers must keep accessibility in mind when creating their sites & products.
        Accessibility is the practice of making your websites usable by as many people as possible. We
        traditionally think of this as being about people with disabilities, but the practice of making sites
        accessible also benefits other groups such as those using mobile devices, or those with slow network
        connections.
      </p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="img/keepinmind.jpg" alt="Syncing" class="object-cover h-96 w-full px-5" />
    </div>
  </div>
  <div class="flex items-center flex-wrap mb-20">
    <div class="w-full md:w-1/2 md:order-1 order-2">
      <img src="img/blurred.jpg" alt="Syncing" class="object-cover h-96 w-full px-5" />
    </div>
    <div class="w-full md:w-1/2 md:px-10 md:order-2 order-1">
      <h4 class="text-2xl dark:text-primary font-bold mb-3 uppercase">Access through technology</h4>
      <p class="mb-8">
        Accessibility can be viewed as the "ability to access" and benefit from some system or entity. The
        concept focuses on enabling access for people with disabilities, or enabling access through the use of
        assistive technology; however, research and development in accessibility brings benefits to everyone.
      </p>
    </div>
  </div>
  <div class="flex items-center flex-wrap mb-20">
    <div class="w-full md:w-1/2 md:px-10">
      <h4 class="text-2xl dark:text-primary font-bold mb-3 uppercase">Metrics</h4>
      <p class="mb-8">
        15% of the world’s population has some sort of disability. Brands with inaccessible websites are
        failing to accommodate a growing portion of the population. The number of people living with
        disabilities is expected to grow considerably over the coming decades which will only give rise to
        more guidelines, legislation, and enforcement.
      </p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="img/workfromhome.jpg" alt="Syncing" class="object-cover h-96 w-full px-5" />
    </div>
  </div>
</section>

<style>
  .icon {
    width: 128px;
    height: 128px;
  }
</style>

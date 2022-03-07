<script>
  import Jumbotron from "$lib/Jumbotron.svelte";
</script>

<svelte:head>
  <title>About Us | Re-a11y</title>
  <meta
    name="description"
    content="Accessibility is complicated. This is our attempt to make it easier. We try to answer some of the most common question about accessibility and how to design great & inclusive digital experiences."
  />
</svelte:head>

<Jumbotron img="img/about-header.jpg">
  <h2 class="text-4xl text-white dark:text-primary my-4">About</h2>
  <h4 class="text-xl text-white my-6">
    This project is dedicated to helping other website become more accessible.
  </h4>
</Jumbotron>

<section class="flex flex-wrap justify-center py-5 text-center dark:bg-darkGrey">
  <div class="justify-center mx-10">
    <h1 class="text-primary text-9xl py-5">RE</h1>
    <h2 class="text-4xl">Reactive</h2>
  </div>
  <div class="justify-center mx-10">
    <h1 class="text-primary text-9xl py-5">A11Y</h1>
    <h2 class="text-4xl">Accessibility</h2>
  </div>
</section>

<section class="flex justify-center p-5 md:p-10 text-xl dark:bg-darkGrey">
  <div class="w-5/6 md:w-4/6">
    <div class="py-3 leading-8">
      <p class="leading-10 text-primary">
        We go by many names. We also dont really care what you call us. Some options include:
      </p>
      <p>1) Really 2) Re Ally or 3) Re A 1 1 Y</p>
      <p>
        What we do care about is what we're here for. Providing help to website builders who want to improve
        accessibility and make their creation as inclusive as possible.
      </p>
    </div>
    <div class="py-3 leading-8">
      <p class="leading-10 text-primary">Our name is made up of two words: Reactive & Accessibility. Huh!?</p>
      <p>
        <span class="uppercase font-bold">Reactive:</span> Becuase the modern web is made up of
        <span class="text-bold underline">Re</span>active web applications and we love them. Gone are the days
        of slow and clunky websites that frustrate users.
      </p>
      <p>
        <span class="uppercase font-bold">Accessibility:</span> Accessibility is often shortened to
        <span class="text-bold underline">A11Y</span>, where we derive our name from. What we're here to help
        with. It's a vast, complex & misunderstood topic. We're here to help however we can.
      </p>
    </div>
  </div>
</section>

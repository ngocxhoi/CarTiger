<template>
  <section id="info-section">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 my-8"
    >
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div
          class="grid place-content-center rounded bg-[#eef0fc] dark:bg-[#3d3f49] p-6 sm:p-8"
        >
          <div class="mx-auto max-w-md text-center lg:text-left">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Best Seller
              </h2>

              <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                rerum quam amet provident nulla error!
              </p>
            </header>

            <a
              href="#"
              class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
            >
              See Details
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-8">
          <ul class="grid grid-cols-2 gap-4">
            <li>
              <a href="#" class="group block">
                <img
                  src="https://th.bing.com/th/id/OIP.XQ6CyncXgEdljRssh_LAIwHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                  class="aspect-square w-full rounded object-cover"
                />

                <div class="mt-3">
                  <h3
                    class="font-medium text-2xl text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    Simple Watch
                  </h3>

                  <p class="mt-1 text-lg font-semibold text-gray-700">$150</p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block">
                <img
                  src="https://th.bing.com/th/id/OIP.0H6a4tOc6DItsEWJIU3sEQHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7"
                  alt=""
                  class="aspect-square w-full rounded object-cover"
                />

                <div class="mt-3">
                  <h3
                    class="font-medium text-2xl text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    Simple Watch
                  </h3>

                  <p class="mt-1 text-lg font-semibold text-gray-700">$150</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>

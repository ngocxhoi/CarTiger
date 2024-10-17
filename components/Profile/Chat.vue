<template>
  <!-- component -->
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <div
      class="w-1/4 min-w-[100px] bg-white border-r border-gray-300 overflow-hidden transition-all"
      :class="{ 'w-[10%]': hiddenBar }"
    >
      <!-- Sidebar Header -->
      <header
        class="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 rounded-s-lg text-white"
      >
        <h1
          @click="hiddenBar = !hiddenBar"
          class="text-2xl font-semibold cursor-pointer"
        >
          {{ title }}
        </h1>
        <div class="relative">
          <button
            v-if="!hiddenBar"
            id="menuButton"
            class="focus:outline-none"
            @click.stop="hiddenDropdown = !hiddenDropdown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z"
              />
            </svg>
          </button>
          <!-- Menu Dropdown -->
          <div
            id="menuDropdown"
            class="absolute z-[100] right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
            :class="{ hidden: hiddenDropdown }"
          >
            <ul class="py-2 px-3">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                  >Option 1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                  >Option 2</a
                >
              </li>
              <!-- Add more menu options here -->
            </ul>
          </div>
        </div>
      </header>

      <!-- Contact List -->
      <div class="overflow-y-auto h-screen mb-9 pb-20">
        <div
          v-for="el in 10"
          :key="el"
          class="my-2 hover:bg-gray-200 rounded-lg transition-colors p-2 cursor-pointer border-l-4 border-red-500/0"
          :class="{ 'border-red-500/100': currentChat == el }"
          @click="currentChat = el"
        >
          <div class="flex gap-3 items-center">
            <UAvatar
              :src="`https://i.pravatar.cc/150?img=${el + 10}`"
              size="xl"
              class="transition-all"
              :class="{ 'mx-4 mr-12': hiddenBar }"
            />
            <div class="flex flex-col w-[calc(100%-3.5rem)]">
              <h3 class="text-lg font-semibold">Alice</h3>
              <p class="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, debitis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1">
      <!-- Chat Header -->
      <header class="bg-white p-4 text-gray-700">
        <h1 class="text-2xl font-semibold">Alice</h1>
      </header>

      <!-- Chat Messages -->
      <div class="h-screen overflow-y-auto p-4 pb-36">
        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p class="text-gray-700">Hey Bob, how's it going?</p>
          </div>
        </div>

        <!-- Outgoing Message -->
        <div class="flex justify-end mb-4 cursor-pointer">
          <div
            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
          >
            <p>
              Hi Alice! I'm good, just finished a great book. How about you?
            </p>
          </div>
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
          >
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p class="text-gray-700">
              That book sounds interesting! What's it about?
            </p>
          </div>
        </div>

        <!-- Outgoing Message -->
        <div class="flex justify-end mb-4 cursor-pointer">
          <div
            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
          >
            <p>
              It's about an astronaut stranded on Mars, trying to survive.
              Gripping stuff!
            </p>
          </div>
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
          >
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p class="text-gray-700">
              I'm intrigued! Maybe I'll borrow it from you when you're done?
            </p>
          </div>
        </div>

        <!-- Outgoing Message -->
        <div class="flex justify-end mb-4 cursor-pointer">
          <div
            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
          >
            <p>Of course! I'll drop it off at your place tomorrow.</p>
          </div>
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
          >
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p class="text-gray-700">Thanks, you're the best!</p>
          </div>
        </div>

        <!-- Outgoing Message -->
        <div class="flex justify-end mb-4 cursor-pointer">
          <div
            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
          >
            <p>Anytime! Let me know how you like it. 😊</p>
          </div>
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
          >
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p class="text-gray-700">So, pizza next week, right?</p>
          </div>
        </div>

        <!-- Outgoing Message -->
        <div class="flex justify-end mb-4 cursor-pointer">
          <div
            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
          >
            <p>Absolutely! Can't wait for our pizza date. 🍕</p>
          </div>
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
          >
            <img
              src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="My Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <!-- Incoming Message -->
        <div class="flex mb-4 cursor-pointer">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
          >
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
          </div>
          <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p class="text-gray-700">Hoorayy!!</p>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <footer
        class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4"
      >
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
            Send
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
const hiddenDropdown = ref(true);
const hiddenBar = ref(false);
const currentChat = ref(1);

onMounted(() => {
  document.addEventListener("click", () => {
    hiddenDropdown.value = true;
  });
});
</script>

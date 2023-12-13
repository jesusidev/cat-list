<script lang="ts" setup>
import { IconHeart } from '@tabler/icons-vue'
</script>
<template>
  <div
    class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
  >
    <div
      class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
    >
      <img alt="cat" src="https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg" />
      <div
        class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
      ></div>
      <button
        class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <IconHeart />
      </button>
    </div>
    <div class="p-6">
      <div class="mb-3 flex items-center justify-between">
        <h5
          class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          Bengal
        </h5>
      </div>
      <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
        Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or
        for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of
        interaction and woe betide the owner who doesn't provide it.
      </p>
    </div>
    <div class="p-6 pt-3">
      <button
        class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Get New Cat
      </button>
    </div>
  </div>
</template>

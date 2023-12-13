<template>
  <div class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center">
    <div class="container mx-auto mx-auto p-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<!--Options API-->
<!--<script>-->
<!--import { IconMenu2 } from '@tabler/icons-vue'-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isHidden: true,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    toggleVisibility() {-->
<!--      this.isHidden = !this.isHidden;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--Composition API-->
<script lang="ts" setup>
import { ref } from 'vue'
import { IconMenu2 } from '@tabler/icons-vue'

interface NavigationItem {
  id: number
  name: string
  link: string
}

const props = defineProps<{ navigationList: NavigationItem[] }>()

const isHidden = ref(true)

const toggleVisibility = () => {
  isHidden.value = !isHidden.value
}
</script>

<template>
  <nav class="flex items-center bg-pink-500 p-3 flex-wrap">
    <slot></slot>
    <button
      class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      @click="toggleVisibility"
    >
      <IconMenu2 />
    </button>
    <div
      v-if="props.navigationList.length > 0"
      id="navigation"
      :class="{ hidden: isHidden, 'top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto': true }"
    >
      <div
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
      >
        <a
          v-for="item in props.navigationList"
          :key="item.id"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white"
          href="#"
        >
          <span>{{ item.name }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

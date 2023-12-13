<script lang="ts" setup>
import MainNavigation from '@/layouts/navigation/MainNavigation.vue'
import MainLogo from '@/components/logo/MainLogo.vue'
import PetCard from '@/components/card/PetCard.vue'
import GridCard from '@/layouts/grid/GridCard.vue'
import { useCatsStore } from '@/store/cats'
import { onMounted } from 'vue'

const catStore = useCatsStore()

const getCats = async () => {
  await catStore.getCats()
}

onMounted(async () => {
  await catStore.getCats()
})

const navigationList = [
  {
    id: 1,
    name: 'View Repo',
    link: 'https://github.com/jesusidev/cat-list'
  }
]
</script>

<template>
  <MainNavigation :navigationList="navigationList">
    <MainLogo />
  </MainNavigation>
  <main>
    <button
      class="select-none rounded-sm bg-pink-500 m-10 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      @click="getCats"
    >
      Load Cats
    </button>
    <GridCard>
      <div v-if="catStore.state.loading">Loading</div>
      <div v-if="catStore.state.error">{{ catStore.state.error }}</div>
      <PetCard v-for="cat in catStore.state.cats" :key="cat.id" :cat="cat" />
    </GridCard>
  </main>
</template>

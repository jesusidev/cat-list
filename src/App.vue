<script lang="ts" setup>
import MainNavigation from '@/layouts/navigation/MainNavigation.vue'
import MainLogo from '@/components/logo/MainLogo.vue'
import PetCard from '@/components/card/PetCard.vue'
import GridCard from '@/layouts/grid/GridCard.vue'

const navigationList = [
  {
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 2,
    name: 'About',
    link: '/about'
  },
  {
    id: 3,
    name: 'Contact',
    link: '/contact'
  }
]
</script>

<template>
  <MainNavigation :navigationList="navigationList">
    <MainLogo />
  </MainNavigation>
  <main>
    <GridCard>
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
    </GridCard>
  </main>
</template>

import { reactive } from 'vue'
import type { Cat } from '@/services/cats/cats'
import { fetchCat } from '@/services/cats/cats'
import { useFetchCats } from '@/composables/useFetchCats'

interface CatsStore {
  state: {
    cats: Cat[]
    loading: boolean
    error: string | null
  }
  getCats: () => Promise<void>
  addCat: (cat: Cat) => void
  getCat: (id: string) => Cat | undefined
  updateCat: (id: string) => void
  deleteCat: (id: string) => void
}

export const useCatsStore = (): CatsStore => {
  const state = reactive({ cats: [] as Cat[], loading: false, error: null as string | null })

  const fetch_cats = useFetchCats()

  const getCats = async () => {
    await fetch_cats.loadCats()
    state.loading = true
    state.error = fetch_cats.error.value

    const detailedCats: Cat[] = []

    for (const cat of fetch_cats.cats.value) {
      const detailedCat = await fetchCat(cat.id)
      detailedCats.push(detailedCat)
    }

    state.cats = detailedCats
    state.loading = false
  }

  const addCat = (newCat: Cat) => {
    state.cats.push(newCat)
  }

  const getCat = (id: string) => {
    return state.cats.find((cat) => cat.id === id)
  }

  const updateCat = async (id: string) => {
    console.log('updateCat', id)
    console.log('state', state.cats)
  }

  const deleteCat = (id: string) => {
    const index = state.cats.findIndex((cat) => cat.id === id)
    if (index !== -1) {
      state.cats.splice(index, 1)
    }
  }

  return { state, getCats, addCat, getCat, updateCat, deleteCat }
}

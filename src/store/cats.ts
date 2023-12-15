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

const state = reactive({ cats: [] as Cat[], loading: false, error: null as string | null })

export const useCatsStore = (): CatsStore => {
  const fetch_cats = useFetchCats()

  const getCats = async () => {
    await fetch_cats.loadCats()
    state.cats = []
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
    await fetch_cats.loadCats()
    const cat = getCat(id)
    const updatedCat = fetch_cats.cats.value[0]
    if (cat) {
      Object.assign(cat, updatedCat)
    }
  }

  const deleteCat = (id: string) => {
    const index = state.cats.findIndex((cat) => cat.id === id)
    if (index !== -1) {
      state.cats.splice(index, 1)
    }
  }

  return { state, getCats, addCat, getCat, updateCat, deleteCat }
}

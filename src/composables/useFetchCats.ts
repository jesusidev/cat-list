import { type Ref, ref } from 'vue'
import { type Cat, fetchCats } from '@/services/cats/cats'

interface IFetchCats {
  cats: Ref<Cat[]>
  loading: Ref<boolean>
  error: Ref<string | null>
  loadCats: () => void
}

export function useFetchCats(): IFetchCats {
  const cats = ref<Cat[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const loadCats = async () => {
    loading.value = true
    error.value = null
    try {
      cats.value = await fetchCats()
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An error occurred.'
      }
    } finally {
      loading.value = false
    }
  }

  return { cats, loading, error, loadCats }
}

export interface Cat {
  id: string
  name: string
  description: string
  url: string
  breeds?: {
    name: string
    description: string
  }[]
}

async function fetchCats(): Promise<Cat[]> {
  const response: Response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng'
  )
  if (!response.ok) {
    throw new Error(`Failed to fetch cats: ${response.statusText}`)
  }
  const data: Cat[] = await response.json()
  return data
}

async function fetchCat(catId: string): Promise<Cat> {
  const url = `https://api.thecatapi.com/v1/images/${catId}`
  const response: Response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error when fetching cat info: ${response.statusText}`)
  }
  const data: Cat = await response.json()
  if (data && data.breeds && data.breeds.length > 0) {
    const breed = data.breeds[0]
    const description = breed.description || ''
    const name = breed.name || ''
    return { id: data.id, url: data.url, description, name }
  } else {
    return { id: data.id, url: data.url, description: '', name: '' }
  }
}

export { fetchCats, fetchCat }

// Access key: Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ
// Secret key: HICCm8OzVb23S6dRGT9Q09is_8NvQWsDY8cnj-JRS58

export let randomJSON = () => {
  const data = require('@/API/random.json')
  return data
}

export let searchData = async (requestedData, page) => {
  const request = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=9&query=${requestedData}&client_id=Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ`)
  const data = await request.json()
  return data
}

export let randomImages = async () => {
  const request = await fetch('https://api.unsplash.com/photos/random?count=9&client_id=Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ')
  const data = await request.json()
  return data
}
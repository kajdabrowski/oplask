
// Access key: Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/photos/?client_id=Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ

// https://api.unsplash.com/photos/?client_id=Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ

// Secret key: HICCm8OzVb23S6dRGT9Q09is_8NvQWsDY8cnj-JRS58

// https://api.unsplash.com/search/photos?query=THINGTOBESEARCHED&client_id=


// let randomNineImages = 'https://api.unsplash.com/photos/random?count=9&client_id=Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ'

export let getData = async requestedData => {
  const request = await fetch('https://api.unsplash.com/' + requestedData)
  const data = await request.json()
  return data
}
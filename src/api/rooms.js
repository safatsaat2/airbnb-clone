export const getRooms = async() =>{

    const res = await fetch('https://server-tau-taupe.vercel.app/rooms')

    const data = await res.json()
    return data
}
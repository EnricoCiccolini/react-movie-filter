import { useEffect, useState } from 'react'






function App() {


  const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]



  const [resarc, setResarc] = useState('')

  const [film, setFilm] = useState(films)

  const [nameResarch, setNameResarc] = useState('')



  useEffect(() => {
    let result = films

    if (resarc !== '') {

      result = result.filter(films => films.genre === resarc)

    }
    if (nameResarch !== '') {
      let set = []
      result.forEach(Ele => {

        if (Ele.title.includes(nameResarch))
          set.push(Ele)


      })
      result = set;
    }

    setFilm(result)
  }, [resarc, nameResarch])





  return (
    <>
      <div>
        <h2>resarch</h2>
        <select value={resarc} onChange={e => setResarc(e.target.value)} >
          <option value="">---</option>
          <option >Fantascienza</option>
          <option >Thriller</option>
          <option >Romantico</option>
          <option >Azione</option>
        </select>
        <input type="text" onChange={e => setNameResarc(e.target.value)} />

      </div>
      <h1>{resarc}  {nameResarch}
      </h1>






      {film.map((elem, ind) => (
        <div key={ind}>
          <h4>{elem.title}</h4>
          <p>{elem.genre}</p>
        </div>
      ))}
    </>
  )
}

export default App

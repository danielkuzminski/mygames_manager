import { useState } from 'react'

// styles
import './Add.css'

export default function Add() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [cover, setCover] = useState('')
  const [platform, setPlatform] = useState([])

  const resetForm = () => {
    setTitle('')
    setCover('')
    setRating('')
    setPlatform([])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const game = {
      title,
      cover,
      platform,
      rating
    }

    console.log(game);
    resetForm()
  }

  return (
    <form className='add_form' onSubmit={handleSubmit}>
      <h1>Dodaj grę</h1>
      <label>
        <h3>Tytuł: </h3>
        <input 
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
          placeholder='podaj tytuł'
          value={title}
          required
           />
      </label>
      <label>
        <h3>Platforma: </h3>
        <div>
          <div className='checkbox_div'>
            <input type="checkbox" value={'ps4'} onChange={(e) => {
              const input2c = e.target.checked
              const input2v = e.target.value

              if(input2v && input2c === true && !platform.includes(input2v)){
                setPlatform((prevValue) => {
                  return [...prevValue, input2v]
              })
              }
            }} />
            <span>ps4</span>
          </div>
          <div className='checkbox_div'>
            <input type="checkbox" value={'ns'} onChange={(e) => {
              const inputV = e.target.value
              const inputC = e.target.checked

              if(inputV && inputC === true && !platform.includes(inputV)){
                setPlatform((prevValue) => {
                  return [...prevValue, inputV]
                })
              }
            }} />
            <span>ns</span>
          </div>
        </div>
      </label>
      <label>
        <h3>Okładka: </h3>
        <input 
          onChange={(e) => {
            setCover(e.target.value)
          }}
          type="text"
          placeholder='dodaj okładkę'
          value={cover}
           />
      </label>
      <label>
        <h3>Ocena: </h3>
        <select 
          required
          onChange={(e) => {
          setRating(e.target.value)
        }}>
          <option defaultValue={'empty'}>--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
      <button type='submit'>Wyślij</button>
    </form>
  )
}

// to fix issue with checkbox
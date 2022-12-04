//react imports
import { useState } from 'react'

// import router
import { useNavigate } from 'react-router-dom'

// database imports
import {db} from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

// styles
import './Add.css'

export default function Add() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [cover, setCover] = useState('')
  const [platform, setPlatform] = useState('')

  const resetForm = () => {
    setTitle('')
    setCover('')
    setRating('')
    setPlatform([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let ref = collection(db, 'games')
    

    await addDoc(ref, {
      title,
      cover,
      platform,
      rating
    })

    resetForm()

    navigate('/')
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
        <select 
          required
          onChange={(e) => {
          setPlatform(e.target.value)
        }}>
          <option value='ps4'>playstation 4</option>
          <option value='ns'>nintendo switch</option>
        </select>
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

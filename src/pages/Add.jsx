import { useState } from 'react'

// styles
import './Add.css'

export default function Add() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [languagePL, setLanguagePL] = useState(true)
  const [score, setScore] = useState(null)
  const [cover, setCover] = useState('')

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setGenre('')
    setLanguagePL(true)
    setScore(null)
    setCover('')
  }

  const handleSubmit = (e) => {

  }

  return (
    <form onSubmit={handleSubmit} className='add_form'>
      <h1>Dodaj grę</h1>
      <label>
        <span>Tytuł: </span>
        <input 
          type="text"
          placeholder='podaj tytuł...'
          value={title}
          onChange = {e => {
            setTitle(e.value.target)
          }}
           />
      </label>
      <label>
        <span>Opis: </span>
        <textarea 
          type="text"
          placeholder='podaj tytuł...'
          value={description}
          onChange = {e => {
            setDescription(e.value.target)
          }}
           />
      </label>
      <label>
        <span>Rodzaj: </span>
        <input 
          type="text"
          placeholder='podaj tytuł...'
          value={genre}
          onChange = {e => {
            setGenre(e.value.target)
          }}
           />
      </label>
      <label>
        <span>Wersja PL?</span>
        <select>
          <option value={true}>tak</option>
          <option value={false}>nie</option>
        </select>
      </label>
      <label>
        <span>oceń: </span>
        <input 
          type="number"
          min={1}
          max={10}
          value={score}
           />
      </label>
      <label>
        <span>Dodaj okładkę: </span>
        <input 
          type="text"
          placeholder='adres okładki'
          value={cover}
           />
      </label>
      <button type='submit'>wyślij</button>
    </form>
  )
}

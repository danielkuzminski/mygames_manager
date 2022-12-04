// react imports
import { useEffect, useState } from 'react'

// router
import { useParams } from 'react-router-dom'

// database imports
import { db } from '../firebase/config'
import {doc, getDoc} from 'firebase/firestore'

// styles
import './Game.css'

export default function Game() {
  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    let ref = doc(db, 'games', id)

    getDoc(ref).then((snapshot) => {
      setData(snapshot.data())
    })

  }, [id])

  return (
    <div>
      { data && (
        <div className='game-container'
          style={{width: "100vw", 
                  height: "100vh", 
                  backgroundImage: `url(${data.cover})`, 
                  backgroundPosition: "center",
                  backgroundSize: "cover"}}
                  >
                    <div className='game-presentation'>
                      <h1>{data.title}</h1>
                    </div>
                  </div>
      )}
    </div>
  )
}

// react imports
import { useState, useEffect } from 'react';

// database imports
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

// styles
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    let ref = collection(db, 'games');

    getDocs(ref).then((snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setGames(results);
    });
  }, []);

  console.log(games);

  return (
    <div className='home'>
      {games && games.map((game) => (
        <div key={game.id} className='game-card'>
          <Link to={`games/${game.id}`}><p className='game-title'>{game.title}</p></Link>
          <img className='game-image' src={game.cover} alt="" />
          <span className='game-rating'>{game.rating}</span>
        </div>
      ))}
    </div>
  );
}

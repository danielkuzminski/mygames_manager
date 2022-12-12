// react imports
import { useState, useEffect } from 'react';

// database imports
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

// styles
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
      <Navbar />
      {games && games.map((game) => (
        <Link to={`games/${game.id}`} key={game.id} className='game-card'>
          <p className='game-title'>{game.title}</p>
          <img className='game-image' src={game.cover} alt="" />
          <span className='game-rating'>{game.rating}</span>
        </Link>
      ))}
    </div>
  );
}

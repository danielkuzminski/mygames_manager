// react imports
import { useState, useEffect } from 'react';

// database imports
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

// styles
import './Home.css';

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
    <div>
      {games && games.map((game) => (
        <div key={game.id} className='game-card'>
          <p>{game.title}</p>
        </div>
      ))}
    </div>
  );
}

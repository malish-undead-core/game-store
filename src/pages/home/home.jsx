import React from 'react'
import GameItem from '../../components/gameItem/gameItem'
import './home.css'
import Games from '../../Games.json';

const Home = () => {
    return (
        <div className="home">
            {Games.map(game => <GameItem game={game} key={game.id} />)}
        </div>
    )
}
export default Home;

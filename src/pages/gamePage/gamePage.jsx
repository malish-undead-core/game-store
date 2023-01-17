import React from 'react'
import { useSelector } from 'react-redux'
import GameBuy from '../../components/gameBuy/gameBuy'
import GameCover from '../../components/gameCover/gameCover'
import GameGenre from '../../components/gameGenre/gameGenre'
import './gamePage.css'

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)
    if (!game) { return null }
    return (
        <div className="game-page">
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe className="iframe"
                        width="90%"
                        height="400px"
                        src={game.video}
                        title="Youtube video player"
                    >
                    </iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className="secondary-text">Popular product tags:</p>
                    {game.genres.map((genre) => (<GameGenre genre={genre} key={genre} />))}
                    <div className="game-page__buy-game">
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GamePage
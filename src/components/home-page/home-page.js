import React from 'react';

import './home-page.scss';

function HomePage() {
    return (
        <div className='home-page'>
            <div className="jumbotron pt-5 col-12 mb-0 bg-image font-weight-bold">
                <h1 className="display-4 font-weight-bold">Fortnite</h1>
                <p className="lead font-weight-bold">Build. Battle. Create.</p>
                <hr className="my-4 bg-dark" />
                <p>Be part of an ever-evolving multiplayer experience spread across three main modes, each with a unique play approach, rewards to unlock and things to discover.</p> 
                <p>Join your friends in an immense elimination match and fight to be the last ones standing in Battle Royale, collaborate to craft your own dream Fortnite world in Creative mode or band together with up to three friends to fend off hordes of monsters in Save the World.</p>
                <p>Every mode evolves naturally with weekly updates that add or remove weapons or introduce new events and seasonal updates that reshape the game world, add new rewards to unlock or brand-new in-game features.</p>
                <p>Only one rule matters: the more you play, the more you earn.</p>
                <p className="lead">
                    <a className="btn btn-dark btn-lg" href="https://www.epicgames.com/fortnite/ru/home" role="button">GO   !</a>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
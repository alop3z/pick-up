import React,{useState} from 'react'
import TeamItem from './TeamItem'
import MyTimer from './MyTimer'
import {Alert} from 'react-bootstrap'

const Home = ({home, away, setHome, setAway, gameDuration }) => {
   
    
    const addHomeGoalHandler = () => {
        const newScore = home.score + 1
        setHome({
            ...home, score: newScore
        })
        
    }

    const addAwayGoalHandler = () => {
        const newScore = away.score +1
        setAway({
            ...away, score: newScore
        })
        
    }


    const time = new Date();
    time.setSeconds(time.getSeconds() + gameDuration); 
    
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-4">
                    <TeamItem team={home} addGoal={addHomeGoalHandler}/>
                </div>
                <div className="col-md-4">
                    <MyTimer
                        expiryTimestamp={time} 
                        setHome={setHome}
                        setAway={setAway}
                        gameDuration={gameDuration}
                        away={away}
                        home={home}
                    />
                </div>
                <div className="col-md-4">
                    <TeamItem team={away} addGoal={addAwayGoalHandler}/>
                </div>
            </div>
           
        </div>
    )
}

export default Home

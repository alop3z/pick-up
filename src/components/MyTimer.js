import React, {useEffect} from 'react';
import { useTimer } from 'react-timer-hook';


function MyTimer({ expiryTimestamp, setHome, setAway, gameDuration, home, away }) {

  const gameOverHandler = () => {
    
  }


  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp ,onExpire: () => alert("Game Over!")});

  useEffect(() => {
    startGameHandler()
  }, [])

  const startGameHandler = () => {
      pause()
  }

  const resetgameHandler = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + gameDuration);
    restart(time)
    setHome({...home, score: 0 })
    setAway({...away, score: 0})
  }

  return (
    <div style={{textAlign: 'center'}} >
      <div style={{fontSize: '100px'}}>
        <span>{(minutes < 10) ? `0${minutes}` : minutes}</span>:<span>{(seconds < 10) ? `0${seconds}` : seconds}</span>
      </div>
        {isRunning ? (
            <button className='btn btn-secondary m-2' onClick={pause}>PAUSE</button>
        ) : (
            <button className='btn btn-success m-2' onClick={resume}>PLAY</button>
        )}
        <button className='btn btn-danger m-2' onClick={resetgameHandler}>Restart</button>
      
      
      
      
    </div>
  );
}

export default MyTimer
import {useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './styles/app.scss';



function App() {

  const [home, setHome] = useState({
    name:"Barcelona",
    image: "https://img.icons8.com/color/452/barcelona-fc.png",
    score: 0,
  })

  const [away, setAway] = useState({
    name:"Real Madrid",
    image: "http://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    score: 0
  })

  const [gameDuration, setGameDuration] = useState(420) 

  return (
    <div className="App">
      <Header 
        away={away}
        setAway ={setAway}
        home={home}
        setHome={setHome}
        gameDuration={gameDuration}
        setGameDuration={setGameDuration}
      />
      <Home 
        away={away}
        setAway ={setAway}
        home={home}
        setHome={setHome}
        gameDuration={gameDuration}
      />
    </div>
  );
}

export default App;

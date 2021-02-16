import React from 'react'

const TeamItem = ({team, addGoal}) => {


    return (
        <div className="card">
            <div className="card-body text-center">
                <img src={team.image} alt={team.name} style={{width: "180px",height:"180px", padding: "5px"}} />
                <h3>{team.name}</h3>
                <h1>{team.score}</h1>
                <button className="btn btn-primary btn-block" onClick={addGoal} >GOAL</button>

            </div>
            
        </div>
    )
}

export default TeamItem

import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const Header = ({home, away, setHome, setAway, gameDuration, setGameDuration}) => {
    const [show, setShow] = useState(false);
    const [homeIF, setHomeIF] = useState(home.name)
    const [awayIF, setAwayIF ] = useState(away.name)
    const [durationIF, setDurationIF] = useState(gameDuration)

    const toggle = () => setShow(!show);

    const homeIFHandler = (e) => {
        setHomeIF(e.target.value)
    }

    const awayIFHandler = (e) => {
        setAwayIF(e.target.value)
    }

    const durationIFHandler = (e) => {
        
        setDurationIF(e.target.value)
    }

    const gameSettingsHandler = (e) => {
        e.preventDefault()
        setHome({...home, name:homeIF})
        setAway({...away, name:awayIF})
        setGameDuration(parseInt(durationIF))
    }
    

    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-between align-items-center">
            <h1 className="navbar-brand mx-5"><i className="fa fa-futbol fa-2x"></i> PICK UP</h1>
                
            <button onClick={toggle} className="btn btn-secondary mx-5"><i className="fas fa-cog"></i> Settings</button>

            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                <Modal.Title>Game Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="homeTeam">
                            <Form.Control type="text" placeholder="Home Team" value={homeIF} onChange={homeIFHandler} />
                        </Form.Group>
                        <Form.Group controlId="awayTeam">
                            <Form.Control type="text" placeholder="Away Team" value={awayIF} onChange={awayIFHandler} />
                        </Form.Group>

                        <Form.Group controlId="gameDuration">
                            <Form.Control type="text" placeholder="Game Duration" value={durationIF} onChange={durationIFHandler} />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={toggle}>
                    Close
                </Button>
                <Button variant="primary" type='submit' onClick={gameSettingsHandler}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>    
        </nav>
    )
}

export default Header

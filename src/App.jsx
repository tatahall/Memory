import React, { useState, useEffect } from  'react';
//import ReactCardFlip from 'react-card-flip'
import Board from './components/board';

import initializeDeck from './deck'

export default function App(){
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([]);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    //add variables for score, wins, losses and guesses

    useEffect(() => {
        resizeBoard()
        setCards(initializeDeck())
    }, [])

    useEffect(() => {
        preloadImages()
    }, cards)

    //use effect for score

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)
        //component will unmount
        return () => window.removeEventListener('resize', resizeListener)
        
    })
    

    const handleClick = (id) => {
        setDisabled(true);
        if (flipped.length === 0){
            setFlipped([id])
            setDisabled(false)
        }else{
            if(sameCardClicked(id))return
            setFlipped([flipped[0], id])
            if (isMatch(id)){
                setSolved([...solved, flipped[0], id])
                resetCards()
                //score update
            }else{
                setTimeout(resetCards, 3000)
            }
        }
        //setFlipped([...flipped, id]);
    }
    
    const preloadImages = () => {
        cards.map(card => {
            const src = '/img/${card.type}.png'
            new Image().src = src
        })
         
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const sameCardClicked = (id) => flipped.includes(id)

    const isMatch = (id) => {
        const clickedCard = cards.find((card) => card.id === id)
        const flippedCard = cards.find((card) => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type
    }

    const resizeBoard = () => {
        setDimension(Math.min(
            document.documentElement.clientWidth,
            document.documentElement.clientHeight,
        ),
        )
    }

    return (
        <div>
            <h2>
                Do you know where the cards are?
            </h2>
            <Board
            dimension={dimension}
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}
            disabled={disabled}
            solved={solved}
            />

           
        </div>
    )
};
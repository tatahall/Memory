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
    const [score, setScore] = useState(0);
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [guesses, setGuesses] = useState(0);//wrong guess
    //add variables for score, wins, losses and guesses

    useEffect(() => {
        resizeBoard()
        setCards(initializeDeck())
    }, [])

    useEffect(() => {
        preloadImages()
      }, cards);

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)
        //component will unmount
        return () => window.removeEventListener('resize', resizeListener)
        })
    //use effect for score
    //validateScore is to validate that the score has reached a specific number for reset?
    useEffect(() => {
        validateScore();//checkscore
    }, [score]);

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
                updateScore(score, validateScore);
            }else{
                doesntMatch();
            }
        }
        //setFlipped([...flipped, id]);
    }

    const doesntMatch = () => {
        updateGuess(guesses, validateGuess);
        setTimeout(resetCards, 2000);
    }  
    
    function updateScore(score, cb){
        var newScore = score + 1;
        setScore(score + 1);
        cb(newScore)
    }

    function updateGuess(guesses, cb){
        var newGuess = guesses + 1;
        setGuesses(score + 1);
        cb(newGuess);
    }

    const validateScore = (score) => {
        if(score > 5){
            setWins(wins + 1);
            setTimeout(newGame, 2000);
        }
    }

    const validateGuess = (wrongGuess) => {
        if(wrongGuess > 7){
            setLosses(losses + 1);
            setTimeout(newGame, 2000);
        }
    }

    const newGame = () => {
        setSolved([]);
        setCards(initializeDeck());
        setGuesses(0);
        setScore(0);
      }
    
      const preloadImages = () => 
      cards.map((card) => {
        const src = `/img/${card.type}.png`;
        new Image().src = src;
      })
  
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
            <h1 className="title">Yarn Clicky</h1>
            <hr/>
            <h3 className="question">
                Can you make the yarn sayings match?
            </h3>
            <Board
            dimension={dimension}
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}
            disabled={disabled}
            solved={solved}
            />
            <p className="score">wins = {wins}</p>
            <p className="score">losses = {losses}</p>   
            <p className="score">guesses = {guesses}</p> 
            <p className="score">score = {score}</p>
            
        </div>
    )
};
import './board.css'
import {useRef} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const Board = ({wrongGuesses, updateGameState}) => {
    const canvasElement = useRef(null);
    const boardElement = useRef(null);
    const ctxElement = useRef(null);
    const startingScript = () => {
        
        canvasElement.current.width = boardElement.current.offsetWidth
        canvasElement.current.height = boardElement.current.offsetHeight * .94;
        let ctx = canvasElement.current.getContext("2d");
        ctxElement.current = ctx;
        drawBase(ctx);
        drawPole(ctx);
        drawPole2(ctx);
        drawRope(ctx);
    }
    const drawBase = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(650, 420);
        ctx.lineTo(350, 420);
        ctx.stroke();
    }
    const drawPole = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.lineTo(500, 100);
        ctx.stroke();
    }
    const drawPole2 = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(500, 100);
        ctx.lineTo(725, 100);
        ctx.stroke();
    }
    const drawRope = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(725, 100);
        ctx.lineTo(725, 175);
        ctx.stroke();
    }

    const drawHead = () => {
        
        ctxElement.current.beginPath();
        ctxElement.current.arc(725, 200, 25, 0, 2 * Math.PI);
        ctxElement.current.stroke();        
    }
    const drawBody= () => {
        
        ctxElement.current.beginPath();
        ctxElement.current.moveTo(725, 225);
        ctxElement.current.lineTo(725, 315);
        ctxElement.current.stroke();
    }
    const drawRightArm = () => {
        
        ctxElement.current.beginPath();
        ctxElement.current.moveTo(725, 250);
        ctxElement.current.lineTo(765, 285);
        ctxElement.current.stroke();        
    } 
    const drawLeftArm = () => {
        
        ctxElement.current.beginPath();
        ctxElement.current.moveTo(725, 250);
        ctxElement.current.lineTo(685, 285);
        ctxElement.current.stroke();
    }
    const drawLeftLeg = () => {
        
        ctxElement.current.beginPath();
        ctxElement.current.moveTo(725, 315);
        ctxElement.current.lineTo(685, 350);
        ctxElement.current.stroke();
    }
    const drawRightLeg = () => {
        
        ctxElement.current.beginPath();
        ctxElement.current.moveTo(725, 315);
        ctxElement.current.lineTo(765, 350);
        ctxElement.current.stroke();
    }
     
    const drawings = [drawHead, drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg];
    useEffect(() => {
        startingScript()
    }, [])
    useEffect(() => {
        console.log(wrongGuesses);
        if(wrongGuesses.size <= 6 && wrongGuesses.size > 0){
            console.log('here')
            if(wrongGuesses.size === 6){
                // console.log('I made it');
                updateGameState('Lost');
            }
            drawings[wrongGuesses.size - 1]();
        }
    }, [wrongGuesses])
    return (
        <div className='Board' ref={boardElement}>
            <canvas id='gameboard' ref={canvasElement} width='973' height='60'></canvas>
        </div>
    );
}
 
export default Board;
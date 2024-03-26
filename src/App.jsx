import './App.css';
import Card from './components/card';
import React, { useRef, useEffect, useState } from 'react';

const salt = [0.57, 0.41, 0.11, 0.81, 0.77, 0.37, 0.23, 0.66, 0.99, 0.41, 0.31, 0.8, 0.89]
let oldScrollVal = -100;

export default function App() {
  const [scrollVal, setScrollVal] = useState(0)
  let maxLayers = 12
  let totalCards = 1
  let cards = [];
  let colors = ['green', 'yellow', 'orange', 'violet', 'lime', 'blue', 'green', 'yellow', 'orange', 'violet', 'lime','blue', 'green', 'yellow', 'orange', 'violet', 'lime',]

  let scrollY = window.scrollY

  document.addEventListener('scroll', () => {
    scrollY = window.scrollY
    if(Math.abs(oldScrollVal-scrollY) > 1){
      setScrollVal(scrollY)
      oldScrollVal = scrollVal
    }
  })

  for (let layer = 1; layer <= maxLayers; layer++) {
    for (let cardNum = 1; cardNum <= totalCards; cardNum++) {
      let randomTop = Math.floor(Math.random() * 400);
      let randomLeft = Math.floor(Math.random() * 400);
      let blurFilter = `blur(${(layer-1)*1}px)`

      let card = (
        <Card
          key = {`${layer}${cardNum}`}
          style={{
            zIndex: maxLayers - layer,
            top: (15*cardNum + 15*(maxLayers-layer)) - scrollVal*(maxLayers-layer),
            left: (15*(maxLayers-layer) + 5*cardNum),
            backgroundColor: colors[layer-1],
            filter: blurFilter,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
          }}
          onClick
        >
          {`${layer}${cardNum}`}
        </Card>
      );
  
      cards.push(card);
    }
  }
  console.log(cards)

  return (
    <>
      <div className="flex flex-wrap overflow-hidden">
        {cards}
        {/* <Card className='top-5 left-5 bg-red-400 z-10'>
          1
        </Card>
        <Card className='top-5 right-5'>
          2
        </Card>
        <Card className='bottom-5 left-5'>
          3
        </Card>
        <Card className='bottom-5 right-5'>
          4
        </Card>

        <Card className='top-16 left-16 blur-sm bg-red-400 z-0'>
          1
        </Card>
        <Card className='top-16 right-16 blur-sm'>
          2
        </Card>
        <Card className='bottom-16 left-16 blur-sm'>
          3
        </Card>
        <Card className='bottom-16 right-16 blur-sm'>
          4
        </Card> */}
        <Card style={{height:'10000px', width:'80%', zIndex:-10, backgroundColor:'grey'}}></Card>
      </div>
    </>
  );
}

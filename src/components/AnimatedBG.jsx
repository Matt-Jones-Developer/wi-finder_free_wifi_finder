// an animated background component 

// pseudo code 

/*

Using a single image, create randomly falling object that:

-> Create (spawn) 50% opacity pin object
  -> must useState and useEffect to set and get the re-renders each time
  -> spawn start XY:
  -> x:0 to x:2400n (y:0)
  -> END XY
  -> (x:0 to x:2400 (y:1400)

-> generate 4-5 instances (Math.Random) every 2 seconds 
  -> use setTimeOut to re-spawn once Y is > 0 every 2-3 seconds

-> repeats (random spawn) when they hit the bottom of the page 
-> destroy if off the screen  


*/
import { useState, useEffect } from "react";
import spawnPin from '../assets/png/spawnPin.png'

const SpawnPins = () => {
  // todo
  return (
    <>
    </>
  )

}

export default SpawnPins;
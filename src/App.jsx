import { useState } from "react";


function App() {

  const [score,setScore]=useState(76)
  const [wicket,setWicket]=useState(2)
  const [over,setOver]=useState(`${Math.floor(50/6)}.${50%6}`)
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {score}
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {wicket}
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>{setScore(score+1)}} className="addScore1">Add 1</button>
        <button onClick={()=>{setScore(score+4)}}  className="addScore4">Add 4</button>
        <button onClick={()=>{setScore(score+6)}}  className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>{setWicket(wicket+1)}} >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{setOver(`${(Number(over)+.1).toFixed(1)}`)}} >Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status">`${score>=100} ? India Won`</h1>
    </div>
  );
}

export default App;

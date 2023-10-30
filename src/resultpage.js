import React from 'react';
import pic from './images/righttick.png'

const Resultpage = (props) => {
    return (
        <>
            <div className="result">
          {/* <h3>Result</h3> */}
          {/* <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2" /> */}
         <div style={{ textAlign:'center', alignItems:'center'}}> <img src={pic} alt="img2" width="50px" height="50px" /></div>
          <h5 style={{color:'green'}}>You have successfully submit the assessment</h5>
          <p>
            Total Question: <span>{props.questions.length}</span>
          </p>
          <p>
            Total Score:<span> {props.result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {props.result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {props.result.wrongAnswers}</span>
          </p>
         <div style={{alignItems:'center',textAlign:'center'}}> <button className="btn2" onClick={props.handleShowAnswers}>Show Answers</button></div>
         <div className="buttonsdiv">
         <button className="btn btn-primary btntry" onClick={props.tryagainclick}>Try Again</button>
          <button className="btn btn-danger btnback"  onClick={props.backclick}>Back to Home</button>
         </div>
          {/* <p>Time taken:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</p> */}
          
        </div>
            
        </>
    );
};

export default Resultpage;
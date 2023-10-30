import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Quiz from './quiz';
import Navigation from './navigation';
import Licence from './licence';

const Home = () => {
    const history = useNavigate();

   
    
    return (
        <>
            <div >
                <Navigation/>
                {/* {console.log(props)} */}
                <div className="container">
                    <>
                    {/* <button onClick={quizStart}>Start Quiz</button> */}
                      {/* <Quiz/> */}
                      <Licence/>
                    </>

                </div>
            </div>
        </>
    )
}
export default Home;

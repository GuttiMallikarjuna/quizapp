
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


const Licence = () => {

    const [accept, setAccept] = useState(false);

    const history = useNavigate();

    const btnClick = (e) => {
        if (e.currentTarget.value === 'back') {
            history('/');
        } else {
            history('/quiz');
        }
    }

    return (
        <>                   
                        <div className="welcome">
                            <h4 className="head">Quiz Instructions</h4>
                           <p>Please read the instructions and conditions before starting the Quiz.</p>
                            <div className="licenceparas">
                                <p>The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.</p>
                                <p>Each question in the quiz is of multiple-choice or <b>"true or false"</b> format. Read each question carefully, and click on the button next to your response that is based on the information covered on the topic in the module. Each correct or incorrect response will result in appropriate feedback immediately at the bottom of the screen.</p>
                                <p>After responding to a question, click on the <b>"Next"</b> button at the bottom to go to the next question.</p>
                                <p>If you select an incorrect response for a question, you can try again until you get the correct response. If you retake the quiz, the questions and their respective responses will be randomized.</p>
                                <p>The total score for the quiz is based on your responses to all questions. If you respond incorrectly to a question or retake a question again and get the correct response, your quiz score will reflect it appropriately. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.</p>

                            </div>
                            <p>If you read all instructions, you must accept the checkbox. Click <b>Next</b> to continue</p>
                            <label className='radiohover'>
                                <input type="checkbox" onClick={(event) => setAccept(event.target.checked)} className="largecheckbox" ></input> &nbsp;<span>I am ready to start the quiz.</span>
                            </label>
                            <div className="licencebuttons">
                                <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                                <button value="next" onClick={btnClick} disabled={!accept} className="btn btn-primary licencenext">Next</button>
                            </div>
                        </div>
                
        </>
    )
}
export default Licence;
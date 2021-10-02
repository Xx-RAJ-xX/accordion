import React from 'react';
import data from './data';
import Question from './Question';


const Questions = () => {
    return (
        <section className='info'>
            {
        data.map((question) => {
            return(
                <Question  key ={question.id} question = {question}/>
            );
          
        })
      }
        </section>
    )
}

export default Questions;

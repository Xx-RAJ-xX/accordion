import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {useState,useEffect} from 'react';


const Question = ({question}) => {
        const {id,title,info}= question;
        const [showInfo,setShowInfo] =useState(false);

        const handleShow =() =>{

                setShowInfo(!showInfo)
    
        }

       
          return(
            <article key= {id} className='question'>
                <header>
                    <h4>{title}</h4>
                    <button className='btn' onClick={handleShow}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} </button>   
                </header>
                {showInfo && <p>{info}</p> }
            </article>
          );
    
}

export default Question;

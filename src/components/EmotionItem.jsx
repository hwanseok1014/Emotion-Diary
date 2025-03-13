import './EmotionItem.css';
import getEmotionImage from '../utill/get-emotion-image';
import { useState } from 'react';

const EmotionItem=({emotionId,emotionName,isSelected,onClick})=>{

    return(
        <div className={`EmotionItem ${isSelected ? 
        `EmotionItem_on_${emotionId}` : ""}`}
        onClick={onClick}>
            <img src={getEmotionImage(emotionId)}/>
            <div>
              {emotionName} 
            </div>                       
        </div>
    )
}

export default EmotionItem;
import './Viewer.css';
import getEmotionImage from '../utill/get-emotion-image';
import emotionList from '../utill/constant';


const Viewer =()=>{
    const emotionId =2;
    const emotionItem = emotionList.find((item)=>String(item.emotionId) ===String(emotionId));

    const content ='수업이 늦게 끝나요';

   
    return(
        <div className='Viewer'>
            <section className='img_section'>
              <h4>오늘의 감정</h4>
              <div className={`emotion_img_wrapper emotion_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
                <div>
                    {emotionItem.emotionName}
                </div>                  
              </div>
            </section>

            <section className='class_section'>
                <h4>오늘의 일기</h4>
                <div className='content_wrapper'>
                   <p>{content}</p> 
                </div>
  
            </section>

        </div>
    )
};

export default Viewer;
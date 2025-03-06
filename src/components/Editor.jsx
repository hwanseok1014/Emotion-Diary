import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const emotionList =[{
    emotionId:1,
    emotionName:'완전 좋음',
},{
    emotionId:2,
    emotionName:'좋음',
},
{
    emotionId:3,
    emotionName:'그럭 저럭',
},
{
    emotionId:4,
    emotionName:'나쁨',
},
{
    emotionId:5,
    emotionName:'끔찍함',
}]

const getStringedDate = (targetDate) =>{
    //날짜 -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;
    let date = targetDate.getDate();

    if( month < 10 ){
        month =`0${month}`;
    }
    if( date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
}

const Editor =({onSubmit})=>{
    const [newdata,setNewData] = useState({
        createDate:new Date(),
        emotionId: 3,
        content: '',
    });

    const navigation =useNavigate();

    const onClickSubmitButton= ()=>{
        onSubmit(newdata);
    }

    const onChangenewdata =(e)=>{
        let {name, value} =e.target;

        if(name === "createDate"){
           value = new Date(value);
        }

        setNewData({
            ...newdata,
            [name]:value,
        })
        console.log(newdata);
    }

    return <div className='Editor'>
        <section className='date_section'>
            <h4>오늘의 날짜</h4>
            <input type='date'
            value={getStringedDate(newdata.createDate)}
            name='createDate'
            onChange={onChangenewdata}/>        
        </section>
        
        <section className='emotion_section'>
            <h4>오늘의 감정</h4>
            <div className='emotion_list_wrap'>
                {emotionList.map((item)=>
                <EmotionItem key={item.emotionId} 
                {...item}
                isSelected={item.emotionId === newdata.emotionId}
                onClick={()=>
                    onChangenewdata({
                        target: {
                            name: "emotionId",
                            value: item.emotionId,
                        }
                    })/*button 태그는 name, value 속성 x ,event.target 수동으로 생성
                     React 컴포넌트 자체는 onClick 직접 처리 x, 내부에서 직접 실행   */
                }/>)} 
            </div>
        </section>
        
        <section className='content_section'>
            <h4>오늘의 일기</h4>
            <textarea 
            name='content'
            onChange={onChangenewdata}
            placeholder='오늘은 어땠나요?'/>
        </section>

        <section className='button_section'>
            <Button text={'취소하기'} onClick={()=>navigation('/')}/>
            <Button text={'작성완료'} onClick={onClickSubmitButton}
            type={'POSITIVE'}/>
        </section>

    </div>
}

export default Editor;
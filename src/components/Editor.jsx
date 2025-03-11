import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import emotionList from '../utill/constant';
import getStringedDate from '../utill/get-stringed-date';

const Editor =({initState,onSubmit})=>{
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

    useEffect(()=>{
        if(initState){
        console.log(initState)
        setNewData({...initState,
            createDate: new Date(Number(initState.createDate)),
    })}},[initState])

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
            value={newdata.content} 
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
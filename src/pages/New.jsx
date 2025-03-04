import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const New =( ) =>{
    const navigation = useNavigate();

    return <div>
        <Header title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'}
        onClick={()=> navigation(-1)}/>}/>
        <Editor/>

    </div>
}

export default New;
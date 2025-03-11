import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { DiarystateContext } from "../App";
import { useContext } from "react";
import Viewer from "../components/Viewer";

const Diary =() =>{
    const state =useContext(DiarystateContext);
    const params = useParams();
    
    return<div>
        <Header
        title={'2025-03-11'}
        leftChild={<Button text={'< 뒤로가기'}/>}
        rightChild={<Button text={'수정하기'}/>}/>
        
        <Viewer/>
    </div>

}

export default Diary;


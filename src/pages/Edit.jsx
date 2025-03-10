import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispathcContex } from "../App";
import { useContext } from "react";


const Edit = ()=>{
    const navigation = useNavigate();
    const {id}=useParams()
    const {onDelete} = useContext(DiaryDispathcContex);

    const onClickDelete=()=>{
        if( window.confirm("일기를 정말 삭제할까요?다시 복구되지 않아요!")){
            onDelete(id);
            navigation('/',{replace:true});
        } 
    }

    return <div>
        <Header title={'일기 수정하기'}
        leftChild={<Button text={'< 뒤로 가기'}
        onClick={()=>navigation(-1)}/>}
        rightChild={<Button 
        text={'삭제하기'}
        onClick={onClickDelete}
        type={'NEGATIVE'}/>}/>
        <Editor/>
    </div>
}

export default Edit;
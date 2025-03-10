import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispathcContex ,DiarystateContext} from "../App";
import { useContext, useEffect, useState } from "react";


const Edit = ()=>{
    const navigation = useNavigate();
    const {id}=useParams()
    const {onDelete, onUpdate} = useContext(DiaryDispathcContex);
    const state = useContext(DiarystateContext);
    const [initState, setInitState]= useState();

    const onClickDelete=()=>{
        if( window.confirm("일기를 정말 삭제할까요?다시 복구되지 않아요!")){
            onDelete(id);
            navigation('/',{replace:true});
        } 
    }

    const onClickUpdate= (newdata) =>{
        onUpdate(id,newdata.createDate.getTime(),newdata.emotionId,newdata.content);
        navigation('/',{replace:true});
    }

    useEffect(() =>{
        const currentDiaryItem = state.find((item)=>
            String(item.id)=== String(id));

            if(!currentDiaryItem){
                window.alert("존재하지 않는 일기입니다.");
                navigation('/',{replace: true});
            }
            setInitState(currentDiaryItem);
    }
,[id,state])

    return <div>
        <Header title={'일기 수정하기'}
        leftChild={<Button text={'< 뒤로 가기'}
        onClick={()=>navigation(-1)}/>}
        rightChild={<Button 
        text={'삭제하기'}
        onClick={onClickDelete}
        type={'NEGATIVE'}/>}/>
        <Editor onSubmit={onClickUpdate} 
        initState={initState}/>
    </div>
}

export default Edit;
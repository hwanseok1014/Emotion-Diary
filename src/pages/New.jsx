import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { replace, useNavigate } from "react-router-dom";
import { DiaryDispathcContex } from "../App";
import { useContext } from "react";
import usePageTitle from "../Hooks/usePageTitle";


const New =( ) =>{
    const navigation = useNavigate();
    const {onCreate} = useContext(DiaryDispathcContex);

    usePageTitle("새 일기 쓰기");

    const onSubmit= (newdata) =>{
        onCreate(newdata.createDate.getTime(), newdata.emotionId,newdata.content)
        navigation('/', {replace: true});
    }

    return <div>
        <Header title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'}
        onClick={()=> navigation(-1)}/>}
        />
        <Editor onSubmit={onSubmit}/>

    </div>
}

export default New;
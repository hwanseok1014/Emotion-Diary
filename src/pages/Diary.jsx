import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../Hooks/useDiary";

const Diary =() =>{
    const navigation = useNavigate();
    const params = useParams();
    
    const curDiaryItem =useDiary(params.id);
    
    if(!curDiaryItem){
        return<div>데이터 로딩중...!</div>
    }

    const {createDate,emotoinId, content} = curDiaryItem;

    return<div>
        <Header
        title={'s'}
        leftChild={<Button text={'< 뒤로가기'}
        onClick={()=> navigation(-1) }/>}
        rightChild={<Button text={'수정하기'}
        />}/>
        {console.log(curDiaryItem)}
        
        <Viewer emotoinId={emotoinId} content />
    </div>

}

export default Diary;


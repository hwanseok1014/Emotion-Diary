import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../Hooks/useDiary";
import getStringedDate from "../utill/get-stringed-date";

const Diary =() =>{
    const navigation = useNavigate();
    const params = useParams();
    
    const curDiaryItem =useDiary(params.id);
    
    if(!curDiaryItem){
        return<div>데이터 로딩중...!</div>
    }/*useEffect는 컴퍼넌트가 렌더링된 이후에만 실행행이 되기 때문에, 
    초반에 undefined만 반환, 이후에 데이터 저장*/

    const {createDate,emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createDate));

    return<div>
        <Header
        title={`${title} 기록`}
        leftChild={<Button text={'< 뒤로가기'}
        onClick={()=> navigation(-1) }/>}
        rightChild={<Button text={'수정하기'}
        />}/>
        {console.log(curDiaryItem)}
        
        <Viewer emotionId={emotionId} content={content} createDate={createDate} />
    </div>

}

export default Diary;


import { useParams } from "react-router-dom";

const Editor = ()=>{
    const params = useParams();
    return <div>{params.id}번 일기 수정 페이지입니다.</div>
}

export default Editor;
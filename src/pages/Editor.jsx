import { useParams } from "react-router-dom";

const Editor = ()=>{
    const params = useParams();
    return <div>{params.id}번</div>
}

export default Editor;
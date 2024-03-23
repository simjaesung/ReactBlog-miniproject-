import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLike } from "../store";
import { useState, useEffect } from "react";

function Story(){
    let title = useSelector((state) => {return state.list});
    let [fade, setFade] = useState('');
    let dispatch = useDispatch();
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        let a = setTimeout(()=>{setFade('end')},100);
        return(()=>{clearTimeout(a);})
    },[])

    return (
        <div className={"story start " + fade}>
            <div className="story-title">
                <h3>{title[id].title}</h3>
            </div>
            <div className="story-body">
                <p style={{paddingLeft : '20px'}}>{title[id].body}</p>
            </div>
            <h5 onClick={() => {dispatch(setLike(id))}}>❤️ : {title[id].like} </h5>
            <button onClick={()=>{navigate('/modify/'+id)}}>글 수정하기</button>
        </div>
    )
}

export default Story;
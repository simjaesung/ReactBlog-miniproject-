import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modStory } from "../store";

function Modify(){
    let {id} = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [fade,setFade] = useState('');
    let [story] = useState(JSON.parse(localStorage.getItem('data')));
    //let story = useSelector((state) => {return state.list});
    let [title,setTitle] = useState(story[id][0]);
    let [body,setBody] = useState(story[id][1]);

    useEffect(()=>{
        setTimeout(() => {setFade('end')},100);
        return()=>{ setFade(''); }
    },[])

    return (
        <div style={{paddingBottom : '20px'}} className={'start '+fade}>
            <div className="writeAll">
                <h4>글 제목 </h4> 
                <input type = "text" value = {title}
                    onChange={(e)=>{setTitle(e.target.value)}}/>
                <h4>내용</h4>
                <textarea className="writeBody" value={body}
                    onChange={(e)=>{setBody(e.target.value)}}/>
            </div>
            <button onClick={()=>{
                let tmp = [];
                tmp.push(id);
                tmp.push(title); 
                tmp.push(body);
                dispatch(modStory(tmp));
                navigate('/');
            }}>수정하기</button>
        </div>
    )
}

export default Modify;
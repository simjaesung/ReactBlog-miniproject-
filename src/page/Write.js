import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLike, addStory } from "../store";


function Write(){
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [title,setTitle] = useState('');
    let [body,setBody] = useState('');
    let [fade,setFade] = useState('');

    useEffect(()=>{
        setTimeout(() => {setFade('end')},100);
        return()=>{ setFade(''); }
    },[])
    
    return(
        <div style={{paddingBottom : '20px'}} className={'start '+fade}>
            <div className="writeAll">
                <h4>글 제목</h4> 
                <input onChange={(e)=>{setTitle(e.target.value)}}></input>
                <h4>내용</h4>
                <textarea className="writeBody"
                    onChange={(e)=>{setBody(e.target.value)}}/>
            </div>
            <button onClick={()=>{
                let tmp = []; 
                tmp.push(title); tmp.push(body); tmp.push(dateFormat()); tmp.push(0);
                dispatch(addStory(tmp));

                navigate('/');
            }}>글 발행</button>
            <button onClick={()=>{navigate('/')}}>돌아가기</button>
        </div>
    )
}

function dateFormat() {
    let date = new Date();

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

export default Write;
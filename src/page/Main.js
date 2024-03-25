import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delStory, setLike, setStory } from "../store";

function Main( props ){
    let navigate = useNavigate();
    let dispatch = useDispatch();
    //let [title,setTitle] = useState(JSON.parse(localStorage.getItem('data')));
    let [title,setTitle] = useState([]);
    
    useEffect(()=>{
      if(!localStorage.getItem('data')){
        localStorage.setItem('data', JSON.stringify([]));
      }
      setTitle(JSON.parse(localStorage.getItem('data')));
    },[])

    useEffect(()=>{
      setTitle(JSON.parse(localStorage.getItem('data')));
    },[title])

    return(
        <>
          {
            title.map(function(a,i){
              return(
                <div className='list'>
                  <h3 style={{cursor:'pointer'}}><span onClick={()=>{navigate('/story/'+i)}}>{a[0]} </span>
                    <span style={{fontSize : '15px', paddingLeft:"10px"}}
                    onClick={()=>{ dispatch(setLike(i)); }}>❤️ : {a[3]}</span></h3> 
                  <p>{a[2]}</p>
                  <button onClick={()=>{dispatch(delStory(i));}}>삭제하기</button>
                </div>
              )
            })
          }
            <div style={{padding : '10px'}}>
              <button onClick={()=>{navigate('/write')}}>글쓰기</button>
            </div>
          </>
    )
}

export default Main;
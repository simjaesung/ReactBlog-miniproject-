import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delStory, setLike } from "../store";

function Main( props ){
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let title = useSelector((state) => { return state.list });    
    return(
        <>
          {
            title.map(function(a,i){
              return(
                <div className='list'>
                  <h3 style={{cursor:'pointer'}}><span onClick={()=>{navigate('/story/'+i)}}>{a.title} </span>
                    <span style={{fontSize : '15px', paddingLeft:"10px"}}
                    onClick={()=>{ dispatch(setLike(i)); }}>❤️ : {title[i].like}</span></h3> 
                  <p>{a.date}</p>
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
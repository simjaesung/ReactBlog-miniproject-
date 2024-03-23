import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLike } from "../store";

function Main( props ){
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let title = useSelector((state) => { return state.list });
    let like = useSelector((state) => { return state.like });
    
    return(
        <>
          {
            title.map(function(a,i){
              return(
                <div className='list'>
                  <h3 style={{cursor:'pointer'}}><span onClick={()=>{navigate('/story/'+i)}}>{a.title} </span>
                    <span style={{fontSize : '15px', paddingLeft:"10px"}}
                    onClick={()=>{ dispatch(setLike(i)); }}>❤️ : {like[i]}</span></h3> 
                  <p>{a.date}</p>
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
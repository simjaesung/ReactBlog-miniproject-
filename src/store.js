import { configureStore, createSlice } from '@reduxjs/toolkit'

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers : {
        addStory(state, action){
            let tmp = action.payload;
            state.push({id : state.length, title : tmp[0], body : tmp[1], date : tmp[2], like : 0});
        },
        modStory(state, action){
            let tmp = action.payload;
            state[tmp[0]].title = tmp[1];
            state[tmp[0]].body = tmp[2];
        },
        delStory(state, action){
            let tmp = action.payload;
            state.splice(tmp,1);
        },
        setLike(state, action){
            let idx = action.payload;
            state[idx].like++;
        }
    }
})

export let {addStory, modStory, delStory, setLike} = list.actions;

export default configureStore({
  reducer: { 
    list : list.reducer
  }
}) 
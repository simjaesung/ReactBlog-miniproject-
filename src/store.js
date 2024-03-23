import { configureStore, createSlice } from '@reduxjs/toolkit'

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers : {
        addStory(state, action){
            let tmp = action.payload;
            state.push({id : state.length, title : tmp[0], body : tmp[1], date : tmp[2]});
        },
        modStory(state, action){
            let tmp = action.payload;
            state[tmp[0]].title = tmp[1];
            state[tmp[0]].body = tmp[2];
        }
    }
})

export let {addStory, modStory} = list.actions;

let like = createSlice({
    name : 'like',
    initialState : [],
    reducers : {
        addLike(state, action){
            state.push(action.payload);
        },
        setLike(state, action){
            state[action.payload]++;
        }
    }
})

export let {addLike, setLike} = like.actions;

export default configureStore({
  reducer: { 
    list : list.reducer,
    like : like.reducer
  }
}) 
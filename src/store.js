import { configureStore, createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom';

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers : {
        addStory(state, action){
            let tmp = action.payload;
            let a = localStorage.getItem('data');
            a = JSON.parse(a);
            a.push(tmp);
            localStorage.setItem('data',JSON.stringify(a));
        },
        modStory(state, action){
            let tmp = action.payload;
            let a = localStorage.getItem('data');
            a = JSON.parse(a);
            a[tmp[0]][0] = tmp[1];
            a[tmp[0]][1] = tmp[2];
            localStorage.setItem('data',JSON.stringify(a));
        },
        delStory(state, action){
            let tmp = action.payload;
            let a = localStorage.getItem('data');
            a = JSON.parse(a);
            a.splice(tmp,1);
            localStorage.setItem('data',JSON.stringify(a));
        },
        setLike(state, action){
            let tmp = action.payload;
            let a = localStorage.getItem('data');
            a = JSON.parse(a);
            a[tmp][3]++;
            localStorage.setItem('data',JSON.stringify(a));
        }
    }
})

export let {setStory, addStory, modStory, delStory, setLike} = list.actions;

export default configureStore({
  reducer: { 
    list : list.reducer
  }
}) 
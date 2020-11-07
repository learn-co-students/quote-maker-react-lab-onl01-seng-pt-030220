export default (state = [], action) => {



  switch(action.type){
   case 'ADD_QUOTE':
     return [...state,action.quotes]
  default:   
    return state;
  
  }


}

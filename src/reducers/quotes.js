export default (state = [], action) => {


  switch(action.type){
  
   case 'ADD_QUOTE':
     return [...state,action.quote];
       
   case 'REMOVE_QUOTE':
    
     let idx;
     
     idx = state.findIndex(quote => quote.id === action.quoteId) ;
     console.log(`idx`,idx)
    
     return [...state.slice(0,idx), ...state.slice(idx+1)]

     case 'UPVOTE_QUOTE':

     let newState=state.map(quote=>{
     
          if(quote.id === action.quoteId){
            return { ...quote,votes: ++quote.votes }
          }else{
            return quote
          }
     }
     )

     return newState


     case 'DOWNVOTE_QUOTE':
       newState=state.map(quote=>{
     
          if(quote.id === action.quoteId && quote.votes > 0){
            return { ...quote,votes: --quote.votes }
          }else{
            return quote
          }
     }
     )

     return newState
       

   default:   
    return state;

  
  }



}

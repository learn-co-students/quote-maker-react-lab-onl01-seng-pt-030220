export default function quotesReducer(state = [], action) {
    let idx
    switch (action.type) {
      
        case "ADD_QUOTE":
            return [...state, action.quote];   
                
        case "REMOVE_QUOTE":
            return state.filter(quote => quote.id !== action.quoteId);
        
        case "UPVOTE_QUOTE":
          idx = state.findIndex(quote => quote.id === action.quoteId);
          //Not sure why i have to do this??
          return [
            ...state.slice(0, idx),
            Object.assign({}, state[idx], { votes: state[idx].votes += 1 }),
            ...state.slice(idx + 1)
          ];
    
        case "DOWNVOTE_QUOTE":
          idx = state.findIndex(quote => quote.id === action.quoteId);
          if (state[idx].votes <= 0) { return state }

          return [
            ...state.slice(0, idx),
            Object.assign({}, state[idx], { votes: state[idx].votes -= 1 }),
            ...state.slice(idx + 1)
          ];

        default:
            return state
    }
}
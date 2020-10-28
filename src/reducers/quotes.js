export default (state = [], action) => {
  let idx = action.quoteId ? state.findIndex(quote => quote.id === action.quoteId ) : null
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state,
        {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: action.quote.votes
        }
      ]
    case 'REMOVE_QUOTE':
      return [...state.slice(0,idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      return [...state.slice(0,idx),
        {
          ...state[idx],
          votes: state[idx].votes + 1
        },
         ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      if (state[idx].votes > 0) {
        return [...state.slice(0,idx),
          {
            ...state[idx],
            votes: state[idx].votes - 1
          },
            ...state.slice(idx + 1)]
        } else {
          return state
        }
    default:
      return state;
  }
}

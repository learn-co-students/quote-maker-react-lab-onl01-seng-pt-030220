import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote ,downvoteQuote,removeQuote} from '../actions/quotes'

class Quotes extends Component {
 
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {
                 this.props.quotes.map(quote =>  <QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} 
                 downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />)
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp=(state)=>{
  
   return {quotes: state.quotes}
}

  const mapDispatchToProps=dispatch=>(
    
    {upvoteQuote: newVote => dispatch(upvoteQuote(newVote)),
     downvoteQuote: vote => dispatch(downvoteQuote(vote)),
     removeQuote: quote => dispatch(removeQuote(quote)),
     }
    
  ) 

//add arguments to connect as needed
export default connect(mapStateToProp,mapDispatchToProps)(Quotes);

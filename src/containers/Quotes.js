import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  

  render() {

    let renderQuotes = this.props.quotes.map(quote => <div key={quote.id}><QuoteCard quote={quote} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote} removeQuote={this.props.removeQuote} /></div>)

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
              {renderQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return {
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId))
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

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
              {this.props.quotes.map(quote => < QuoteCard quote={quote} key={quote.id} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote} removeQuote={this.props.removeQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeQuote: (id) => dispatch(removeQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

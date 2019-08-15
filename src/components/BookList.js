import React, {Component} from 'react';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
	{
		books{
			name
			genre
		}
	}
`


class BookList extends Component {
	displayBooks(){
		let data = this.props.data;
		return data.loading ? <div>Loading books...</div> :  data.books.map(book => {
			return(
			<li key={book.id}>{book.name}</li>
			);
		})
	}
	render(){
		console.log(this.props);
		return(
			<div>
				<ul id="book-list">
					{this.displayBooks()}
				</ul>
			</div>
		)
	}
}

export default graphql(getBooksQuery)(BookList);

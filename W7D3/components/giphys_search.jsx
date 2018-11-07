import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_term: "",
    };
    this.update = this.update.bind(this);
    this.searchGiphy = this.searchGiphy.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  searchGiphy(e) {
    e.preventDefault();
    let { search_term } = this.state;
    search_term = search_term.split(' ').join('+');
    this.props.fetchSearchGiphys(search_term)
    // .then((data) => {
    //   this.setState({search_term: ""});
    //   console.log(data);
    // });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchGiphy}>
          <label htmlFor="search">Search</label>
          <input onChange={this.update("search_term")} id="search" value={this.state.search_term} />
          <input type="submit" value="Search"/>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}

export default GiphysSearch;

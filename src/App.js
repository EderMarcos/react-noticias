import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {

  state = {
    articles: [],
    err: null
  };

  getNews = query => {
    if (!query) return null;
    const app_id = 'f3df0f8951244e1f9f01c95f428a167f';
    const url = `https://newsapi.org/v2/everything?q=${ query }&sortBy=publishedAt&apiKey=${ app_id }`;

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ articles: res.articles }))
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <Header title="Noticias" />
        <Main articles={ this.state.articles } onSearch={ this.getNews }/>
      </div>
    );
  }
}

export default App;

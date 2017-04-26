import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import ArticleTitle from './ArticleTitle.js';
import FeedTitle from './FeedTitle.js';
import ArticleBody from './ArticleBody.js';

export default class Article extends Component {
  state = {};

  componentWillMount () {
    const uri = `https://api.feedreader.co/v1/articles/${this.props.id}`;
    fetch(uri).then(res => res.json())
      .then(({ article }) => this.setState({ article }));
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <ArticleTitle article={this.state.article} />
        <FeedTitle article={this.state.article} />
        <ArticleBody id={this.props.id} />
      </View>
    );
  }
}

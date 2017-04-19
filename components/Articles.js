import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Settings,
  Text,
  View
} from 'react-native';
import Article from './Article';
import api from '../api';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  updateState({ articles }) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ dataSource: ds.cloneWithRows(articles) });
  }

  componentWillMount () {
    const token = Settings.get('token');
    const username = Settings.get('username');
    const lib = api(username, token);
    if (this.props.page === 'Reading List') {
      lib.user.labels.get('reading-list').then(this.updateState);
    } else if (this.props.page === 'Favorites') {
      lib.user.labels.get('favorites').then(this.updateState);
    } else {
      lib.user.feeds.get().then(this.updateState);
    }
  }

  render() {
    if (!this.state) return <ActivityIndicator />;
    return <View>
      <Text>{this.state.message}</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={id => <Article id={id}/>}
      />
    </View>;
  }
}

import React from 'react';
import styled from 'styled-components/native';
import articleTitle from '../styles/articleTitle';

const Title = styled.Text`${articleTitle}`;
const Loading = styled.View`
  background-color: grey;
`;

export default ({ article }) => {
  if (!article) {
    return <Loading />;
  }
  return <Title>{article.title}</Title>;
}

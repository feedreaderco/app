import React from 'react';
import styled from 'styled-components/native';
import feedTitle from '../styles/feedTitle';

const Title = styled.Text`${feedTitle}`;
const Loading = styled.View`
  background-color: grey;
`;

export default ({ article }) => {
  if (!article) return <Loading />;
  return <Title>{article.meta.title}</Title>;
}

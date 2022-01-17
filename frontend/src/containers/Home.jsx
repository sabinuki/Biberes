import React, { Fragment } from 'react';
import styled from 'styled-components';
import DiagnosesButton from '../components/Buttons/DiagnosesButton.jsx';

const Body = styled.div`
  text-align: center;
`;

export const Home = () => {
  return (
    <Fragment>
      <Body>
        <p>好みを選択するだけであなたにおすすめのビアスタイルを提案いたします。</p>
        <p>今すぐあなたに合うビアスタイルを探してみましょう！</p>
        <DiagnosesButton />
      </Body>
    </Fragment>
  )
}

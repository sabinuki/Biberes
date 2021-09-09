import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import DiagnosesButton from '../components/Buttons/DiagnosesButton.jsx';

const Body = styled.div`
  text-align: center;
`;

export const Diagnoses = () => {
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

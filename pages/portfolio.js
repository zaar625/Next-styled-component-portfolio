import React from 'react';
import Project from '../components/project/project';
import styled from 'styled-components';
import Header from '../components/header/header';
import Head from 'next/head';

const PortfolioContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>이상윤 포트폴리오 | Portfolio</title>
      </Head>
      <Header item={['차근차근 배우며 성장한 저의 모습을 보실 수 있습니다.']}/>
      <PortfolioContainer>
        <Project/>
      </PortfolioContainer>
    </>

  )
}

export default Portfolio
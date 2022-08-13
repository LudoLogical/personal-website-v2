// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Wrapper from '../components/wrapper';
import StyledLink from '../components/styled-link';

const Singing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Singing | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Singing'} />
        </div>
        <p className={'mt-6 mx-24 text-base-content/50'}>
          In his middle and high school years, Daniel received two consecutive nominations for Most Valuable
          Performer, as well as three consecutive years of &#39;Superior&#39; marks from either the&nbsp;
          <StyledLink href={'https://www.ncmea.net/'} text={'NCMEA'} /> or&nbsp;
          <StyledLink href={'https://www.calmusiced.com/'} text={'CMEA'} /> (the highest rating awarded by these
          organizations) alongside two distinct vocal groups. He also received a first-of-its-kind award for
          vocal leadership from former music director Jan Sterger Johnston. Since graduating from high school,
          he has become a member and valued officer of&nbsp;
          <StyledLink href={'https://novisutd.org/'} text={'Novis A Cappella'} />, the premiere
          a cappella group at the University of Texas at Dallas.
        </p>
      </Wrapper>
    </>
  )
}

export default Singing;

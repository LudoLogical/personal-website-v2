// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Wrapper from '../components/wrapper';
import StyledLink from '../components/styled-link';

const BeKind: NextPage = () => {
  return (
    <>
      <Head>
        <title>Be Kind | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <p className={'text-base-content/50 text-center text-2xl'}>Be kind,<br/>for everyone you meet<br/>is fighting a hard battle.</p>
        <p className={'text-center mt-4'}>- <StyledLink href={'https://en.wikipedia.org/wiki/Ian_Maclaren'} text={'Ian Maclaren'} /></p>
      </Wrapper>
    </>
  )
}

export default BeKind;

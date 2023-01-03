// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Wrapper from '../components/wrapper';
import {h2StylesFaded} from "../utils/constants";

const Ludology: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ludology | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Ludology'} />
        </div>
        <h2 className={h2StylesFaded}>This section of the site is coming soon!</h2>
      </Wrapper>
    </>
  )
}

export default Ludology;

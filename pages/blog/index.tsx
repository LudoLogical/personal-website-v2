// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../../components/top';
import Wrapper from '../../components/wrapper';
import StyledLink from '../../components/styled-link';
import {h2StylesFaded} from "../../utils/constants";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Blog'} />
        </div>
        <div className={'m-10'}>
          <h2 className={h2StylesFaded}>2023</h2>
        </div>
        <div className={'m-5'}>
          <h3 className={'text-lg font-bold text-center text-base-content/50'}><StyledLink href={''} text={'The LuDICE Awards 2023'} /></h3>
          <p className={'text-base-content/50 text-center'}>
            January 15, 2023
          </p>
        </div>
        <div className={'m-5'}>
          <h3 className={'text-lg font-bold text-center text-base-content/50'}><StyledLink href={''} text={'The LuDICE Awards 2023'} /></h3>
          <p className={'text-base-content/50 text-center'}>
            January 15, 2023
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default Blog;

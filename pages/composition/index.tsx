// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../../components/top';
import Link from "next/link";
import Wrapper from '../../components/wrapper';
import StyledLink from '../../components/styled-link';

import {compositionsInfo, h2StylesFaded, pStyles} from '../../utils/constants';

const Composition: NextPage = () => {
  return (
    <>
      <Head>
        <title>Composition | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Composition'} />
        </div>
        <p className={pStyles + ' text-center'}>
          Daniel has been composing music featuring a variety of voices and instruments for over seven years.<br/>
          You can explore and download some of his pieces via the links below, courtesy of&nbsp;
          <StyledLink href={'https://musescore.org/'} text={'MuseScore'} />.
        </p>
        <h2 className={h2StylesFaded}>Original Works</h2>
        <div className={'btn-group justify-center mt-6 mx-24'}>
          {compositionsInfo.originals.labels.map((label, index) => {
            return <Link key={index} href={'/composition/' + compositionsInfo.originals.destinationKeys[index]}>
              <button className={'btn btn-lg text-2xl'}>{label}</button>
            </Link>
          })}
        </div>
        <h2 className={h2StylesFaded}>Arrangements</h2>
        <div className={'btn-group justify-center mt-6 mx-24'}>
          {compositionsInfo.arrangements.labels.map((label, index) => {
            return <Link key={index} href={'/composition/' + compositionsInfo.arrangements.destinationKeys[index]}>
              <button className={'btn btn-lg text-2xl'}>{label}</button>
            </Link>
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default Composition;

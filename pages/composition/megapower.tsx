// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'
import ReactAudioPlayer from 'react-audio-player';

import Top from '../../components/top';
import Wrapper from '../../components/wrapper';

import {h2StylesFaded, megapowerInfo} from '../../utils/constants';
import {useState} from 'react';
import Link from 'next/link';
import StyledLink from "../../components/styled-link";

const MegaPower: NextPage = () => {

  const [tab, setTab] = useState(0);

  return (
    <>
      <Head>
        <title>{'MegaPower! | Daniel DeAnda'}</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'MegaPower!'} />
        </div>
        <h2 className={h2StylesFaded}>
          A collection of chip-tune melodies powered by&nbsp;
          <StyledLink href={'https://www.beepbox.co/'} text={'beepbox.co'} />.
        </h2>
        <div className={'tabs tabs-boxed justify-center w-fit mx-auto mb-7'}>
          {megapowerInfo.labels.map((label, index) => {
            return <a
              key={index}
              onClick={() => setTab(index)}
              className={'tab' + (index === tab ? ' tab-active' : '')}
            >
              {label}
            </a>;
          })}
        </div>
        <ReactAudioPlayer
          className={'mx-auto'}
          src={'/beepbox/' + megapowerInfo.destinationKeys[tab] + '.wav'}
          controls
        />
        <Link href={megapowerInfo.beepboxLinks[tab]}>
          <button className={'btn btn-secondary block mx-auto my-6'}>Beepbox.co Project</button>
        </Link>
      </Wrapper>
    </>
  )

}

export default MegaPower;
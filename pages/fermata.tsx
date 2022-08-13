// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

import Top from '../components/top';
import Wrapper from '../components/wrapper';

const h2Styles = 'm-5 text-2xl font-bold text-center text-base-content/50';

const Fermata: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fermata.js | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Fermata.js'} />
        </div>
        <h2 className={h2Styles}>
          Easy to learn. Unpacks in seconds. Adapts to any situation.<br/>
          A free, classy audio player for no-framework websites wherever you want it.
        </h2>
        <p className={'mx-24 text-base-content/50 text-center'}>
          All data is quickly rendered in a single JavaScript file, and a 10-second tutorial is included.<br/>
          One simple function opens the player, and it loads with only a few essential parameters.<br/>
          Personalization tools are available as settings and the player can be further styled with the use of unique player IDs.
        </p>
        <Link href={'/api/file?loc=fermata.js'}>
          <button className={'btn btn-primary block mx-auto my-6'}>Download Fermata.js</button>
        </Link>
        <p className={'mt-6 mx-24 text-base-content/50 text-center'}>
          Licensed under Creative Commons BY
        </p>
      </Wrapper>
    </>
  )
}

export default Fermata;

// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'
import ReactAudioPlayer from 'react-audio-player';

import Top from '../../components/top';
import Wrapper from '../../components/wrapper';

import {compositionsInfo, h2StylesFaded} from '../../utils/constants';
import {useRouter} from 'next/router';
import {useState} from 'react';
import Link from "next/link";

const tabs = ['Player', 'PDF', 'MuseScore'];

// 'getStaticPaths' requires using 'getStaticProps'
export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  let paths = [];
  for (const c in compositionsInfo.originals.destinationKeys) {
    if (compositionsInfo.originals.destinationKeys[c] !== 'megapower')
    paths.push({ params: { composition: compositionsInfo.originals.destinationKeys[c] } });
  }
  for (const c in compositionsInfo.arrangements.destinationKeys) {
    paths.push({ params: { composition: compositionsInfo.arrangements.destinationKeys[c] } });
  }
  return {
    paths: paths,
    fallback: false
  }
}

const ParticularComposition: NextPage = () => {

  const router = useRouter();
  const destinationKey = router.query.composition as string;
  const isOriginal = compositionsInfo.originals.destinationKeys.includes(destinationKey);
  const index = isOriginal
    ? compositionsInfo.originals.destinationKeys.indexOf(destinationKey)
    : compositionsInfo.arrangements.destinationKeys.indexOf(destinationKey);
  const name: string = isOriginal
    ? compositionsInfo.originals.labels[index]
    : compositionsInfo.arrangements.labels[index];
  const description = isOriginal
    ? compositionsInfo.originals.descriptions[index]
    : compositionsInfo.arrangements.descriptions[index];

  const [tab, setTab] = useState(0);

  return (
    <>
      <Head>
        <title>{name + ' | Daniel DeAnda'}</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={name} />
        </div>
        <h2 className={h2StylesFaded}>{description}</h2>
        <div className={'tabs tabs-boxed w-fit mx-auto mb-7'}>
          {tabs.map((t, i) => {
            return <a
              key={i}
              onClick={() => setTab(i)}
              className={'tab tab-lg' + (i === tab ? ' tab-active' : '')}
            >
              {tabs[i]}
            </a>;
          })}
        </div>
        {tab === 0 && (
          <ReactAudioPlayer
            className={'mx-auto'}
            src={'/audio/' + destinationKey + '.mp3'}
            controls
          />
        )}
        {tab === 1 && (
          <embed className={'mx-auto'} src={'/pdf/' + destinationKey + '.pdf'} width={850} height={850} />
        )}
        {tab === 2 && (
          <Link href={'/api/file?loc=musescore/' + destinationKey + '.mscz'}>
            <button className={'btn btn-secondary block mx-auto my-6'}>Download MuseScore File</button>
          </Link>
        )}
      </Wrapper>
    </>
  )

}

export default ParticularComposition;
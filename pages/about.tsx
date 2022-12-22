// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Link from "next/link";
import Wrapper from '../components/wrapper';

const labels = ['Academics', 'Programming', 'Singing', 'Composition', 'Ludology'];
const destinations = ['/academics', '/programming', '/singing', '/composition', '/ludology'];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'About'} />
        </div>
        <p className={'mt-6 mx-24 text-base-content/50 text-center'}>
          Daniel &quot;Ludo&quot; DeAnda is a 22-year-old American software engineer, musician, and ludologist. <br/>
          He was born and raised in North Carolina before moving to California at the start of <br/>
          his  high school career, where he resides when college is not in session.
        </p>
        <div className={'btn-group justify-center mt-6 mx-24'}>
          {labels.map((label, index) => {
            return <Link key={index} href={destinations[index]}>
              <button className={'btn btn-lg text-2xl'}>{label}</button>
            </Link>
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default About;

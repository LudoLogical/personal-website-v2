// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import Top from '../components/top';
import Wrapper from '../components/wrapper';

import email from '../public/img/email.png';
import linkedin from '../public/img/linkedin.png';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Contact'} />
        </div>
        <table className={'mt-8 mx-auto'}>
          <tbody>
          <tr>
            <td className={'h-[150px] p-0 pb-2'}>
              <Image src={email} alt={'E-Mail'} width={'150px'} height={'150px'} />
            </td>
            <td className={'h-[150px] flex flex-col justify-evenly align-middle pl-5'}>
              <Link href={'mailto:hello@danieldeanda.tech'}>
                <button className={'btn text-2xl font-bold'}>hello@danieldeanda.tech</button>
              </Link>
              <Link href={'mailto:ludology@danieldeanda.tech'}>
                <button className={'btn text-2xl font-bold'}>ludology@danieldeanda.tech</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className={'h-[150px] p-0 pb-2'}>
              <Image src={linkedin} alt={'LinkedIn'} width={'150px'} height={'150px'} />
            </td>
            <td className={'h-[150px] flex flex-col justify-evenly align-middle pl-5'}>
              <Link href={'https://www.linkedin.com/in/danielchristiandeanda/'}>
                <button className={'btn text-2xl font-bold'}>/in/danielchristiandeanda/</button>
              </Link>
            </td>
          </tr>
          </tbody>
        </table>
      </Wrapper>
    </>
  )
}

export default About;

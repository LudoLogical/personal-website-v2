// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Top from '../components/top';
import Wrapper from '../components/wrapper';

import photo from '../public/img/photo.png';
import character from '../public/img/character.png';
import logo from '../public/img/logo.png';
import Link from "next/link";

const images = [photo, character, logo];
const imageAlts = ['Photo', 'Character', 'Logo'];
const adjectives = ['Honors', 'Talented', 'Experienced', 'Creative', 'Seasoned', 'And Other'];
const nouns = ['Student', 'Programmer', 'Vocalist', 'Composer', 'Ludologist', 'Lovely Things'];
const nounLinks = ['/academics', '/programming', '/singing', '/composition', '/ludology', '/be-kind'];

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Daniel DeAnda'} />
        </div>
        <table className={'mx-auto mt-8'}>
          <tbody>
          {images.map((image, index) => {
            return <tr key={imageAlts[index]}>
              <td className={'h-[150px] p-0 pb-1'}>
                <Image src={image} alt={imageAlts[index]} width={'150px'} height={'150px'} />
              </td>
              <td className={'h-[150px] flex flex-col justify-evenly align-middle pl-5'}>
                {[0, 1].map(mod => {
                  return <div key={mod} className={'flex items-center'}>
                    <h2 className={'text-2xl font-bold text-base-content/50 mr-3'}>{adjectives[index * 2 + mod]}</h2>
                    <Link href={nounLinks[index * 2 + mod]}>
                      <button className={'btn text-2xl font-bold'}>{nouns[index * 2 + mod]}</button>
                    </Link>
                  </div>
                })}
              </td>
            </tr>
          })}
          </tbody>
        </table>
        <p className={'text-center text-base-content/50 mt-5'}>	&#169; 2017-2022</p>
      </Wrapper>
    </>
  )
}

export default Index;

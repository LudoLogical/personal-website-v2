// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Wrapper from '../components/wrapper';
import StyledLink from '../components/styled-link';
import {pStyles} from "../utils/constants";

const Academics: NextPage = () => {
  return (
    <>
      <Head>
        <title>Academics | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Academics'} />
        </div>
        <p className={pStyles}>
          Daniel is currently in his Senior year of college as a multi-honors student at the&nbsp;
          <StyledLink href={'https://utdallas.edu/'} text={'University of Texas at Dallas'} /> (GPA: 3.99).
          He has maintained a straight A record since his 6th grade year and has received recognition in
          various forms for his academic excellence, including:
        </p>
        <p className={pStyles + ' text-center'}>
          (As of May 15th, 2023) Graduation with Summa Cum Laude status from&nbsp;
          <StyledLink href={'https://utdallas.edu/'} text={'University of Texas at Dallas'} /><br/><br/>
          (As of May 15th, 2023) Graduation with&nbsp;
          <StyledLink href={'https://honors.utdallas.edu/cv'} text={'Collegium V'} /> honors from&nbsp;
          <StyledLink href={'https://utdallas.edu/'} text={'University of Texas at Dallas'} /><br/><br/>
          (As of May 12th, 2023) Graduation with&nbsp;
          <StyledLink href={'https://cs.utdallas.edu/computingscholars/'} text={'CS^2'} /> honors from&nbsp;
          <StyledLink href={'https://utdallas.edu/'} text={'University of Texas at Dallas'} /><br/><br/>
          Graduation as a Valedictorian from&nbsp;
          <StyledLink href={'https://hhs.fuhsd.org/'} text={'Homestead High School'} /> in Cupertino, CA<br/><br/>
          National Merit Scholar status (as bestowed by&nbsp;
          <StyledLink href={'https://www.collegeboard.org/'} text={'The College Board'} />)<br/><br/>
          An award from Duke University for an exceptional performance on the&nbsp;
          <StyledLink href={'https://www.act.org/'} text={'ACT'} /> in 7th grade <br/><br/>
          Membership with Duke University&#39;s&nbsp;
          <StyledLink href={'https://tip.duke.edu/'} text={'TIP'} /> program in both 4th and 7th grade
        </p>
      </Wrapper>
    </>
  )
}

export default Academics;

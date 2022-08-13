// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Wrapper from '../components/wrapper';
import StyledLink from '../components/styled-link';

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
        <p className={'mt-6 mx-24 text-base-content/50'}>
          Daniel is currently in his Senior year of college as a&nbsp;
          <StyledLink href={'https://honors.utdallas.edu/cv'} text={'Collegium V'} /> and&nbsp;
          <StyledLink href={'https://cs.utdallas.edu/computingscholars/'} text={'CS^2'} /> Honors Student at the&nbsp;
          <StyledLink href={'https://utdallas.edu/'} text={'University of Texas at Dallas'} /> (GPA: 4.00).
          He has maintained a straight A record since his 6th grade year and has received recognition in
          various forms for his academic excellence, including:
        </p>
        <p className={'mt-6 mx-24 text-base-content/50 text-center'}>
          Membership with Duke University&#39;s&nbsp;
          <StyledLink href={'https://tip.duke.edu/'} text={'TIP'} /> program in both 4th and 7th grade <br/><br/>
          An award from Duke University for an exceptional performance on the&nbsp;
          <StyledLink href={'https://www.act.org/'} text={'ACT'} /> in 7th grade <br/><br/>
          National Merit Scholar status (as bestowed by&nbsp;
          <StyledLink href={'https://www.collegeboard.org/'} text={'The College Board'} />)<br/><br/>
          Graduation as a Valedictorian from&nbsp;
          <StyledLink href={'https://hhs.fuhsd.org/'} text={'Homestead High School'} /> in Cupertino, CA
        </p>
      </Wrapper>
    </>
  )
}

export default Academics;

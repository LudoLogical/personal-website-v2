// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Wrapper from '../components/wrapper';
import StyledLink from '../components/styled-link';
import {pStyles} from "../utils/constants";

const Contributions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contributions | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Contributions'} />
        </div>
        <p className={pStyles}>
          Daniel has contributed to various GitHub repositories that he did not create, including: <br/><br/>
          <StyledLink href={'https://github.com/jcwang111/quotemaker'} text={'QuoteMaker'} /> (repository created by <StyledLink href={'https://github.com/jcwang111'} text={'jcwang111'} />)<br/><br/>
          <StyledLink href={'https://github.com/anke-hao/PeopleSV'} text={'PeopleSV'} /> (repository created by <StyledLink href={'https://github.com/anke-hao'} text={'anke-hao'} />)<br/><br/>
          <StyledLink href={'https://github.com/NovisACappella/novisacappella.github.io'} text={'Novis A Cappella'} /> (repository created for the organization <StyledLink href={'https://github.com/NovisACappella'} text={'Novis A Cappella'} />)<br/><br/>
          Daniel has also worked on a research project for the University of Texas at Dallas under the direction of Dr. Ravi Prakash; more details are available upon request.
        </p>
      </Wrapper>
    </>
  )
}

export default Contributions;

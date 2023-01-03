// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../../components/top';
import Wrapper from '../../components/wrapper';

import {useRouter} from 'next/router';
import BlogPost from "../../types/blogPost";
import {nameAll} from "../../utils/posts";
import {useEffect, useState} from "react";
import {h2Styles, h2StylesFaded, pStyles} from "../../utils/constants";

// 'getStaticPaths' requires using 'getStaticProps'
export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  let paths: object[] = [];
  nameAll().forEach((name) => {
    paths.push({ params: { post: name } });
  });
  return {
    paths: paths,
    fallback: false
  }
}

const fetchContent = async (postName: string) => {
  try {
    const res = await fetch('/api/post?name=' + postName);
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const BlogPost: NextPage = () => {

  const router = useRouter();
  const postName = router.query.post as string;
  const [postContent, setPostContent] = useState<BlogPost | undefined>(undefined);

  useEffect(() => {
    fetchContent(postName).then((content) => {setPostContent(content)});
  }, [postName]);

  return (
    <>
      <Head>
        <title>{postContent ? postContent.title : 'Loading...'}</title>
      </Head>
      <Wrapper>
        {postContent ? (<>
          <div className={'flex flex-col justify-center'}>
            <Top mainText={'Blog'} />
          </div>
          <div className={'m-10'}>
            <h2 className={h2Styles}>{postContent.title}</h2>
          </div>
          <p className={pStyles}>{postContent.content}</p>
        </>) : (
          <h2 className={h2StylesFaded}>Loading...</h2>
        )}
      </Wrapper>
    </>
  )

}

export default BlogPost;
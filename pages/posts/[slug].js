import Head from 'next/head';
import React from 'react';
import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostsFiles, getPostData } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export function getStaticProps(context) {
  const {params} = context;
  const {slug} = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slug = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slug.map(slug => ({ params: {slug: slug} })),
    fallback: false
  }
}

export default PostDetailPage;
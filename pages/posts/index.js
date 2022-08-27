import Head from 'next/head';
import React from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {

  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }

}

export default AllPostPage;
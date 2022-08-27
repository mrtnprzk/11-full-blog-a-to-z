import Head from 'next/head';
import React from 'react';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';
import { getFeaturedPosts } from '../lib/posts-util';


const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Parez Blog</title>
        <meta name="description" content="I post about everything..."/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}

export default HomePage;
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Santiago, Reanne; I’m 20 yrs old turning 21 this august. My hobbies are sports
and online game. My favourite music are green tea and honey and songs by jeff bernat and
Keenan Te. Favorite food is any kind of seafood and vegetables. And I am a bisexual, and
introvert person, I like being alone most of the time I like to spend my time alone rather than
being outside. Most of the time I am watching some movies or youtube or playing online
games.</p>
      </section>
    </Layout>
  );
}
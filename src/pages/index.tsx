import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Date from "../../components/date"
import { GetServerSideProps } from "next";


export default function Home({ allPostsData }:{allPostsData:{date:string, title: string, id: string}[]}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi i'm a programer in <a href="https://orcsoft.co.th/">Orcsoft</a>{" "}
          company. Now I learn new programing languaes it's Next.js. Next.js is
          React fram work
        </p>
        <p>
          (This is a smaple websinte - you'll be duilding a sinte like this on{" "}
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Link href="/posts/first-post">go to first Page</Link>
    </Layout>
  );
}

export const getStaticProps:GetServerSideProps = async () => {
  const allPostsData = getSortedPostsData()
  return{
    props:{
      allPostsData
    }
  }
  
}
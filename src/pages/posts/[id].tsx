import Layout from "../../../components/layout";
import { getAllPostIds, getPostdata } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({ postData }:{postData:{title:string ,date:string ,contentHtml:string,id:string}}) {
    console.log("Log from post method");
    return (
        <Layout>
            {/* Add this <Head> tag */}
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    {postData.id}
                    {/* Replace {postData.date} with this */}
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>ß
            </article>
        </Layout>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    console.log("Log from getStaticPaths method")
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log("Log from getStaticProps method");
    console.log("id : " + params?.id as string);

    const postData = await getPostdata(params?.id as string)
    return{
        props:{
            postData
        }
    }
}

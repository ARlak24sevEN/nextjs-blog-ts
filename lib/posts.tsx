import fs from 'fs'
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

// fs is a Node.js module that let's you read files from the file system.
// path is a Node.js module that let's you manipulate file paths.
// matter is a library that let's you parse the metadata in each markdown file.

const postsDirectory = path.join(process.cwd(), "posts")
console.log("test");
console.log("postsDirectory" + postsDirectory);
export function getSortedPostsData() {
  //get fiel names under /posts

  //const fileNames = fs.readdirSync(postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")
    console.log(id);

    //Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    //Use gray-amtter to parse the post metadata section
    const matterResult = matter(fileContents);


    // Combine the data witih the id
    return {
      id,
      ...(matterResult.data as {date: string; title: string}),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// if import data from api can do like this
export async function getDataFromApi() {
  // Instead of the file system,
  //fetch post data from an external API endpoint
  const res = await fetch("... like url");
  return res.json();
}

// or you want to get data from datasource
// first time you import someDatabaseSDK from 'someDatabaseSDK'
//import someDatabaseSDK from 'someDatabaseSDK'
// const databaseClient = someDatabaseSDK.createClient(...d);
// export async function getDataFromDataSource(){
//     // instead of the file system,
//     // fetch post data from a  data base
//     return databaseClient.query('Select post...')
// }

export function getAllPostIds() {
  console.log('Log from getAllPostIds method')
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostdata(id:string) {
  console.log('Log from getPostdata method')
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContnt = await remark()
  .use(html)
  .process(matterResult.content);

  const contentHtml = processedContnt.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
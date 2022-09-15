import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  var articlesquery = {
    method: 'GET',
    url: 'https://dev.to/api/articles?username=tejasness'
  };

  const [articles, setArticles] = useState([]);

  axios.request(articlesquery).then(function (response) {
    articles == "" && setArticles(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div>
      <Head>
        <title>Tejas Chaudhari</title>
        <meta name="description" content="Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Chango&family=Dela+Gothic+One&display=swap" rel="stylesheet" />
      </Head>
      <div className="p-6 mx-auto w-max sm:mx-0 font-chango text-5xl text-slate-800 drop-shadow-md">@tejasness</div>
      <div className="mt-10 mx-10 font-delaGothicOne text-2xl text-amber-900">My published articles on dev.to</div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 divide-y-2 p-10">
        {articles.map((article) => {
          return (
            <div key={article.slug} className="cursor-pointer lg:col-span-3 md:col-span-3 sm:col-span-3 font-medium py-8 grid sm:grid-cols-4 grid-cols-1">
              <div className="col-span-2">
                <a href={article.url} target="_blank" rel="noreferrer"><img href={article.url} src={article.cover_image} className="rounded-lg sm:h-44" /></a>

              </div>
              <div className="sm:col-span-2 ml-6 sm:my-auto mt-6">
                <a href={article.url} target="_blank" rel="noreferrer" className="text-lg">{article.title}</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

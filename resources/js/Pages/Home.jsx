import ArticleCard from '@/Components/ArticleCard';
import ArticleItem from '@/Components/ArticleItem';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';

const Index = ({ auth, errors, articles }) => {
  return (
    <Authenticated
      auth={auth}
      errors={errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          اخبار
        </h2>
      }>
      <Head title="اخبار" />
      <div className="py-8 sm:py-12">
        <div className="container xl:max-w-7xl mx-auto sm:px-6 lg:px-8 bg-gray-200 grid grid-cols-4 gap-0 gap-y-4 md:gap-x-2 lg:gap-x-4">
          <main className="bg-gray-300 col-span-4 md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
              {articles.map(a => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  showDescription
                  showImage
                  cardClassName="flex flex-row sm:flex-col"
                />
              ))}
            </div>
          </main>
          <aside className="bg-gray-200 px-1 col-span-4 md:col-span-1">
            <header className="flex flex-row items-center">
              <div className="h-[2px] w-4 bg-black ml-2"></div>
              <h2 className="font-bold text-base">آخرین اخبار</h2>
              <div className="h-[2px] flex-1 bg-black mr-2"></div>
            </header>
            <ul>
              {articles.map(a => (
                <li>
                  <Link href={route('articles.show', { article: a.id })}>
                    <ArticleItem key={a.id} article={a} />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Authenticated>
  );
};

export default Index;

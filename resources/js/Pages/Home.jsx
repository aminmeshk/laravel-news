import ArticleCard from '@/Components/ArticleCard';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
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
      <div className="py-12">
        <div className="container xl:max-w-7xl mx-auto sm:px-6 lg:px-8 bg-gray-200 grid grid-cols-4 gap-0 gap-y-4 md:gap-x-2 lg:gap-x-4">
          <main className="bg-gray-400 col-span-4 md:col-span-3">
            <div className="flex flex-col sm:flex-row flex-wrap">
              {articles.map(a => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </main>
          <aside className="bg-gray-400 px-1 col-span-4 md:col-span-1">
            <ul className="text-sm">
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
              <li className="py-2 bg-red-400 my-1">خبر خیلی مهم</li>
            </ul>
          </aside>
        </div>
      </div>
    </Authenticated>
  );
};

export default Index;

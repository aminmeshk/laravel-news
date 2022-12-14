import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';

const Show = ({ article, auth, errors }) => {
  const onDelete = () => {};

  return (
    <Authenticated
      auth={auth}
      errors={errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          نمایش خبر
        </h2>
      }>
      <Head title="خبر" />
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">{article.title}</h2>
        <p className="text-md">{article.content}</p>
        <Link
          as="button"
          href={route('articles.destroy', { article: article.id })}
          method="delete">
          پاک کردن
        </Link>
      </div>
    </Authenticated>
  );
};

export default Show;

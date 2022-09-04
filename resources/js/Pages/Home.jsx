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
      <div className="flex flex-col">
        {articles.map(a => (
          <div key={a.id}>
            <div>{a.title}</div>
            <div className="text-xs text-gray-400 mb-4">{a.content}</div>
          </div>
        ))}
      </div>
    </Authenticated>
  );
};

export default Index;

import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import React, { useCallback } from 'react';

const Create = ({ auth, errors, article }) => {
  const { data, setData, put, processing } = useForm({
    title: article.title,
    content: article.content,
  });

  const onHandleChange = event => {
    setData(event.target.name, event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    put(route('articles.update', { article: article.id }));
  };

  return (
    <Authenticated
      auth={auth}
      errors={errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          ویرایش خبر
        </h2>
      }>
      <Head title="خبر" />
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <Input
            name="title"
            className="text-lg"
            value={data.title}
            handleChange={onHandleChange}
          />
          <Input
            name="content"
            className="text-md"
            value={data.content}
            handleChange={onHandleChange}
          />
          <Button processing={processing}>ثبت</Button>
        </div>
      </form>
    </Authenticated>
  );
};

export default Create;

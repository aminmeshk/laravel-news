import Input from '@/Components/Input';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import React from 'react';

const Create = ({ auth, errors }) => {
  const { data, setData } = useForm({
    title: '',
    content: '',
  });

  const onHandleChange = event => {
    setData(event.target.name, event.target.value);
  };

  return (
    <Authenticated
      auth={auth}
      errors={errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          ساختن خبر
        </h2>
      }>
      <Head title="خبر" />
      <div className="flex flex-col">
        <Input
          name="title"
          className="text-lg"
          value={data.title}
          handleChange={onHandleChange}
        />
        <Input
          className="text-md"
          value={data.content}
          handleChange={onHandleChange}
        />
      </div>
    </Authenticated>
  );
};

export default Create;

import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <div className="py-2 hover:bg-gray-300 flex flex-row rounded-md transition ease-in-out duration-500">
      <div className="rounded-full w-9 h-9 bg-gray-300 aspect-square flex flex-col justify-center items-center self-start">
        <span className="text-xs leading-[.5rem] opacity-60">۱۸</span>
        <span className="text-[0.5rem] leading-3 text-center font-light opacity-60">دقیقه قبل</span>
      </div>
      <span className="text-xs self-center mr-2">{article.title}</span>
    </div>
  );
};

export default ArticleItem;

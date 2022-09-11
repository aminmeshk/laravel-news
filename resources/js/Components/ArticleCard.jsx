import React from 'react';

const ArticleCard = ({ article }) => {
  const { title, content } = article;
  const description = content.substring(0, 150) + '...';
  return (
    <div className="flex flex-col space-y-1 sm:w-[33.33333%] md:w-[25%] lg:w-[20%] p-2">
      <p className="font-bold text-lg">{title}</p>
      <p className="font-medium text-md">{description}</p>
    </div>
  );
};

export default ArticleCard;

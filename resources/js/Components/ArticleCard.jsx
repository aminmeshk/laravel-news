import React from 'react';

const ArticleCard = ({
  article,
  showDescription = false,
  showImage = false,
  horizontal = false,
  imageClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  dividerClassName = '',
  cardClassName = '',
}) => {
  const { title, content } = article;
  const description = content.substring(0, 50) + '...';
  return (
    <div
      className={`overflow-hidden bg-white rounded-md shadow-md ${cardClassName}`}>
      {showImage && (
        <img
          src="https://via.placeholder.com/300x200/404040/FFFFFF"
          alt="placeholder"
          className={`max-w-[35%] sm:max-w-full sm:w-full object-cover ${imageClassName}`}
        />
      )}
      <div
        className={`sm:h-1 sm:w-full w-1 h-full bg-red-500 ${dividerClassName}`}
      />
      <div className={`flex-1 flex flex-col space-y-1 p-2`}>
        <p className={`font-bold text-sm sm:text-base ${titleClassName}`}>
          {title}
        </p>
        {showDescription && (
          <p className={`text-xs sm:text-sm ${descriptionClassName}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;

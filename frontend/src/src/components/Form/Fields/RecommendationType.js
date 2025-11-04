import React from 'react';

function RecommendationType({ onRecommendationTypeChange }) {
  const handleChange = (e) => {
    if (onRecommendationTypeChange) {
      onRecommendationTypeChange(e.target.value);
    }
  };

  return (
    <div className="mb-3 sm:mb-4">
      <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Tipo de Recomendação:</h2>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <label htmlFor="SingleProduct" className="flex items-center text-sm sm:text-base cursor-pointer hover:bg-gray-50 rounded p-1 -m-1">
          <input
            type="radio"
            id="SingleProduct"
            name="recommendationType"
            value="SingleProduct"
            onChange={handleChange}
            className="h-4 w-4 sm:h-5 sm:w-5 border-gray-300 cursor-pointer flex-shrink-0 mr-2 bg-white"
            style={{ accentColor: '#0073E6' }}
          />
          Produto Único
        </label>
        <label htmlFor="MultipleProducts" className="flex items-center text-sm sm:text-base cursor-pointer hover:bg-gray-50 rounded p-1 -m-1">
          <input
            type="radio"
            id="MultipleProducts"
            name="recommendationType"
            value="MultipleProducts"
            onChange={handleChange}
            className="h-4 w-4 sm:h-5 sm:w-5 border-gray-300 cursor-pointer flex-shrink-0 mr-2 bg-white"
            style={{ accentColor: '#0073E6' }}
          />
          Múltiplos Produtos
        </label>
      </div>
    </div>
  );
}

export default RecommendationType;

import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div className="p-3 sm:p-4">
      <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && (
        <p className="text-sm sm:text-base text-gray-600">Nenhuma recomendação encontrada.</p>
      )}

      <ul className="space-y-2 sm:space-y-3">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="text-sm sm:text-base p-2 sm:p-3 bg-gray-50 rounded border border-gray-200">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;

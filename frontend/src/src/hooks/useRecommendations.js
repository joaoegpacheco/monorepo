// useRecommendations.js

import recommendationService from '../services/recommendation.service';

function useRecommendations(products$) {
  // useComputed poderia ser usado aqui se products$ fosse usado diretamente
  // Mas como precisamos passar para o serviço, mantemos a função simples
  const getRecommendations = (formData) => {
    const products = products$?.get ? products$.get() : products$;
    return recommendationService.getRecommendations(formData, products);
  };

  return { getRecommendations };
}

export default useRecommendations;

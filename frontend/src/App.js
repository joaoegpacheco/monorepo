import React from 'react';
import { useObservable, useSelector } from '@legendapp/state/react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const recommendations$ = useObservable([]);

  /**
   * Atualiza a lista de recomendações quando o formulário é submetido
   */
  const handleRecommendationsChange = (newRecommendations) => {
    recommendations$.set(newRecommendations);
  };

  // useSelector torna o componente reativo automaticamente
  const recommendations = useSelector(() => recommendations$.get());

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-4 px-4 sm:py-6 sm:px-6 md:py-8 lg:py-12">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center px-4">
        Recomendador de Produtos RD Station
      </h1>
      <div className="bg-white w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl rounded-lg shadow-md p-4 sm:p-6 md:p-8">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div>
            <Form onRecommendationsChange={handleRecommendationsChange} />
          </div>
          <div>
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

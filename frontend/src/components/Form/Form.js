// Form.js

import React from 'react';
import { useSelector } from '@legendapp/state/react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsChange }) {
  const { preferences$, features$, products$ } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products$);

  // Calcula a validação diretamente usando useSelector para ser reativo
  const isFormValid = useSelector(() => {
    const preferences = formData.selectedPreferences.get();
    const features = formData.selectedFeatures.get();
    const recommendationType = formData.selectedRecommendationType.get();

    return (
      (preferences.length > 0 || features.length > 0) &&
      recommendationType !== ''
    );
  });

  // Usa useSelector para tornar o componente reativo aos dados
  const preferences = useSelector(() => preferences$?.get() || []);
  const features = useSelector(() => features$?.get() || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Converte o observable para objeto plano para passar ao serviço
    const formDataPlain = {
      selectedPreferences: formData.selectedPreferences.get(),
      selectedFeatures: formData.selectedFeatures.get(),
      selectedRecommendationType: formData.selectedRecommendationType.get(),
    };
    const dataRecommendations = getRecommendations(formDataPlain);

    // Atualiza as recomendações no componente pai
    if (onRecommendationsChange) {
      onRecommendationsChange(dataRecommendations);
    }
  };

  return (
    <form
      className="w-full p-3 sm:p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton
        text="Obter recomendação"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default Form;

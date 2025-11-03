// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsChange }) {
  const { preferences$, features$, products$ } = useProducts();
  const { formData, handleChange, isFormValid } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products$);

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
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences$.get()}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features$.get()}
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
        disabled={!isFormValid.get()} 
      />
    </form>
  );
}

export default Form;

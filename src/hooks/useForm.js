// useForm.js
import { useObservable, useComputed } from '@legendapp/state/react';

const useForm = (initialState) => {
  const formData$ = useObservable(initialState);

  const handleChange = (field, value) => {
    formData$[field].set(value);
  };

  // useComputed: cria um valor derivado que se atualiza automaticamente
  // Valida se o formulário tem pelo menos uma preferência ou feature selecionada
  const isFormValid$ = useComputed(() => {
    const preferences = formData$.selectedPreferences.get();
    const features = formData$.selectedFeatures.get();
    const recommendationType = formData$.selectedRecommendationType.get();
    
    return (
      (preferences.length > 0 || features.length > 0) &&
      recommendationType !== ''
    );
  });

  return { 
    formData: formData$, 
    handleChange,
    isFormValid: isFormValid$,
  };
};

export default useForm;

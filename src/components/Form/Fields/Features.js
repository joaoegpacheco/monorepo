import React from 'react';
import { useObservable, useSelector } from '@legendapp/state/react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const currentFeatures$ = useObservable(selectedFeatures || []);

  const handleFeatureChange = (e, feature) => {
    // Usa o estado checked do evento ao invés do estado atual
    const isChecked = e.target.checked;
    const current = currentFeatures$.get();

    const updatedFeatures = isChecked
      ? [...current.filter((pref) => pref !== feature), feature]
      : current.filter((pref) => pref !== feature);

    // Atualiza o estado local primeiro
    currentFeatures$.set(updatedFeatures);

    // Depois notifica o componente pai
    if (onFeatureChange) {
      onFeatureChange(updatedFeatures);
    }
  };

  // Usa useSelector para obter o estado atual de forma reativa
  const currentFeatures = useSelector(() => currentFeatures$.get());

  return (
    <div className="mb-3 sm:mb-4">
      <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Funcionalidades:</h2>
      <ul className="space-y-1 sm:space-y-2">
        {features.map((feature, index) => (
          <li key={index}>
            <Checkbox
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={(e) => handleFeatureChange(e, feature)}
              className="text-primary text-sm sm:text-base"
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;

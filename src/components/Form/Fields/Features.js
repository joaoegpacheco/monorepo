import React from 'react';
import { useObservable } from '@legendapp/state/react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const currentFeatures$ = useObservable(selectedFeatures);

  const handleFeatureChange = (feature) => {
    const current = currentFeatures$.get();
    const updatedFeatures = current.includes(feature)
      ? current.filter((pref) => pref !== feature)
      : [...current, feature];

    currentFeatures$.set(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={feature}
              checked={currentFeatures$.get().includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="text-green-500"
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

// Preferences.js

import React from 'react';
import { useObservable, useSelector } from '@legendapp/state/react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const currentPreferences$ = useObservable(selectedPreferences || []);

  const handlePreferenceChange = (e, preference) => {
    // Usa o estado checked do evento ao invés do estado atual
    const isChecked = e.target.checked;
    const current = currentPreferences$.get();

    const updatedPreferences = isChecked
      ? [...current.filter((pref) => pref !== preference), preference]
      : current.filter((pref) => pref !== preference);

    // Atualiza o estado local primeiro
    currentPreferences$.set(updatedPreferences);

    // Depois notifica o componente pai
    if (onPreferenceChange) {
      onPreferenceChange(updatedPreferences);
    }
  };

  // Usa useSelector para obter o estado atual de forma reativa
  const currentPreferences = useSelector(() => currentPreferences$.get());

  return (
    <div className="mb-3 sm:mb-4">
      <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Preferências:</h2>
      <ul className="space-y-1 sm:space-y-2">
        {preferences.map((preference, index) => (
          <li key={index}>
            <Checkbox
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={(e) => handlePreferenceChange(e, preference)}
              className="text-primary text-sm sm:text-base"
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;

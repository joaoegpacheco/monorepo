// Preferences.js

import React from 'react';
import { useObservable } from '@legendapp/state/react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const currentPreferences$ = useObservable(selectedPreferences);

  const handlePreferenceChange = (preference) => {
    const current = currentPreferences$.get();
    const updatedPreferences = current.includes(preference)
      ? current.filter((pref) => pref !== preference)
      : [...current, preference];

    currentPreferences$.set(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={preference}
              checked={currentPreferences$.get().includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="text-blue-500"
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

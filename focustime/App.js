import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/Focus';
import { spacing } from './src/utils/sizes';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject) => {
    setHistory([...history, subject]);
  };

  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={addFocusHistorySubjectWithState}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: spacing.xxxl,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
});

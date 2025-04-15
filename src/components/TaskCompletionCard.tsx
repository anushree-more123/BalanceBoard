// File: src/components/TaskCompletionCard.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {colors} from '../theme/colors'; // you already defined `neonBlue`, `white`, etc.

const TaskCompletionCard = () => {
  return (
    <View style={styles.card}>
      <AnimatedCircularProgress
        size={60}
        width={6}
        fill={76}
        tintColor="#FFFFFF"
        backgroundColor="rgba(255,255,255,0.2)"
        rotation={0}>
        {() => <Text style={styles.progressText}>76%</Text>}
      </AnimatedCircularProgress>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Overal Task Completion</Text>
        <Text style={styles.subtitle}>
          Achivement agains total calls targeted{'\n'}for the mont of September
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.neonBlue,
    borderRadius: 5,
    padding: 16,
    alignItems: 'center',
    marginVertical: 10,
  },
  progressText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#E0E4FF',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TaskCompletionCard;

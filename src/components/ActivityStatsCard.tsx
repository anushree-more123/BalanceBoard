import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/colors';

interface ActivityProps {
  title: string;
  count: number;
  isPositive: boolean;
  trend: number;
  avgText: string;
}

const ActivityStatsCard: React.FC<ActivityProps> = ({
  title,
  count,
  isPositive,
  trend,
  avgText,
}) => {
  const trendColor = isPositive ? colors.darkPastelGreen : colors.indianRed;
  const trendIcon = isPositive ? 'arrow-top-right' : 'arrow-bottom-left';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Text style={[styles.count, {color: trendColor}]}>{count}</Text>
        <Text style={[styles.callsLabel, {color: trendColor}]}> Calls</Text>
        <MaterialCommunityIcons
          name={trendIcon}
          size={14}
          color={trendColor}
          style={{marginLeft: 4}}
        />
        <Text style={[styles.trend, {color: trendColor}]}> {trend}%</Text>
      </View>
      <Text style={styles.avg}>{avgText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 16,
    elevation: 2,
  },
  title: {
    color: colors.persianBlue,
    fontWeight: '600',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  count: {
    fontSize: 20,
    fontWeight: '700',
  },
  callsLabel: {
    fontSize: 16,
  },
  trend: {
    fontSize: 14,
  },
  avg: {
    fontSize: 13,
    color: colors.cadet,
  },
});

export default ActivityStatsCard;

// File: src/components/ActivityChart.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

const ActivityChart = () => {
  const currentMonthData = [
    {value: 40},
    {value: 50},
    {value: 48},
    {value: 60},
    {value: 45},
    {value: 70},
    {value: 65},
  ];

  const previousMonthData = [
    {value: 50},
    {value: 60},
    {value: 55},
    {value: 65},
    {value: 60},
    {value: 80},
    {value: 75},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>September Activities</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, {backgroundColor: '#8E44AD'}]} />
          <Text style={styles.legendText}>Current Month</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, {backgroundColor: '#1ABC9C'}]} />
          <Text style={styles.legendText}>Previous Month</Text>
        </View>
      </View>

      <LineChart
        areaChart
        curved
        data={currentMonthData}
        data2={previousMonthData}
        thickness={2}
        color1="#8E44AD"
        color2="#1ABC9C"
        hideAxesAndRules
        hideDataPoints={false}
        showVerticalLines
        yAxisColor="transparent"
        xAxisColor="transparent"
        backgroundColor="transparent"
        noOfSections={4}
        maxValue={100}
        showXAxisIndices={false}
        startFillColor1="#8E44AD20"
        endFillColor1="#8E44AD05"
        startFillColor2="#1ABC9C20"
        endFillColor2="#1ABC9C05"
        spacing={40}
        height={180}
        initialSpacing={20}
        dataPointsColor1="#8E44AD"
        dataPointsColor2="#1ABC9C"
        dataPointsRadius={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 12,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#2F3BAD',
  },
  chevron: {
    fontSize: 18,
    color: '#566DFB',
  },
  legendContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 4,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
});

export default ActivityChart;

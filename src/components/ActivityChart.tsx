import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/colors';

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
  const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>September Activities</Text>
        <Icon
          name="chevron-right-circle-outline"
          size={24}
          color={colors.neonBlue}
        />
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
        curved
        data={currentMonthData}
        data2={previousMonthData}
        height={200}
        spacing={44}
        initialSpacing={0}
        color1={'#8E44AD'}
        color2={'#1ABC9C'}
        textColor1="green"
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
        hideDataPoints
        hideXAxisText
        hideYAxisText
        dataPointsHeight={20}
        dataPointsWidth={20}
        noOfSections={3}
        xAxisColor="transparent"
        yAxisColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
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
    color: '#A0ADBC',
  },
});

export default ActivityChart;

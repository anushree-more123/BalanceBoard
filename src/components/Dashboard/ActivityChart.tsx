import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme/colors';

const ActivityChart = () => {
  const currentMonthData = [
    {value: 5},
    {value: 16},
    {value: 8},
    {value: 20},
    {value: 15},
    {value: 20},
    {value: 10},
  ];

  const previousMonthData = [
    {value: 15},
    {value: 23},
    {value: 18},
    {value: 25},
    {value: 20},
    {value: 25},
    {value: 20},
  ];
  const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>September Activities</Text>
        <TouchableOpacity>
          <Icon
            name="chevron-right-circle-outline"
            size={25}
            color={colors.cadet}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, {backgroundColor: colors.purple}]} />
          <Text style={styles.legendText}>Current Month</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, {backgroundColor: colors.aquamarine}]} />
          <Text style={styles.legendText}>Previous Month</Text>
        </View>
      </View>
      <LineChart
        curved
        data={currentMonthData}
        data2={previousMonthData}
        height={150}
        spacing={44}
        initialSpacing={0}
        color1={colors.purple}
        color2={colors.aquamarine}
        textColor1="green"
        dataPointsColor1={colors.purple}
        dataPointsColor2={colors.aquamarine}
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
        hideDataPoints
        // hideXAxisText
        hideYAxisText
        dataPointsHeight={20}
        dataPointsWidth={20}
        noOfSections={5}
        xAxisColor="transparent"
        yAxisColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
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
    color: colors.persianBlue,
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
    color: colors.cadet,
  },
});

export default ActivityChart;

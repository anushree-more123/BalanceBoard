import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// @ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {status} from '../screens/Dashboard';

interface StatusCardCardProps {
  status: status;
}

const StatusCard: React.FC<StatusCardCardProps> = ({status}) => {
  return (
    <View style={[styles.card, {backgroundColor: status.bgColor}]}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{status.title}</Text>
          <Text style={styles.subtitle}>{status.subtitle}</Text>
        </View>
        <TouchableOpacity
          style={[styles.iconCircle, {backgroundColor: status.iconBg}]}>
          <FontAwesome5 name={status.icon} size={14} color={status.bgColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    width: 220,
    marginRight: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#E5E7EB',
    fontSize: 11,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusCard;

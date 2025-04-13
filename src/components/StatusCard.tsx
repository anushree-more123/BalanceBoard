import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome6';
import {status} from '../screens/Dashboard';
import {colors} from '../theme/colors';

interface StatusCardProps {
  status: status;
}

const StatusCard: React.FC<StatusCardProps> = ({status}) => {
  return (
    <View style={[styles.card, {backgroundColor: status.bgColor}]}>
      <View style={styles.rowTop}>
        <View style={styles.iconBadgeWrapper}>
          <View style={[styles.iconBadge, {backgroundColor: status.iconBg}]}>
            <Icon name={status.mainIcon} size={14} color={colors.white} />
          </View>
        </View>
        <Text style={styles.title}>{status.title}</Text>
      </View>

      <View style={styles.rowBottom}>
        <Text style={styles.subtitle}>{status.subtitle}</Text>
        <TouchableOpacity
          style={[styles.iconCircle, {backgroundColor: colors.white}]}>
          <Icon name={status.icon} size={14} color={status.bgColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    width: 240,
    marginRight: 12,
    justifyContent: 'space-between',
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBadgeWrapper: {
    marginRight: 12,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  rowBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    color: '#E5E7EB',
    fontSize: 11,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 10,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusCard;

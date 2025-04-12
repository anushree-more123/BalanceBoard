import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface InfoCardProps {
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
  iconBg: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  icon,
  bgColor,
  iconBg,
}) => {
  return (
    <View style={[styles.card, {backgroundColor: bgColor}]}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity
          style={[styles.iconCircle, {backgroundColor: iconBg}]}>
          <FontAwesome5 name={icon} size={14} color={bgColor} />
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

export default InfoCard;

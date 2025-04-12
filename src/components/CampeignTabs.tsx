// File: src/components/CampaignTabs.tsx

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {colors} from '../theme/colors';

const TABS = ['Recent', 'All Groups', 'Archived'];

const campaigns = [
  {
    title: 'Lead Generation Campaign',
    desc: 'Lorem ipsum dolor sit amet, consectetur...',
    completed: 343,
    pending: 368,
  },
  {
    title: 'Product Launch Marketing',
    desc: 'Lorem ipsum dolor sit amet, consectetur...',
    completed: 488,
    pending: 105,
  },
];

const CampaignTabs = () => {
  const [activeTab, setActiveTab] = useState('Recent');

  const renderTab = (label: string) => (
    <TouchableOpacity
      key={label}
      style={[styles.tabItem, activeTab === label && styles.activeTab]}
      onPress={() => setActiveTab(label)}>
      <Text
        style={[styles.tabText, activeTab === label && styles.activeTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderCard = ({item}: any) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.desc}</Text>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${
                (item.completed / (item.completed + item.pending)) * 100
              }%`,
            },
          ]}
        />
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.completed}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.pending}</Text>
          <Text style={[styles.statLabel, {color: colors.cadet}]}>Pending</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.tabContainer}>{TABS.map(renderTab)}</View>

      <FlatList
        data={campaigns}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  tabItem: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: colors.neonBlue,
  },
  tabText: {
    fontSize: 14,
    color: colors.violet,
  },
  activeTabText: {
    color: colors.white,
    fontWeight: '600',
  },
  card: {
    width: 260,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 10,
    elevation: 3,
  },
  cardTitle: {
    color: colors.persianBlue,
    fontWeight: '700',
    fontSize: 16,
  },
  cardDesc: {
    color: colors.cadet,
    fontSize: 12,
    marginTop: 4,
    marginBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#EEE',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 14,
  },
  progressFill: {
    backgroundColor: '#6B4EFF',
    height: '100%',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.persianBlue,
  },
  statLabel: {
    fontSize: 12,
    color: colors.violet,
    marginTop: 2,
  },
});

export default CampaignTabs;

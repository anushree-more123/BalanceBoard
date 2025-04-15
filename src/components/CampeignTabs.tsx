import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/colors';

const screenWidth = Dimensions.get('window').width;
const cardSpacing = 16;
const cardWidth = (screenWidth - cardSpacing * 3) / 2;

const tabs = ['Recent', 'All Groups', 'Archived'] as const;
type TabType = (typeof tabs)[number];

const campaigns = {
  Recent: [
    {
      title: 'Lead Generation Campaign',
      completed: 343,
      pending: 368,
    },
    {
      title: 'Product Launch Marketing',
      completed: 488,
      pending: 105,
    },
  ],
  'All Groups': [],
  Archived: [],
};

const CampeignTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Recent');
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.tabs}>
          {tabs.map(tab => {
            const isActive = activeTab === tab;
            const tabButton = (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={isActive ? {} : styles.tab}>
                <Text
                  style={[styles.tabText, isActive && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );

            return isActive ? (
              <LinearGradient
                key={tab}
                colors={[colors.neonBlue, colors.persianBlue]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.tab, styles.activeTab]}>
                {tabButton}
              </LinearGradient>
            ) : (
              tabButton
            );
          })}
        </View>
        <TouchableOpacity style={styles.rightIcon}>
          <Icon name="tune" size={22} color={colors.cadet} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={
          campaigns[activeTab].length > 0
            ? styles.cardGrid
            : styles.noDataContainer
        }>
        {campaigns[activeTab].length > 0 ? (
          campaigns[activeTab].map((item, index) => {
            const total = item.completed + item.pending;
            const percent = (item.completed / total) * 100;

            return (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>
                  Lorem ipsum dolor sit amet, consectetur..
                </Text>

                <View style={styles.progressBarBg}>
                  <LinearGradient
                    colors={[colors.persianBlue, colors.violet]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={[styles.progressBarFill, {width: `${percent}%`}]}
                  />
                </View>

                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.cardFooterValue}>{item.completed}</Text>
                    <Text style={styles.cardFooterLabel}>Completed</Text>
                  </View>
                  <View>
                    <Text style={styles.cardFooterValue}>{item.pending}</Text>
                    <Text style={styles.cardFooterLabel}>Pending</Text>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <Text style={styles.noData}>No data found.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTab: {
    borderRadius: 20,
  },
  tabText: {
    color: colors.cadet,
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    color: colors.white,
  },
  rightIcon: {
    padding: 6,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    width: cardWidth,
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  cardTitle: {
    color: colors.persianBlue,
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.cadet,
    marginBottom: 12,
  },
  progressBarBg: {
    backgroundColor: colors.ghostWhite,
    height: 4,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: 4,
    borderRadius: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooterValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.persianBlue,
    textAlign: 'center',
  },
  cardFooterLabel: {
    fontSize: 12,
    color: colors.cadet,
    textAlign: 'center',
  },
  noDataContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  noData: {
    textAlign: 'center',
    color: colors.cadet,
    fontSize: 16,
  },
});

export default CampeignTabs;

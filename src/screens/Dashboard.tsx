import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Header from '../components/Header';
import BottomTabComp from '../components/BottomTab';
import InfoCard from '../components/InfoCard';

const {width} = Dimensions.get('window');

const Dashboard = () => {
  const lineData = [
    {value: 30},
    {value: 50},
    {value: 40},
    {value: 60},
    {value: 80},
    {value: 70},
    {value: 90},
  ];

  const lineData2 = [
    {value: 20},
    {value: 40},
    {value: 25},
    {value: 55},
    {value: 65},
    {value: 60},
    {value: 75},
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 16}}>
        <InfoCard
          title="Tips on increasing your go forward"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          icon="play"
          bgColor="#4A6FE3"
          iconBg="#ffffff"
        />
        <InfoCard
          title="Weekly task has been completed!"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          icon="check"
          bgColor="#34D399"
          iconBg="#ffffff"
        />
      </ScrollView>

      <View style={styles.walletCard}>
        <Text style={styles.walletAmount}>$146.00</Text>
        <Text style={styles.walletLabel}>Wallet Balance</Text>
        <View style={styles.divider} />
        <View style={styles.walletInfoRow}>
          <View>
            <Text style={styles.walletInfo}>10th Jul, 2020</Text>
            <Text style={styles.walletInfoLabel}>Auto fill date</Text>
          </View>
          <View>
            <Text style={styles.walletInfo}>$20.00</Text>
            <Text style={styles.walletInfoLabel}>Auto fill amount</Text>
          </View>
        </View>
      </View>

      <View style={styles.activityRow}>
        <View style={styles.activityCard}>
          <Text style={styles.activityCountRed}>136 Calls</Text>
          <Text style={styles.activityChangeRed}>▼ 7.6%</Text>
          <Text style={styles.activityLabel}>Activities this week</Text>
          <Text style={styles.activitySub}>Avg. 26 calls per day</Text>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityCountGreen}>986 Calls</Text>
          <Text style={styles.activityChangeGreen}>▲ 10.6%</Text>
          <Text style={styles.activityLabel}>Activities this month</Text>
          <Text style={styles.activitySub}>Avg. 146 calls per week</Text>
        </View>
      </View>

      <View style={styles.progressCard}>
        <AnimatedCircularProgress
          size={60}
          width={6}
          fill={76}
          tintColor="#FFFFFF"
          backgroundColor="rgba(255,255,255,0.2)"
          rotation={0}>
          {(fill: any) => <Text style={styles.progressText}>76%</Text>}
        </AnimatedCircularProgress>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={styles.progressTitle}>Overal Task Completion</Text>
          <Text style={styles.progressSub}>
            Achievement against total calls targeted for the month of September
          </Text>
        </View>
      </View>

      <View style={styles.tabsRow}>
        <Text style={styles.tabActive}>Recent</Text>
        <Text style={styles.tab}>All Groups</Text>
        <Text style={styles.tab}>Archived</Text>
      </View>

      <View style={styles.campaignContainer}>
        <View style={styles.campaignCard}>
          <Text style={styles.campaignTitle}>Lead Generation Campaign</Text>
          <Text style={styles.campaignText}>Lorem ipsum dolor sit amet...</Text>
          <View style={styles.campaignStats}>
            <Text>343 Completed</Text>
            <Text>368 Pending</Text>
          </View>
        </View>
        <View style={styles.campaignCard}>
          <Text style={styles.campaignTitle}>Product Launch Marketing</Text>
          <Text style={styles.campaignText}>Lorem ipsum dolor sit amet...</Text>
          <View style={styles.campaignStats}>
            <Text>488 Completed</Text>
            <Text>105 Pending</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>September Activities</Text>
      <LineChart
        data={lineData}
        data2={lineData2}
        height={180}
        spacing={30}
        initialSpacing={10}
        color1="#4F46E5"
        color2="#9CA3AF"
        noOfSections={4}
        animateOnDataChange
        scrollToEnd
        thickness={2}
        hideRules
        showVerticalLines
      />

      <BottomTabComp />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F9FAFB', padding: 16},
  statusTipsContainer: {flexDirection: 'row', marginVertical: 16},
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
    width: width * 0.7,
  },
  tipText: {flex: 1, fontSize: 13, color: '#1F2937', marginRight: 10},
  walletCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  walletAmount: {fontSize: 28, fontWeight: 'bold', color: '#111827'},
  walletLabel: {fontSize: 14, color: '#6B7280'},
  divider: {height: 1, backgroundColor: '#E5E7EB', marginVertical: 12},
  walletInfoRow: {flexDirection: 'row', justifyContent: 'space-between'},
  walletInfo: {fontSize: 14, fontWeight: '600', color: '#1F2937'},
  walletInfoLabel: {fontSize: 12, color: '#6B7280'},
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activityCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 6,
  },
  activityCountRed: {fontSize: 16, fontWeight: '700', color: '#DC2626'},
  activityChangeRed: {fontSize: 13, color: '#DC2626'},
  activityCountGreen: {fontSize: 16, fontWeight: '700', color: '#16A34A'},
  activityChangeGreen: {fontSize: 13, color: '#16A34A'},
  activityLabel: {fontSize: 12, color: '#374151'},
  activitySub: {fontSize: 11, color: '#6B7280'},
  progressCard: {
    backgroundColor: '#4F46E5',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  progressText: {color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'},
  progressTitle: {color: '#FFFFFF', fontWeight: 'bold', fontSize: 14},
  progressSub: {color: '#E0E7FF', fontSize: 12, marginTop: 4},
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {fontSize: 14, color: '#9CA3AF'},
  tabActive: {fontSize: 14, fontWeight: 'bold', color: '#4F46E5'},
  campaignContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  campaignCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  campaignTitle: {fontSize: 14, fontWeight: 'bold', color: '#1F2937'},
  campaignText: {fontSize: 12, color: '#6B7280'},
  campaignStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
});

export default Dashboard;

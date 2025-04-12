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
import WalletCard from '../components/WalletCard';
import ActivityStatsCard from '../components/ActivityStatsCard';
import StatusCard from '../components/StatusCard';
import TaskCompletionCard from '../components/TaskCompletionCard';
import CampaignTabs from '../components/CampeignTabs';
import ActivityChart from '../components/ActivityChart';

export interface status {
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
  iconBg: string;
}

const {width} = Dimensions.get('window');

const Dashboard = () => {
  const StatusDetails: status[] = [
    {
      title: 'Tips on increasing your go forward',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur',
      icon: 'play',
      bgColor: '#4A6FE3',
      iconBg: '#ffffff',
    },
    {
      title: 'Weekly task has been completed!',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur',
      icon: 'check',
      bgColor: '#34D399',
      iconBg: '#ffffff',
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 16}}>
        {StatusDetails.map((status, index) => (
          <StatusCard key={index + 1} status={status} />
        ))}
      </ScrollView>

      <WalletCard />

      <View style={{flexDirection: 'row', gap: 10}}>
        <ActivityStatsCard
          title="Activities this week"
          count={136}
          isPositive={false}
          trend={-7.6}
          avgText="Avg. 26 calls per day"
        />

        <ActivityStatsCard
          title="Activities this month"
          count={986}
          isPositive={true}
          trend={10.6}
          avgText="Avg. 146 calls per week"
        />
      </View>

      <TaskCompletionCard />

      <CampaignTabs />
      <ActivityChart />
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

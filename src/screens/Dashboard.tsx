import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../components/Header';
import WalletCard from '../components/WalletCard';
import ActivityStatsCard from '../components/ActivityStatsCard';
import StatusCard from '../components/StatusCard';
import TaskCompletionCard from '../components/TaskCompletionCard';
import CampaignTabs from '../components/CampeignTabs';
import ActivityChart from '../components/ActivityChart';
import {colors} from '../theme/colors';

export interface status {
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
  iconBg: string;
  mainIcon: string;
}

const Dashboard = () => {
  const StatusDetails: status[] = [
    {
      title: 'Tips on increasing your go forward',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur',
      icon: 'play',
      bgColor: colors.neonBlue,
      iconBg: colors.persianBlue,
      mainIcon: 'bell',
    },
    {
      title: 'Weekly task has been completed!',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur',
      icon: 'square-check',
      bgColor: colors.aquamarine,
      iconBg: colors.darkPastelGreen,
      mainIcon: 'square-check',
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
  container: {flex: 1, backgroundColor: colors.ghostWhite, padding: 16},
});

export default Dashboard;

import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Common/Header';
import BalanceCard from '../components/Dashboard/BalanceCard';
import ActivityStatsCard from '../components/Dashboard/ActivityStatsCard';
import StatusCard from '../components/Dashboard/StatusCard';
import TaskCompletionCard from '../components/Dashboard/TaskCompletionCard';
import CampaignTabs from '../components/Dashboard/CampeignTabs';
import ActivityChart from '../components/Dashboard/ActivityChart';
import {colors} from '../theme/colors';
import {useDispatch} from 'react-redux';
import {fetchBalanceData} from '../components/Dashboard/DashboardAction';
import {AppDispatch} from '../store/store';
import AnimatedCard from '../components/Common/AnimatedCard';

export interface status {
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
  iconBg: string;
  mainIcon: string;
}
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

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBalanceData());
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 16}}>
        {StatusDetails.map((status, index) => (
          <AnimatedCard delay={300} key={index + 1}>
            <StatusCard status={status} />
          </AnimatedCard>
        ))}
      </ScrollView>
      <AnimatedCard delay={300}>
        <BalanceCard />
      </AnimatedCard>

      <View style={{flexDirection: 'row', gap: 10}}>
        <AnimatedCard delay={300}>
          <ActivityStatsCard
            title="Activities this week"
            count={136}
            isPositive={false}
            trend={-7.6}
            avgText="Avg. 26 calls per day"
          />
        </AnimatedCard>
        <AnimatedCard delay={300}>
          <ActivityStatsCard
            title="Activities this month"
            count={986}
            isPositive={true}
            trend={10.6}
            avgText="Avg. 146 calls per week"
          />
        </AnimatedCard>
      </View>
      <AnimatedCard delay={300}>
        <TaskCompletionCard />
      </AnimatedCard>
      <CampaignTabs />
      <AnimatedCard delay={300}>
        <ActivityChart />
      </AnimatedCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.ghostWhite, padding: 16},
});

export default Dashboard;

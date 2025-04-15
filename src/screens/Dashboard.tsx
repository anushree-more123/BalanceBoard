import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../components/Common/Header';
import WalletCard from '../components/Dashboard/WalletCard';
import ActivityStatsCard from '../components/Dashboard/ActivityStatsCard';
import StatusCard from '../components/Dashboard/StatusCard';
import TaskCompletionCard from '../components/Dashboard/TaskCompletionCard';
import CampaignTabs from '../components/Dashboard/CampeignTabs';
import ActivityChart from '../components/Dashboard/ActivityChart';
import {colors} from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBalanceData} from '../components/Dashboard/DashboardAction';
import {AppDispatch, RootState} from '../store/store';
import MainLoader from '../components/Common/MainLoader';

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
  const {balanceLoader} = useSelector((state: RootState) => state.balance);
  useEffect(() => {
    dispatch(fetchBalanceData());
  }, []);

  return balanceLoader ? (
    <View style={styles.loaderWrapper}>
      <MainLoader />
    </View>
  ) : (
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
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ghostWhite,
  },
});

export default Dashboard;

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {BottomNavigation} from 'react-native-paper';
import Header from '../components/Header';

const {width} = Dimensions.get('window');

const OverviewComp = () => (
  <View style={styles.wrapper}>
    <Header />

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
        <Text style={styles.progressTitle}>Overall Task Completion</Text>
        <Text style={styles.progressSub}>
          Achievement against total calls targeted for the month of September
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#F9FAFB', padding: 16, paddingTop: 50},

  walletCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  walletAmount: {fontSize: 28, fontWeight: 'bold', color: '#111827'},
  walletLabel: {fontSize: 14, color: '#6B7280'},
  divider: {height: 1, backgroundColor: '#E5E7EB', marginVertical: 12},
  walletInfoRow: {flexDirection: 'row', justifyContent: 'space-between'},
  walletInfo: {fontSize: 14, fontWeight: '600', color: '#1F2937'},
  walletInfoLabel: {fontSize: 12, color: '#6B7280'},
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
  bottomBar: {
    backgroundColor: '#ffffff',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
  },
  screenPlaceholder: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#6B7280',
  },
});

export default OverviewComp;

// File: src/components/WalletCard.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';
import {colors} from '../theme/colors';

const WalletCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.balanceRow}>
          <Avatar.Icon
            size={40}
            icon="folder"
            color={colors.neonBlue}
            style={styles.walletIcon}
          />
          <View style={styles.balanceText}>
            <Text style={styles.amount}>$146.00</Text>
            <Text style={styles.subText}>Wallet Balance</Text>
          </View>
        </View>
        <IconButton icon="chevron-right" size={20} iconColor={colors.cadet} />
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomRow}>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>10th Jul, 2020</Text>
          <Text style={styles.itemSubtitle}>Auto fill date</Text>
        </View>

        <View style={styles.verticalDivider} />

        <View style={styles.item}>
          <Text style={styles.itemTitle}>$20.00</Text>
          <Text style={styles.itemSubtitle}>Auto fill amount</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    backgroundColor: '#F0F4FF',
  },
  balanceText: {
    marginLeft: 10,
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.neonBlue,
  },
  subText: {
    color: colors.cadet,
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: colors.ghostWhite,
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.persianBlue,
  },
  itemSubtitle: {
    color: colors.cadet,
    fontSize: 12,
    marginTop: 4,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: colors.ghostWhite,
    marginHorizontal: 10,
  },
});

export default WalletCard;

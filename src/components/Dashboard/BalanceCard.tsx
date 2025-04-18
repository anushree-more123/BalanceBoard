import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';
import {colors} from '../../theme/colors';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {RootState} from '../../store/store';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainLoader from '../Common/MainLoader';

const BalanceCard = () => {
  const {balanceDetails, balanceLoader} = useSelector(
    (state: RootState) => state.balance,
  );

  console.log('balanceDetails', balanceDetails);
  return (
    <View style={styles.card}>
      {balanceLoader ? (
        <View style={styles.loaderWrapper}>
          <MainLoader />
        </View>
      ) : (
        <>
          <View style={styles.topRow}>
            <View style={styles.balanceRow}>
              <Avatar.Icon
                size={40}
                icon="wallet"
                color={colors.persianBlue}
                style={styles.walletIcon}
              />
              <View style={styles.balanceText}>
                <Text style={styles.amount}>${balanceDetails.balance}</Text>
                <Text style={styles.subText}>Wallet Balance</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                name="chevron-right-circle-outline"
                size={25}
                color={colors.cadet}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.bottomRow}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>
                {moment(balanceDetails.auto_fill_date).format('Do MMM, YYYY')}
              </Text>
              <Text style={styles.itemSubtitle}>Auto fill date</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.item}>
              <Text style={styles.itemTitle}>
                {balanceDetails.auto_fill_amount}
              </Text>
              <Text style={styles.itemSubtitle}>Auto fill amount</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
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
    backgroundColor: colors.ghostWhite,
  },
  balanceText: {
    marginLeft: 10,
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.persianBlue,
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
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
});

export default BalanceCard;

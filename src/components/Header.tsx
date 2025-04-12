import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {colors} from '../theme/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.hiText}>Hi, Clarence</Text>
        <Text style={styles.subText}>(801) 923-2930</Text>
      </View>
      <View style={styles.avatarWrapper}>
        <Avatar.Image
          size={40}
          source={{uri: 'https://i.pravatar.cc/300'}}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ghostWhite,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  hiText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.persianBlue,
  },
  subText: {
    fontSize: 14,
    color: colors.cadet,
  },
  avatarWrapper: {
    borderWidth: 3,
    borderColor: colors.persianBlue,
    borderRadius: 999,
    padding: 2,
  },
});

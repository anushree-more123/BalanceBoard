import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.greeting}>Hi, Clarence</Text>
        <Text style={styles.phone}>(801) 923-2930</Text>
      </View>
      <Image
        source={{uri: 'https://i.pravatar.cc/100'}}
        style={styles.avatar}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {fontSize: 22, fontWeight: 'bold', color: '#1F2937'},
  phone: {fontSize: 14, color: '#6B7280'},
  avatar: {width: 50, height: 50, borderRadius: 25},
});

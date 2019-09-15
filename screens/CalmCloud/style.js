import {StyleSheet, Dimensions} from 'react-native';

const win = Dimensions.get('window');
export default StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    maxHeight: win.height,
    backgroundColor: '#f2f2f2',
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 0,
  },
  stressBall: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingBottom: 150,
  },
  topText: {
    marginTop: 50,
    marginBottom: 50,
    flex: 1,
  },
  stressBallSection: {
    flex: 10,
  },
  bottomText: {
    marginBottom: 100,
    flex: 1,
  },
  clouds: {
    width: 50,
    position: 'absolute',
    bottom: 0,
  },
});

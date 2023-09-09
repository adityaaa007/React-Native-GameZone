import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'montserrat-semibold'
  },
  paragraph: {
    fontFamily: 'montserrat-regular',
    lineHeight: 20,
    marginVertical: 8
  },
  header: {
    width: '120%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 30
  },
  headerText: {
    fontSize: 16,
    color: '#444',
    letterSpacing: 1,
    fontFamily: 'montserrat-bold'
  },
  icon: {
    position: "absolute",
    left: 0,
    padding: 16
  },
  card: {
    marginBottom: 8,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#eee',
    backgroundColor: '#fff'
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginEnd:8
  },
  headerTitle: {
    flexDirection: 'row',
  },
  openModal: {
    padding: 8,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 16
  },
  closeModal: {
    marginTop: 16
  },
  modalContent: {
    flex: 1
  },
  input: {
    fontFamily: 'montserrat-semibold',
    fontSize: 13,
    borderWidth: 1.5,
    borderRadius: 6,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 16
  },
  button: {
    backgroundColor: 'maroon',
    padding: 16,
    borderRadius: 6
  },
  buttonText: {
    alignSelf: 'center',
    fontFamily: 'montserrat-semibold',
    color: '#fff',
    fontSize: 13    
  }
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
};
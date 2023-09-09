import { Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from "react-native"; 
import { styles } from '../styles/global';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Card from "../shared/Card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./ReviewForm";

export default function Home() {

  const navigationValue = useNavigation();

  const [openModal, setOpenModal] = useState(false);

  const [reviews, setReviews] = useState([
    {title: 'Zelda, a breath of fresh air', rating: 5, body: 'Lorem ipsum', key: '0'},
    {title: 'Fantasy, Not so Final', rating: 4, body: 'Lorem ipsum', key: '1'},
    {title: 'Gotta catch them all', rating: 3, body: 'Lorem ipsum', key: '2'},
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    })
    setOpenModal(false);
  }

  return (
    <View style={styles.container}>
        <Modal visible={openModal} animationType="slide" style={styles.modalContent}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons 
                name="close" 
                size={24} 
                onPress={() => setOpenModal(false)} 
                style={{...styles.openModal,...styles.closeModal}}></MaterialIcons>
              <ReviewForm addReview={addReview}></ReviewForm>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons 
          name="add" 
          size={24} 
          onPress={() => setOpenModal(true)} 
          style={styles.openModal}></MaterialIcons>

        <FlatList 
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigationValue.navigate('ReviewDetails', item)}>
              <Card>
                <Text style={styles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    
  );
}

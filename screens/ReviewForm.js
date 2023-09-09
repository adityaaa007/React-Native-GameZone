import React from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles }  from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function ReviewForm({ addReview }) {
  const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is num 1-5', 'Rating must be 1-5', (value) => {
      return parseInt(value) > 0 && parseInt(value) < 6;
    })
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{title: '',body: '',rating: ''}}
        onSubmit={(values, actions) => {
          // actions.resetForm();
          addReview(values);
        }}
        validationSchema={reviewSchema}>
          {(props) => (
            <View>
              <TextInput 
                style={styles.input} 
                placeholder='Review title'
                onChangeText={props.handleChange('title')}
                value={props.values.title} />

              <TextInput 
                multiline
                style={styles.input} 
                placeholder='Review body'
                onChangeText={props.handleChange('body')}
                value={props.values.body} />

              <TextInput 
                style={styles.input} 
                placeholder='Review rating'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric' />

              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit} >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
    </View>
  )
}
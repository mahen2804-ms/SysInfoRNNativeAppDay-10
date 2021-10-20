import React from 'react';
import {View, Text} from 'react-native';
import Slidern from '@react-native-community/slider';

const Slider = ({field: {value, name}, form: {setFieldValue},placeholder, ...rest}) => {
  return (
    <View style={{ marginHorizontal:10}}>
         <Text>{placeholder}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>      
        
      <Slidern
        onValueChange={data => {
            setFieldValue(name,data);
        }}
        step={1}
        style={{ flex:1, height: 40}}
        {...rest}
      />
      <Text style={{fontSize:24}}>{value}</Text>
      </View>
    </View>
  );
};

export default Slider;

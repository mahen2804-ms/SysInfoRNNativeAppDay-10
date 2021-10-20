import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import RadioChecked from '../../assets/Icons/radio_button_checked.svg';
import RadioUnchecked from '../../assets/Icons/radio_button_unchecked.svg';

const Radio = ({
    field: { value, name },
    form: { setFieldValue },
    data,
    placeholder
}) => {
    return (
        <View style={{ margin: 10 }}>
            <Text>{placeholder}</Text>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                {data.map((item) => {
                    return (
                        <RectButton key={item.value} onPress={() => {
                            setFieldValue(name, item.value)
                        }} style={{ flexDirection: 'row', alignItems: 'center', }}>
                            {value === item.value ? (
                                <RadioChecked height={24} width={24} fill="#000" />) :
                                (<RadioUnchecked height={24} width={24} fill="#000" />
                                )}

                            <Text style={{ paddingHorizontal: 10 }}>
                                {item.text}
                            </Text>
                        </RectButton>
                    )
                })}
            </View>
        </View>
    )
}

export default Radio

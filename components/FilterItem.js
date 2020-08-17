import React, {useContext} from 'react'
import {View, Text, CheckBox, StyleSheet} from 'react-native'
import FetchContext from '../context/FetchContext'

const FilterItem = ({listF}) => {

    const {onTogle} = useContext(FetchContext)

        return (
        <View style={styles.row}>
            <Text style={styles.title} key={listF.strCategory}>{listF.strCategory}</Text>
            <CheckBox
                value={listF.check}
                onValueChange={ () => onTogle(listF.strCategory)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        marginHorizontal: 5,
        marginVertical: 5
    }
})

export default FilterItem
import React, {useEffect, useContext} from 'react'
import {View, StyleSheet, Image, TouchableHighlight, CheckBox} from 'react-native'
import FetchContext from '../context/FetchContext'
import FilterItem from '../components/FilterItem'

const Filter = ({ navigation }) => {

    const {listFilter, setList} = useContext(FetchContext)

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableHighlight onPress={() => {
                navigation.navigate('List')
                setList(listFilter.filter(fil => fil.check))
            }}>
                <Image
                        style={styles.tinyLogo}
                        source={require('../components/res/icons8-back-arrow-26.png')}
                />
            </TouchableHighlight>
          ),
        });
      }, [navigation]);

    return(
        <View style={styles.main}>
            {listFilter && listFilter.map((listF, index)=> (
                <FilterItem listF={listF} key={index}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 5
    },
    tinyLogo: {
        margin: 5
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        marginHorizontal: 5,
        marginVertical: 5
    }
})

export default Filter
import React, {useState, useEffect, useContext} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
    Button
} from 'react-native'
import FetchContext from '../context/FetchContext'
import ListOfCoctails from './ListOfCoctails'


const List = ({ navigation }) => {

    const {listOfCoctails, list} = useContext(FetchContext)
    const [index, setIndex] = useState(0)

    const back = () => {
        setIndex(index - 1)
        if(index === 0) {
            setIndex(list.length - 1)
        }
    }

    const next = () => {
        setIndex(index + 1)
        if(index === list.length - 1) {
            setIndex(0)
        }
    }

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableHighlight onPress={() => navigation.navigate('Filter')}>
                <Image
                        style={styles.tinyLogo}
                        source={require('../components/res/icons8-filter-24.png')}
                />
            </TouchableHighlight>
          ),
        });
      }, [navigation]);

    return(
        <>
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.title}>{list && list[index] && list[index].strCategory}</Text>
                    <ListOfCoctails exampleList={listOfCoctails[index]} />
                </View>
            </ScrollView>
            <View style={styles.pagination}>
                <Button title='Back' onPress={back}/>
                <Text style={styles.index}>{`<${index + 1}>`}</Text>
                <Button title='Next' onPress={next}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 5
    },
    tinyLogo: {
        margin: 5
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    index: {
        margin: 5,
        fontSize: 20
    }
})

export default List
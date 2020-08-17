import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const ItemOfCoctails = ({exmp}) => {
    return(
        <View style={styles.item}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: exmp.strDrinkThumb
                }} />
            <Text style={styles.itemTitle}>
                {exmp.strDrink}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 100,
      height: 100,
    },
    item: {
        display:'flex',
        flexDirection: 'row',
        marginVertical: 5
    },
    itemTitle: {
        padding: 40
    }
  });

export default ItemOfCoctails
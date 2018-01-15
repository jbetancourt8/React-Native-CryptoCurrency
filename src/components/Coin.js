import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const styles = {
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 1,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",   
        color: 'white'     
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: 'white'  
    },
    seperator: {
        marginTop: 10,
        color: 'white'
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",   
        color: 'white'       
    },
    moneySymbol: {
        fontWeight: "bold",
        color: 'white'  
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
};

const Coin = ({ item }) => {
    const { image_url, price_usd, name, symbol } = item;
    return (
        <View style={styles.container}>

            <View style={styles.upperRow}>
                <Image style={{ width: 40 }} source={{ uri: image_url }} />
                <Text style={styles.coinSymbol}>{symbol}</Text>
                <Text style={styles.seperator}>|</Text>
                <Text style={styles.coinName}>{name}</Text>
                <Text style={styles.coinPrice}>{price_usd}
                    <Text style={styles.moneySymbol}> USD </Text>
                </Text>
            </View>

            <View style={styles.statisticsContainer}>

                <Text style={{color: 'white'}}>24h:
                    <Text style={item.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {item.percent_change_24h} % </Text>
                </Text>
                <Text style={{color: 'white'}}>7d:
                    <Text style={item.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {item.percent_change_7d} % </Text>
                </Text>

            </View>

        </View> 
    );
};

export default Coin;

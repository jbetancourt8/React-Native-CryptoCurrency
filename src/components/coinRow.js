import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    content: {
        flex: 1, 
        paddingTop: 30
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 20, 
        color: 'white',
        paddingVertical: 2,
        marginLeft: 15,
        marginRight: 'auto'
    },
    coinData:{
        fontSize: 20,
        color: 'white',
        paddingVertical: 2,
        marginRight: 15,
        marginLeft: 'auto'
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5,
        fontSize: 20, 
        paddingVertical: 2,
        marginRight: 15,
        marginLeft: 'auto'
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5,
        fontSize: 20, 
        paddingVertical: 2,
        marginRight: 15,
        marginLeft: 'auto'
    }
};

const CoinRow = ({ data, dateString }) => {
    console.log(data)
    return (
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.title}>Price USD: </Text>
                <Text style={styles.coinData}>{data.price_usd} USD</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Price BTC: </Text>
                <Text style={styles.coinData}>{data.price_btc} BTC</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>7 Day Change: </Text>
                <Text style={data.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {data.percent_change_7d} % </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>24 Hour Change: </Text>
                <Text style={data.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {data.percent_change_24h} % </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>1 Hour Change: </Text>
                <Text style={data.percent_change_1h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {data.percent_change_1h} % </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Available Supply: </Text>
                <Text style={styles.coinData}>{data.available_supply}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Max Cap: </Text>
                <Text style={styles.coinData}>{data.market_cap_usd}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Max Supply: </Text>
                <Text style={styles.coinData}>{data.max_supply}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Last Updated: </Text>
                <Text style={styles.coinData}>{dateString}</Text>
            </View>
        </View>
    );
};

export default CoinRow; 
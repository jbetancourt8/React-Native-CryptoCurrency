import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const styles = {
    container: {
        flex: 1, 
        backgroundColor: '#393939',
        alignItems: 'center',
        paddingTop: 4
    },
    coinBorder: {
        borderRadius: 35, 
        backgroundColor: 'white', 
        borderColor: 'white', 
        borderWidth: 1
    },
    coinImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center'
    },
    coinName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 5
    },
    coinData: {
        fontSize: 20, 
        color: 'white',
        paddingVertical: 2
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

class CoinScreen extends Component {
    render() {
        const { 
            image_url, name, symbol, price_usd, price_btc, 
            percent_change_24h, percent_change_7d, 
            percent_change_1h, available_supply, 
            last_updated, market_cap_usd, max_supply,

        } = this.props.navigation.state.params;

        var timestamp = last_updated*1000;
        var newDate = new Date();
        newDate.setTime(timestamp);
        dateString = newDate.toLocaleTimeString();

        return (
            <View style={styles.container}>

                <View style={styles.coinBorder}>
                    <Image 
                        style={styles.coinImage} 
                        source={{ uri: image_url }} 
                        resizeMode='contain'
                    />
                </View>

                <Text style={styles.coinName}>{name} | {symbol}</Text>
                <Text style={styles.coinData}>{price_usd} USD</Text>
                <Text style={styles.coinData}>{price_btc} BTC</Text>
                <Text style={styles.coinData}>7d:
                    <Text style={percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_7d} % </Text>
                </Text>
                <Text style={styles.coinData}>24h:
                    <Text style={percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text style={styles.coinData}>1h:
                    <Text style={percent_change_1h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_1h} % </Text>
                </Text>
                <Text style={styles.coinData}>Available Supply: {available_supply}</Text>
                <Text style={styles.coinData}>Max Cap: {market_cap_usd} USD</Text>
                <Text style={styles.coinData}>Max Supply: {max_supply}</Text>
                <Text style={styles.coinData}>Last Updated: {dateString}</Text>

            </View>
        );
    }
}

export default CoinScreen; 
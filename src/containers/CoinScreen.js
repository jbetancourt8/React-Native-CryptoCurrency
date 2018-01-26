import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import CoinRow from '../components/coinRow';

const styles = {
    container: {
        flex: 1, 
        backgroundColor: '#393939',
        paddingTop: 4
    },
    coinBorder: {
        width: 70,
        borderRadius: 35, 
        backgroundColor: 'white', 
        borderColor: 'white', 
        borderWidth: 1,
        alignSelf: 'center'
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
        paddingTop: 5,
        textAlign: 'center'
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

                <CoinRow data={this.props.navigation.state.params} dateString={dateString}/>

            </View>
        );
    }
}

export default CoinScreen; 
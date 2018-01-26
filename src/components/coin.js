import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const styles = {
    container: {
        display: "flex",
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 1,
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    },
    coinBorder: {
        borderRadius: 21, 
        backgroundColor: 'white', 
        borderColor: 'white', 
        borderWidth: 1
    },
    coinImage: {
        width: 42,
        height: 42,
        borderRadius: 21,
        justifyContent: 'center'
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
    lowerRow: {
        display: "flex",
        borderTopColor: "#e5e5e5",
        borderTopWidth: 1,
        padding: 10,
        marginHorizontal: 25,
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

class Coin extends Component {
    navigateToCoin = (item) => {
        this.props.navigation.navigate('Coin', { ...item });
    }

    render() {
        const { image_url, price_usd, name, symbol, percent_change_24h, percent_change_7d } = this.props.item;

        return (
            <TouchableOpacity onPress={() => this.navigateToCoin(this.props.item)}>
            <View style={styles.container}>

                <View style={styles.upperRow}>

                    <View style={styles.coinBorder}>
                        <Image 
                            style={styles.coinImage} 
                            source={{ uri: image_url }} 
                            resizeMode='contain'
                            resizeMethod='auto'
                        />
                    </View>

                    <Text style={styles.coinSymbol}>{symbol}</Text>
                    <Text style={styles.seperator}>|</Text>
                    <Text style={styles.coinName}>{name}</Text>
                    <Text style={styles.coinPrice}>{price_usd}
                        <Text style={styles.moneySymbol}> USD </Text>
                    </Text>
                </View>

                <View style={styles.lowerRow}>

                    <Text style={{color: 'white'}}>24h:
                        <Text style={percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_24h} % </Text>
                    </Text>
                    <Text style={{color: 'white'}}>7d:
                        <Text style={percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_7d} % </Text>
                    </Text>

                </View>

            </View> 
            </TouchableOpacity>
        );
    }
}

export default Coin;

import React, { Component } from 'react';
import { View, Text } from 'react-native';

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

class Coin extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.upperRow}>
                    
                    <Text style={styles.coinSymbol}>{this.props.item.symbol}</Text>
                    <Text style={styles.seperator}>|</Text>
                    <Text style={styles.coinName}>{this.props.item.name}</Text>
                    <Text style={styles.coinPrice}>{this.props.item.price_usd}
                        <Text style={styles.moneySymbol}> USD </Text>
                    </Text>
                </View>

                <View style={styles.statisticsContainer}>

                    <Text style={{color: 'white'}}>24h:
                        <Text style={this.props.item.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {this.props.item.percent_change_24h} % </Text>
                    </Text>
                    <Text style={{color: 'white'}}>7d:
                        <Text style={this.props.item.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {this.props.item.percent_change_7d} % </Text>
                    </Text>

                </View>

            </View> 
        );
    }   
}

export default Coin;
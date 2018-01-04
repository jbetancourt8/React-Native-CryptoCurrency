import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from '../actions/FetchCoinData';
import FetchImages from '../actions/FetchImages';
import Coin from '../components/Coin';

const styles = {
    container: {
        flex: 1
    }
};

class HomeScreen extends Component {
    componentWillMount() {
        this.props.FetchCoinData();
    }

    _renderItem = ({item}) => (
        <Coin item={item} image={this.props.image}/>
      );

    render() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <SafeAreaView>
                
                <FlatList
                    data={this.props.crypto.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this._renderItem}
                />

            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(HomeScreen);
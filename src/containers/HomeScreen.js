import React, { Component } from 'react';
import { FlatList, SafeAreaView, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { FetchAllCoinData, FilterCoinData } from '../actions/fetchCoinData';
import Coin from '../components/coin';

const styles = {
    container: {
        flex: 1, 
        backgroundColor: '#393939'
    },
    textInput: {
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
}

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        };
    }

    componentWillMount() {
        this.props.FetchAllCoinData();
    }

    renderItem = ({item}) => (
        <Coin item={item} image={this.props.image} navigation={this.props.navigation} />
    );

    handleRefresh = () => {
        this.setState({
            refresh: true
        });

        this.props.FetchAllCoinData();

        this.setState({
            refresh: false
        });
    }

    searchData = (text) => {
        const { data } = this.props.crypto;
        let input = text.toLowerCase();

        let filteredList = data.filter((data) => {
            return data.name.toLowerCase().match(input)
        });

        this.props.FilterCoinData(text);
    }

    renderHeader = () => {
        return (
            <TextInput 
                placeholder="Search" 
                placeholderTextColor="white" 
                style={styles.textInput} 
                onChangeText={(text) => this.searchData(text)}
                autoCorrect={false}
                autoCapitalize='none'
                returnKeyType='search'
                clearButtonMode='while-editing'
            />
        );
    }

    render() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <View style={styles.container} >
            <SafeAreaView>
                <FlatList
                    data={this.props.crypto.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderItem}
                    refreshing={this.state.refresh}
                    onRefresh={this.handleRefresh}
                    ListHeaderComponent={this.renderHeader}
                />
            </SafeAreaView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchAllCoinData, FilterCoinData })(HomeScreen);
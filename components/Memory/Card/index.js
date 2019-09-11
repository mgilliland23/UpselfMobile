import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';

const styles = StyleSheet.create({
    click: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    container: {
        marginTop: 10,
        flex: 1,
    }
});

// let value = false;

export default class Card extends Component {

    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: '#6bccf3',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };

    constructor(props) {
        super(props);
        this.state = {
            showing: false
        };

    }




    render() {

        return (
            <View style={styles.container}>
                {
                    // Pass any View or Component inside the curly bracket.
                    // Here the ? Question Mark represent the ternary operator.

                    (this.state.showing==false && this.props.matched == false) ? (
                        <TouchableOpacity
                            // onPress={() => this.setState({ isHidden: true })}
                            // onPress={() => alert("test1")}
                            onPress={() => [this.setState({ showing: true }),console.log(this.props.imageUri)]}
                            // onPress={() =>
                            //     this.setState({
                            //         isHidden: false
                            //     })
                            // }
                            // onPress={() => this.setState({ isHidden: true })}
                            // onPress={() => this.props.action(true)}
                            style={styles.click}>
                            <Image
                                style={[styles.click]}
                                source={require('../../../assets/images/upsy_emo/upsy1_emo3.png')}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                    )
                        :
                        (
                            <TouchableOpacity
                                // onPress={() => this.setState({ isHidden: false })}
                                // onPress={() => alert("test2")}
                                // onPress={() => value = false}
                                onPress={() => this.setState({ showing: false })}
                                // onPress={() => this.setState({ isHidden: false })}
                                // onPress={() => this.props.action(false)}
                                style={styles.click}>
                                <Image
                                    style={[styles.click]}
                                    source={this.props.imageUri}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                        )
                }

            </View>
        )


    }

}

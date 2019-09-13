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
showingE = [null, false, false, false, false, false, false, false, false, false, false, false, false]; //state[0] is not considered
state = [null, false, false, false, false, false, false]; //state[0] is not considered
move = [0, 0];
moveid = [0, 0];
click = 0;


function checktiles() {
    if (click % 2 == 0) {
        if (move[0] == move[1] && move[0] != 0) {
            showingE[moveid[0]] = true;
            showingE[moveid[1]] = true;
            click = 0;
        }
        showingE[moveid[0]] = false;
        showingE[moveid[1]] = false;
        click = 0;
    }

}

function cleantiles() {
    if (click % 2 == 0 && moveid[0] != moveid[1]) {
            console.log("clean all");
            showingE[moveid[0]] = false;

        // console.log(showingE);
    }
    else {
        // console.log("keep open");
    }
}

function matchmsg() {
    if (move[0] == move[1]) {
        // console.log("match!!!");
    } else {
        // console.log("not matche :(");
    }

}






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

                    (this.props.showme == false) ? (
                        // (state[this.props.imageUri] == false && showing[this.props.imageUri] == false) ? (
                        <TouchableOpacity
                            // onPress={() => this.setState({ isHidden: true })}
                            // onPress={() => alert("test1")}
                            onPress={() => [
                                // this.setState({ showing: true }),
                                showingE[this.props.id] = true,
                                // this.props.showme = true,
                                // console.log(showingE[this.props.id]),
                                // console.log(showingE),
                                // console.log(this.props.id),
                                // state[this.props.imageUri] == true,
                                // console.log(this.props.imageUri),
                                // console.log(state[this.props.imageUri]),
                                move.push(this.props.imageUri),
                                move.shift(),
                                moveid.push(this.props.id),
                                moveid.shift(),
                                // console.log(move),
                                // console.log(moveid),
                                // console.log(click),
                                // checktiles(this.props.imageUri)
                                // console.log(this)
                                // console.log(state),
                                // console.log(showing)
                                click++,
                                matchmsg(),
                                cleantiles(),
                                // checktiles(),
                                // console.log(showingE),
                                // console.log(this),
                                this.props.action(showingE),
                                // this.forceUpdate(),
                            ]}
                            // onPress={() =>
                            //     this.setState({
                            //         isHidden: false
                            //     })
                            // }
                            // onPress={() => this.setState({ isHidden: true })}
                            // onPress={() => this.props.action(true)}
                            style={styles.click} >
                            <Image
                                style={[styles.click]}
                                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
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
                                onPress={() => [
                                    // this.setState({ showing: false }),
                                    // showingE[this.props.id] = false,
                                    // console.log(showingE),
                                    // this.forceUpdate()
                                ]}
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

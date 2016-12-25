import { View, StyleSheet, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import * as state_key from '../lib/state_key';


class NavTabs extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 0, key: state_key.PRODUCTS }
  }

  onPress(key) {
    this.props.setTab({key : key});
  }

  renderScene(component) {
    return (
      <View style={ { flex: 1 } }>
        { React.createElement(component, this.props) }
      </View>
    );
  }

  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Selected page: {this.state.key}
        </Text>
        <Tabs selected="PRODUCTS" style={{backgroundColor:'white'}}
              onSelect = {function(el){ onPress(el.props.name); return {style:{color:'red'}}}}>
            <Text name="PRODUCTS">PRODUCTS</Text>
            <Text name="DOCTORS">DOCTORS</Text>
            <Text name="FEED">FEED</Text>
            <Text name="DISCUSSION">DISCUSSION</Text>
            <Text name="NOTIFICATION">NOTIFICATION</Text>
        </Tabs>
      </View>
    );
  }
}  

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });


function mapStateToProps(state) {
  return {
    navigationTabs: state.navigationTabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs);

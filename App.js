import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import Button from './Buton';

const items= [];
export default class App extends Component {
  constructor (props) {
    super (props)
    this.addItem = this.addItem.bind(this);
  }
  state = {
    toDo : ''
  }
  addItem(){
    items.push(this.state.toDo)
    this.setState({ toDo: ''})
  }
  renderData(item){
    return(
      <View key={item} style={{backgroundColor: '#024f7d', height: 100, margin: 10, borderRadius: 10}}>
        <Text style={{marginTop:40,marginLeft: 60, color: '#ffffff'}}>{item}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#024f7d', height: 100, flexDirection: 'row', padding: 4}}>
          <View style={{backgroundColor: '#ffffff', borderRadius: 15, flex: 4,marginRight: 4}}>
            <TextInput value={this.state.toDo} onChangeText={(v)=> this.setState({toDo: v})} style={{backgroundColor: '#cccccc', height: 35, marginTop: 30, borderRadius: 10}}/>
          </View>
          <View style={{backgroundColor: '#ffffff', borderRadius: 15, flex: 1}}>
            <Button onPress={this.addItem} text={'Ekle'} />
          </View>
        </View>
        <ScrollView>
          {
            items.map((item)=>this.renderData(item)) 
          }
        </ScrollView>
      </View>
    );
  }
}

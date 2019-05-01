import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image, View,TextInput,TouchableOpacity,FlatList} from 'react-native';
import moment from 'moment';

type Props = {};
export default class JobList extends Component<Props> {
  constructor(props) {
    super(props);
    this.arrayholder = [];
    this.state = {
        job:props.job
    };
  }

  componentDidMount(){
  }

  componentDidUpdate(prevProps, prevState){
      if(prevProps){
          if(this.state.job !== this.props.job){
              console.log('different job  ');
              this.setState({job:this.props.job});
          }
      }

  }

    formatCurrency=(value)=>{
        var formattedValue=null;
        if(parseInt(value)>=1000){
            formattedValue=parseInt(value)/1000+'K';
        }
        else{
            formattedValue=value
        }
        return formattedValue;
    }



    render() {
    return (
      <View style={{height:150,width:'100%',alignItems:'flex-start',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
          <View style={{justifyContent: 'center',
              alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:15,fontWeight: 'bold',color:'#000'}}>
                  {this.state.job.job_title}
              </Text>
              <View style={{flex:1}}></View>
              <Text style={{fontSize:15,fontWeight: 'bold',color:'#000'}}>
                  {'SGD '+this.formatCurrency(this.state.job.salary_range_from )+'- SGD '+this.formatCurrency(this.state.job.salary_range_to)}
              </Text>
          </View>

          <View style={{justifyContent: 'center',
              alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.company_location}
              </Text>
              <View style={{width:20}}></View>
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.xp_lvl}
              </Text>
          </View>

          <View style={{justifyContent: 'center',
              alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.degree}
              </Text>
              <View style={{width:20}}></View>
              <Text style={{fontSize:12,fontWeight: 'bold',color:'#000'}}>
                  {this.state.job.job_type}
              </Text>
          </View>

          <View style={{justifyContent: 'center',
              alignItems: 'center',flexDirection:'row'}}>
              <Image
                  style={{width: 20, height: 20}}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.company_name}
              </Text>
              <View style={{flex:1}}></View>
              <Text style={{fontSize:15,color:'grey'}}>
                  { moment(this.state.job.updated_at).fromNow()}
              </Text>
          </View>



        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

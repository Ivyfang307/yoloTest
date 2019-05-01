import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image, View,TextInput,TouchableOpacity,FlatList} from 'react-native';
import moment from 'moment';
import CompanyLogo from './assets/images/companyLogo.jpg';
import MapIcon from './assets/images/mapIcon.png';
import QualificationIcon from './assets/images/qualificationIcon.png';
import WorkIcon from './assets/images/workIcon.png';
import ClockIcon from './assets/images/clockIcon.png';

type Props = {};
export default class JobList extends Component<Props> {
  constructor(props) {
    super(props);
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
          <View style={{justifyContent: 'center',flex:1,
              alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:15,fontWeight: 'bold',color:'#000'}}>
                  {this.state.job.job_title}
              </Text>
              <View style={{flex:1}}></View>
              <Text style={{fontSize:15,fontWeight: 'bold',color:'#000'}}>
                  {'SGD'+this.formatCurrency(this.state.job.salary_range_from )+' - SGD'+this.formatCurrency(this.state.job.salary_range_to)}
              </Text>
          </View>

          <View style={{justifyContent: 'center',flex:1,
              alignItems: 'center',flexDirection:'row'}}>
              <Image
                  style={{width:20,height:20,marginRight:10,paddingBottom:5,resizeMode:'contain'}}
                  source={MapIcon}
              />
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.company_location}
              </Text>
              <View style={{width:20}}></View>
              <Image
                  style={{width:20,height:20,marginRight:10,paddingBottom:5,resizeMode:'contain'}}
                  source={WorkIcon}
              />
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.xp_lvl}
              </Text>
          </View>

          <View style={{justifyContent: 'center',flex:1,
              alignItems: 'center',flexDirection:'row'}}>
              <Image
                  style={{width:20,height:20,marginRight:10,paddingBottom:5,resizeMode:'contain'}}
                  source={QualificationIcon}
              />
              <Text style={{fontSize:12,color:'#000'}}>
                  {this.state.job.degree}
              </Text>
              <View style={{width:20}}></View>
              <Image
                  resizeMode={'contain'}
                  style={{width:10,height:10,marginRight:10,paddingBottom:5,resizeMode:'contain'}}
                  source={ClockIcon}
              />
              <Text style={{fontSize:12,fontWeight: 'bold',color:'#000'}}>
                  {this.state.job.job_type}
              </Text>
          </View>

          <View style={{justifyContent: 'center',flex:1,
              alignItems: 'center',flexDirection:'row'}}>
              <Image
                  style={{width:40,height:30,marginRight:20,paddingBottom:5,resizeMode:'contain'}}
                  source={CompanyLogo}
              />
              <View style={{width:180}}>
              <Text numberOfLines={2} ellipsizeMode={'tail'} style={{fontSize:12,color:'#000'}}>
                  {this.state.job.company_name}
              </Text>
              </View>
              <View style={{flex:1}}></View>
              <Text style={{fontSize:12,color:'grey'}}>
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

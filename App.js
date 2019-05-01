import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList} from 'react-native';
import JobList from './JobList';
import Header from './Header';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
      this.arrayholder = [];
      this.state = {
      text:'',
      numOfJobs:0,
      data:null,
    jobList:null};
  }

  componentDidMount(){
    return fetch('https://search.bossjob.com/api/v1/search/job_filter?size=10&query=system')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            data:responseJson.data,
            jobList:responseJson.data.jobs
          });
            this.arrayholder = responseJson.data.jobs;
            console.log('data'+JSON.stringify(this.state.data))
          console.log('joblist '+JSON.stringify(this.state.jobList))
        })
        .catch((error) =>{
          console.error(error);
        });
  }

  doFilter=()=>{
    console.log('filter button clicked');

  }

    searchFilterFunction = (text) => {
      console.log('text '+text)
        this.setState({text:text});
        const newData = this.arrayholder.filter(item => {
            const jobTitleData = `${item.job_title.toUpperCase()}`;
            const companyNameData = `${item.company_name.toUpperCase()}`;
            const textData = text.toUpperCase();
            if((jobTitleData.indexOf(textData) > -1) || companyNameData.indexOf(textData) > -1){
                return true;
            }
            else{
                return false;
            }
        });
        this.setState({ jobList: newData });
    };


  render() {
    return (
      <View style={styles.container}>
        <View style={{height:50,justifyContent:'center', borderBottomWidth:1,borderBottomColor:'#d8d8d8', width:'100%',alignItems:'center',}}>
            <Header/>
        </View>
        <View style={{height:150,width:'100%',backgroundColor: '#cbcbcb', justifyContent: 'center',
          alignItems: 'center',}}>
        <TextInput style={{width:'80%',height:60,marginBottom:20,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}
                   onChangeText={(text) => this.searchFilterFunction(text)}
                   value={this.state.text}
                    placeholder={'Search for job title or company name'}>

        </TextInput>

        <TouchableOpacity style={{width:'80%',height:30,borderWidth:1,borderRadius:15, borderColor:'#2d4aab',alignItems: 'center',justifyContent: 'center'}}
                          onPress={this.doFilter}>
          <Text style={{color:'#2d4aab', fontSize:12}}>
            Filter results
          </Text>
        </TouchableOpacity>
        </View>

        <View style={{height:50,width:'100%',borderBottomWidth:1,borderBottomColor:'#d8d8d8',justifyContent: 'center',
          alignItems: 'center',}}>
          <Text style={{width:'80%',fontSize:15,fontWeight: 'bold',color:'#000'}}>
            {this.state.data?this.state.data.length:0 }{' jobs found'}

          </Text>
        </View>

        <View style={{flex:1,width:'80%'}}>
          <FlatList
              data={this.state.jobList}
              renderItem={({item}) => <JobList
              job={item}/>}
          />

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

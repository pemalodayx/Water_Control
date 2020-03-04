
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput,ScrollView, Text,View } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class  extends React.Component {
  static navigationOptions = {
    title:'Hydrography',
    headerStyle:{
        backgroundColor:'green',
        height:100
    }
  };
  render() {
    return (
      <View style={styles.container}>
         
        <Text  style={{marginLeft:'35%',
        marginTop:20,
        fontWeight: "bold",
        fontSize: 18,
        color: 'white'}}>Water usage Graph</Text>
         <View  style={{
              borderBottomColor: 'black',
              borderBottomWidth:1,
              width:'100%',
              height:20
              }}
          />  
        <ScrollView style={styles.scrollview}>
        <Text  style={{
        marginTop:20,
        fontWeight: "bold",
        color: 'white'}}>Monthly Water Usage</Text>
            <LineChart
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Junly", "Aug", "sept", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="L"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
          <Text  style={{
        marginTop:20,
        fontWeight: "bold",
        color: 'white'}}>Daily Water Usage</Text>
            <LineChart
                data={{
                  labels: ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="L"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
      </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0d7ba1'
},
  scrollview:{
      marginHorizontal:5,
  },
});    

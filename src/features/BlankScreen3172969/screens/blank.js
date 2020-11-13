import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { Switch_17: true }
  render = () => (
    <View>
      <Text>This is the header.</Text>
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_17}
        value={this.state.Switch_17}
        onValueChange={nextChecked => this.setState({ Switch_17: nextChecked })}
      />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/image_2.png"
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {},
  Text_15: {},
  Switch_17: { alignSelf: "flex-start" },
  Image_19: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)

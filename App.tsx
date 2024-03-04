import { StyleSheet, Text, View } from "react-native"
import WebView from "react-native-webview"
const url = "http://" + "your react app doamin "
export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={{ width: "100%", height: "100%" }}
        source={{ uri: url }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

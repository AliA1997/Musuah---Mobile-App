import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function AIChat() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://alialhaddad-muslimwikichat.hf.space' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        mixedContentMode='compatibility'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    width: 300,
  },
});
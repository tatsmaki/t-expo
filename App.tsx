import { WebView } from "react-native-webview";

const App = () => {
  return (
    <WebView
      javaScriptEnabled
      domStorageEnabled
      source={{ uri: "http://localhost:3000" }}
    />
  );
};

export default App;

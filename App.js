import * as Sentry from "@sentry/react-native";
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


Sentry.init({
  dsn: "https://0b1bfb681f09438ab2021e3eb26ff6b4@o4504726892969984.ingest.sentry.io/4504726894411776",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});


const App = () => {

  React.useEffect(()=> {
    throw new Error("Thang 111 My first Sentry error!");
  },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>aa1a</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Sentry.wrap(App);

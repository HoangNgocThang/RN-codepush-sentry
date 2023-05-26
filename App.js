import * as Sentry from "@sentry/react-native";
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Image } from 'react-native';
import codePush from "react-native-code-push";
const img = require('./images/callapi.png');

Sentry.init({
  dsn: "https://0b1bfb681f09438ab2021e3eb26ff6b4@o4504726892969984.ingest.sentry.io/4504726894411776",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});


const App = () => {

  React.useEffect(() => {
    // open cmt test sentry
    // throw new Error("Thang 111 My first Sentry error!");
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>TEST CODE PUSH2</Text>
        <Text style={{ color: 'red' }}>Making my way</Text>
        <Text>Hello Anh em</Text>
        <Image source={img} style={{ width: 100, height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Sentry.wrap(codePush(App));

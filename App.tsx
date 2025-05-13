

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
 
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// ➕ Import CodePush
import CodePush from 'react-native-code-push';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {/* App Logo */}
      {/* <Image
        source={require('./assets/app_logo.png')} // Replace with your actual logo path
        style={styles.logo}
        resizeMode="contain"
      /> */}

      <Text style={styles.title}>Welcome to Our App ne push!</Text>

      <Text style={styles.subtitle}>
        Explore amazing features and discover new possibilities.
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => console.log('Get Started Pressed')}>
        <Text style={styles.primaryButtonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.secondarySection}>
        <Text style={styles.secondaryText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => console.log('Sign In Pressed')}>
          <Text style={styles.secondaryButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>© 2025 Your Company Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F5F5F5', // Light grey background
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF', // Blue primary color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondarySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: 16,
    color: '#888',
    marginRight: 10,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#AAA',
    textAlign: 'center',
    marginBottom: 20,
  },
});
// ➕ CodePush Options
let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

// ⛓️ Wrap App with CodePush and export
export default CodePush(codePushOptions)(App);

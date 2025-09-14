import { StatusBar } from 'expo-status-bar';
import { Image, Linking, Platform, View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';
import { useColorScheme } from '~/lib/useColorScheme';

export default function ModalScreen() {
  const { colors, colorScheme } = useColorScheme();
  return (
    <>
      <StatusBar
        style={Platform.OS === 'ios' ? 'light' : colorScheme === 'dark' ? 'light' : 'dark'}
      />
      <View className="flex-1 items-center justify-center gap-1 px-12">
          <Image
              source={require('../assets/nav-logo.png')}
              style={{
                width: 300,
                height: 300,    
              }}
              resizeMode="contain"
          />
        <Text color="tertiary" variant="subhead" className="pb-4 text-center">
          Become a contributor to our mission
        </Text>
        <Text
          onPress={() => Linking.openURL('https://musuah.com')}
          variant="subhead"
          className="text-primary">
          Click here
        </Text>
      </View>
    </>
  );
}

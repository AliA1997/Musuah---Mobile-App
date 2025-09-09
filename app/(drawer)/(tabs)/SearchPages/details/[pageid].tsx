
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function WikiPageDetail() {
  const { pageid } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Wiki Page ID: {pageid}</Text>
      {/* Add your page content here */}
    </View>
  );
}
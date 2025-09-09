
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function WikiBookDetail() {
  const { bookid } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Wiki Book ID: {bookid}</Text>
      {/* Add your page content here */}
    </View>
  );
}
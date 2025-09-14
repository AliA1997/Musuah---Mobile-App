
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import WikibookPage from '~/components/WikibookPage';

export default function WikiBookDetail() {
  
  return <WikibookPage />
  // return (
  //   <View style={{ flex: 1, padding: 16 }}>
  //     <Text>Wiki Book ID: {bookid}</Text>
  //     {/* Add your page content here */}
  //   </View>
  // );
}
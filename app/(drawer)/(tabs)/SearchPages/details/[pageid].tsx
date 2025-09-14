
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import WikiPage from '~/components/WikiPage';

export default function WikiPageDetail() {
  const { pageid } = useLocalSearchParams();
  
  return (
    <WikiPage />
  );
}
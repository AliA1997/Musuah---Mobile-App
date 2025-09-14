import { Stack } from 'expo-router';
import { HeaderButton } from '../../../../components/HeaderButton';
import { Text, View } from 'react-native';

const SearchWikiBooks = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerTitle: 'Search Books and Studies',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="details/[bookid]"
      options={{
        headerTitle: '',
      }}
    />
  </Stack>
);

export default SearchWikiBooks;
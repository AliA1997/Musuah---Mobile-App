import { Stack } from 'expo-router';

const SearchWikiPages = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerTitle: 'Search Pages'
      }}
    />
    <Stack.Screen
      name="details/[pageid]"
      options={{
        headerTitle: '',
      }}
    />
  </Stack>
);

export default SearchWikiPages;
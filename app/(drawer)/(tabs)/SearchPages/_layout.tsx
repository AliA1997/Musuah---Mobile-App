import { Stack } from 'expo-router';
import { HeaderButton } from '../../../../components/HeaderButton';

const SearchWikiPages = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerTitle: 'Search Pages'
      }}
    />
    {/* Dynamic route for wiki pages using pageid */}
    <Stack.Screen
      name="[pageid]"
      options={{
        headerTitle: 'Wiki Page',
        // You can make this dynamic based on the pageid
        headerBackTitle: 'Back', // iOS only
      }}
    />
  </Stack>
);

export default SearchWikiPages;
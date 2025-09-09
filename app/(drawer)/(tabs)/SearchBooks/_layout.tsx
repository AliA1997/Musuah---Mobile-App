import { Stack } from 'expo-router';
import { HeaderButton } from '../../../../components/HeaderButton';

const SearchWikiBooks = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerTitle: 'Search Books and Studies'
      }}
    />
    {/* Dynamic route for wiki pages using pageid */}
    <Stack.Screen
      name="[bookid]"
      options={{
        headerTitle: 'Wiki Book',
        // You can make this dynamic based on the pageid
        headerBackTitle: 'Back', // iOS only
      }}
    />
  </Stack>
);

export default SearchWikiBooks;
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ChatbotIcon from '~/components/icons/ChatbotIcon';
import EBooksIcon from '~/components/icons/EBooksIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="SearchPages"
        options={{
          title: 'Search Pages',
          tabBarIcon: ({ color }) => <Ionicons name="search-circle" size={25} color={color} />
        }}
      />
      <Tabs.Screen
        name="SearchBooks"
        options={{
          title: 'Books And Studies',
          tabBarIcon: ({ color }) => <EBooksIcon width={30} height={30} />,
        }}
      />
      <Tabs.Screen
        name="AIChat"
        options={{
          title: 'Use AI',
          tabBarIcon: ({ color }) => <ChatbotIcon width={30} height={30} />,
        }}
      />
    </Tabs>
  );
}

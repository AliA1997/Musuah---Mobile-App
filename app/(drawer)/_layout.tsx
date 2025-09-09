import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
      headerPressColor: '#124a28',
      drawerActiveTintColor: '#4e755eff',
      headerTintColor: '#124a28',
    }}
  >
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'السلام عليكم',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={'#124a28'} />,
      }}
    />
    <Drawer.Screen
      name="PrivacyPolicy"
      options={{
        headerTitle: 'Privacy Policy',
        drawerLabel: 'Privacy Policy',
        drawerIcon: ({ size, color }) => <Ionicons name="document-outline" size={size} color={'#124a28'} />,
      }}
    />
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'More',
        drawerLabel: 'More',
        drawerIcon: ({ size, color }) => (
          <Entypo name="dots-three-horizontal" size={24} color="black" />),
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />
    <Drawer.Screen
      name="English"
      options={{
        headerTitle: 'English',
        drawerLabel: 'English',
      }}
    />
    <Drawer.Screen
      name="French"
      options={{
        headerTitle: 'French',
        drawerLabel: 'French',
      }}
    />
    <Drawer.Screen
      name="German"
      options={{
        headerTitle: 'German',
        drawerLabel: 'German',
      }}
    />
    <Drawer.Screen
      name="Arabic"
      options={{
        headerTitle: 'Arabic',
        drawerLabel: 'Arabic',
      }}
    />
    <Drawer.Screen
      name="Chinese"
      options={{
        headerTitle: 'Chinese',
        drawerLabel: 'Chinese',
      }}
    />
    <Drawer.Screen
      name="Spanish"
      options={{
        headerTitle: 'Spanish',
        drawerLabel: 'Spanish',
      }}
    />
  </Drawer>
);

export default DrawerLayout;

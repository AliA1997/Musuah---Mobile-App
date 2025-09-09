import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Linking,
  Platform,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from  '@expo/vector-icons';
// Custom components to replace Chakra UI components
const Box = ({ children, style, ...props }: any) => (
  <View style={style} {...props}>{children}</View>
);

const Heading = ({ as: Component = Text, id, children, size = 'md', style, ...props }: any) => {
  const fontSize = 16;

  const fontWeight = 'bold';
  const marginBottom =  10;

  return (
    <Component
      style={[
        { fontSize, fontWeight, marginBottom },
        style
      ]}
      {...props}
    >
      {children}
    </Component>
  );
};

const Link = ({ href, children, color = '#3182CE', onPress, style, ...props }: any) => {
  const handlePress = () => {
    if (href) {
      Linking.openURL(href).catch(err => console.error('Failed to open URL:', err));
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[{ color, textDecorationLine: 'underline' }, style]} {...props}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const Button = ({ children, onPress, variant = 'solid', size = 'md', style, ...props }: any) => {
  const buttonStyle = [
    styles.button,
    variant === 'ghost' && styles.buttonGhost,
    size === 'sm' && styles.buttonSmall,
    style
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
      <Text style={variant === 'ghost' ? styles.buttonGhostText : styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const Collapsible = ({ open, children }: any) => {
  const [height] = useState(new Animated.Value(open ? 1 : 0));

  React.useEffect(() => {
    Animated.timing(height, {
      toValue: open ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [open, height]);

  const contentHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000], // Adjust based on content height
  });

  return (
    <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
      <View>{children}</View>
    </Animated.View>
  );
};

const Flex = ({ children, justify, style, ...props }: any) => (
  <View style={[{
    flexDirection: 'row',
    justifyContent: justify === 'flex-end' ? 'flex-end' : 'flex-start',
  }, style]} {...props}>
    {children}
  </View>
);

const Icon = ({ as: IconComponent, w = 4, h = 4, style, ...props }: any) => (
  <IconComponent size={w} style={[{ width: w, height: h }, style]} {...props} />
);

export const PrivacyPolicyCollectionPart1 = () => {
  const [isPublicInfoOpen, setIsPublicInfoOpen] = useState(false);
  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const isTablet = width >= 768;

  const togglePublicInfo = () => setIsPublicInfoOpen(!isPublicInfoOpen);
  const toggleUsername = () => setIsUsernameOpen(!isUsernameOpen);

  const scrollToTop = () => {
    // You might need a ref to your ScrollView to implement this
    // For now, we'll use a simple navigation approach
    navigation.navigate('PrivacyPolicy' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Main Heading */}
        <View style={styles.headingContainer}>
          <Heading as={Text} id="Collection_&_Use_of_Info" size="lg" style={styles.mainHeading}>
            {isTablet && (
              <TouchableOpacity 
                onPress={() => Linking.openURL('/wiki/File:WMF_chart.png')}
                style={styles.imageContainer}
              >
                <Image
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/WMF_chart.png/60px-WMF_chart.png' }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            Collection & Use of Info
          </Heading>
        </View>

        {/* Right Floating Content */}
        <View style={[styles.contentContainer, isTablet && styles.tabletContentContainer]}>
          <View id="types-of-info" />

          {/* Types of Information Section */}
          <View style={styles.section}>
            <Heading as={Text} id="Types_of_Information_We_Receive_From_You_&_How_We_Get_It" size="md">
              Types of Information We Receive From You & How We Get It
            </Heading>
          </View>

          <View id="your-public-contribs" />

          {/* Public Contributions Section */}
          <View style={styles.section}>
            <Heading as={Text} id="Your_Public_Contributions" size="sm">
              Your Public Contributions
            </Heading>
          </View>

          <Text style={styles.paragraph}>
            When you make a contribution to any Wikimedia Site, including on user or discussion pages, you are creating a permanent, public record of every piece of content added, removed, or altered by you. The page history will show when your contribution or deletion was made, as well as your username (if you are signed in) or your{' '}
            <Link href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#ip-address">
              IP address
            </Link>{' '}
            (if you are not signed in). We may use your public contributions, either aggregated with the public contributions of others or individually, to create new features or data-related products for you or to learn more about how the Wikimedia Sites are used, as further explained below in the{' '}
            <Link onPress={() => Linking.openURL('#infowereceive')}>
              "How We Use Information We Receive From You"
            </Link>{' '}
            section of this Privacy Policy.
          </Text>

          {/* Collapsible Public Info Table */}
          <View style={styles.collapsibleContainer}>
            <View style={styles.collapsibleHeader}>
              <Button
                variant="ghost"
                onPress={togglePublicInfo}
                size="sm"
                style={styles.toggleButton}
              >
                {isPublicInfoOpen ? 'Collapse' : 'Expand'}
              </Button>
              <View style={styles.collapsibleTitle}>
                <Text style={styles.collapsibleTitleText}>Publicly Visible Information</Text>
              </View>
            </View>
            <Collapsible open={isPublicInfoOpen}>
              <View style={styles.collapsibleContent}>
                <Text style={styles.paragraph}>
                  Unless this Policy says otherwise, you should assume that information that you actively contribute to the Wikimedia Sites, including Personal Information, is publicly visible and can be found by search engines. Like most things on the Internet, anything you share may be copied and redistributed throughout the Internet by other people. Please do not contribute any information that you are uncomfortable making permanently public, like revealing your real name or location in your contributions.
                </Text>
                <Text style={[styles.paragraph, styles.marginTop]}>
                  You should be aware that specific data made public by you or aggregated data that is made public by us can be used by anyone for analysis and to infer further information, such as which country a user is from, political affiliation and gender.
                </Text>
              </View>
            </Collapsible>
          </View>

          {isTablet && (
            <Flex justify="flex-end" style={styles.backToTop}>
              <Link onPress={scrollToTop} style={styles.backToTopLink}>
                Back to top
              </Link>
              <Link onPress={scrollToTop}>
                <FontAwesome name="arrow-up" size={16} color='black'/>
              </Link>
            </Flex>
          )}

          {/* Account Information Section */}
          <View id="your-account-info" />
          <View style={styles.section}>
            <Heading as={Text} id="Account_Information_&_Registration" size="sm">
              Account Information & Registration
            </Heading>
          </View>

          <Text style={styles.paragraph}>
            Want to create an account? Great! Do not want to create an account? No problem!
          </Text>
          <Text style={styles.paragraph}>
            <Text id="notrequired" />
            You are not required to create an account to read or contribute to a Wikimedia Site, except under{' '}
            <Link href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Frequently_asked_questions#needaccount">
              rare circumstances
            </Link>. However, if you contribute without signing in, your contribution will be publicly attributed to the{' '}
            <Link href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#ip-address">
              IP address
            </Link>{' '}
            associated with your device.
          </Text>
          <Text style={styles.paragraph}>
            <Text id="noaccount" />
            If you want to create a{' '}
            <Link href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Frequently_asked_questions#standardaccount">
              standard account
            </Link>, in most cases we require only a username and a password. However, if you choose not to provide an email address, we cannot help you recover your password.
          </Text>

          {/* Collapsible Username Table */}
          <View style={styles.collapsibleContainer}>
            <View style={styles.collapsibleHeader}>
              <Button
                variant="ghost"
                onPress={toggleUsername}
                size="sm"
                style={styles.toggleButton}
              >
                {isUsernameOpen ? 'Collapse' : 'Expand'}
              </Button>
              <View style={styles.collapsibleTitle}>
                <Text style={styles.collapsibleTitleText}>More on Usernames</Text>
              </View>
            </View>
            <Collapsible open={isUsernameOpen}>
              <View style={styles.collapsibleContent}>
                <Text style={styles.paragraph}>
                  Your username will be publicly visible, so please be careful about revealing your real name or other Personal Information in your username. Your password is only used to verify that the account is yours. Your{' '}
                  <Link href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#ip-address">
                    IP address
                  </Link>{' '}
                  is also automatically submitted to us, and we record it temporarily. This is to protect Wikimedia users and project content; in the event of abuse, IP addresses may be associated with usernames as part of an investigation. No other Personal Information is required: no name, no email address, no date of birth, and no credit card information.
                </Text>
                <Text style={[styles.paragraph, styles.marginTop]}>
                  Once created, user accounts cannot be removed entirely (although you can usually hide the information on your user page if you choose to). This is because your public contributions must be associated with their author (you!). In some circumstances, the Wikimedia communities{' '}
                  <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Right_to_vanish">
                    can assist
                  </Link>{' '}
                  users with removing additional information related to their account from the projects.
                </Text>
              </View>
            </Collapsible>
          </View>

          <Text style={styles.paragraph}>
            To gain a better understanding of the demographics of our users, to localize our services and to learn how we can improve our services, we may ask you for more demographic information, such as gender or age, about yourself. We will tell you if such information is intended to be public or private, so that you can make an informed decision about whether you want to provide us with that information. Providing such information is always completely optional. If you do not want to, you do not have to—it is as simple as that.
          </Text>

          {isTablet && (
            <Flex justify="flex-end" style={styles.backToTop}>
              <Link onPress={scrollToTop} style={styles.backToTopLink}>
                Back to top
              </Link>
              <Link onPress={scrollToTop}>
                <FontAwesome name="arrow-up" size={16} color='black'/>
              </Link>
            </Flex>
          )}

          {/* Continue with other sections following the same pattern */}
          {/* Location Information, Metadata, IP Addresses sections would follow similar patterns */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  mainHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 8,
  },
  image: {
    width: 60,
    height: 60,
  },
  contentContainer: {
    padding: 16,
  },
  tabletContentContainer: {
    width: '100%',
  },
  section: {
    marginTop: 24,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2D3748',
    marginBottom: 16,
  },
  marginTop: {
    marginTop: 16,
  },
  collapsibleContainer: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  collapsibleHeader: {
    backgroundColor: '#EBF8FF',
  },
  toggleButton: {
    padding: 8,
    alignSelf: 'center',
  },
  collapsibleTitle: {
    backgroundColor: '#BEE3F8',
    padding: 16,
  },
  collapsibleTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  collapsibleContent: {
    padding: 16,
  },
  backToTop: {
    marginTop: 16,
    alignItems: 'center',
  },
  backToTopLink: {
    marginRight: 8,
  },
  button: {
    backgroundColor: '#3182CE',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonGhost: {
    backgroundColor: 'transparent',
  },
  buttonSmall: {
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonGhostText: {
    color: '#3182CE',
    fontWeight: '600',
  },
});
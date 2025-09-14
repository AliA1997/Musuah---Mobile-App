import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom collapsible section component to replace Chakra UI's Collapsible
const CollapsibleSection: React.FC<{ title: string; children: React.ReactNode }> = ({ 
  title, 
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity onPress={toggleOpen} style={styles.collapsibleHeader}>
        <Text style={styles.collapsibleTitle}>{title}</Text>
        <Text style={styles.collapsibleIcon}>{isOpen ? '▼' : '►'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};

// Custom list component
const CustomList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export const PrivacyPolicyCollectionPart2 = () => {
  const navigation = useNavigation();

  const handleLinkPress = (url: string) => {
    if (url.startsWith('mailto:')) {
      Linking.openURL(url);
    } else if (url.startsWith('/')) {
      // Handle internal navigation
      navigation.navigate(url as never);
    } else {
      // Handle external links
      Linking.openURL(url).catch(err => 
        console.error('Failed to open URL:', err)
      );
    }
  };

  const scrollToTop = () => {
    // You might need a ref to your ScrollView to implement this
    // For simplicity, we'll just navigate to top
    console.log('Scroll to top functionality');
  };

  const listItems = [
    "Provide you with a customizable experience, such as using cookies to know your language preference, to remember the user preferences you set so we can provide you with the customized look and feel that you want, and to tell you about interesting Qamar Labs issues and events in your area.",
    "Deliver more relevant content to you faster. For example, we use local storage to store your most recently read articles directly on your device, so they can be retrieved quickly. Also, we use cookies to learn about the topics searched so that we can optimize the search results we deliver to you.",
    "Understand how you use the Qamar Labs Sites, so that we know what works and what is useful. For example, we might use cookies to learn about the list of articles you are following on your watchlist so that we can recommend similar articles that you may be interested in.",
    "Understand how you use the Qamar Labs Sites across different devices, so that we can make our varied Qamar Labs Sites more efficient and effective for you.",
    "Make the Qamar Labs Sites more convenient to use, such as by using cookies to maintain your session when you log in or to remember your username in the login field."
  ];

  return (
    <ScrollView style={styles.container}>
      {/* First section */}
      <View style={styles.section}>
        <Text style={styles.text}>
          We want to make the Qamar Labs Sites better for you by learning more about how you use them. Examples of this might include how often you visit the Qamar Labs Sites, what you like, what you find helpful, how you get to the Qamar Labs Sites, and whether you would use a helpful feature more if we explained it differently. We also want this Policy and our practices to reflect our community's values. For this reason, we keep information related to your use of the Qamar Labs Sites confidential, except as provided in this Policy.
        </Text>
        <TouchableOpacity style={styles.backToTop} onPress={scrollToTop}>
          <Text style={styles.link}>Back to top</Text>
        </TouchableOpacity>
      </View>

      {/* Information We Receive Automatically section */}
      <View style={styles.section}>
        <Text style={styles.heading} id="Information_We_Receive_Automatically">
          Information We Receive Automatically
        </Text>
        <Text style={styles.text}>
          Because of how browsers work, we receive some information automatically when you visit the Qamar Labs Sites. This includes when you use an online tool on a third-party site that loads information coming from the Qamar Labs Sites. This information includes the type of device you are using (possibly including unique device identification numbers, for some beta versions of our mobile applications), the type and version of your{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#browsers')}>
            browser
          </Text>
          , your browser's language preference, the type and version of your device's{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#operating-system')}>
            operating system
          </Text>
          , in some cases the name of your internet service provider or mobile carrier, the website that referred you to the Qamar Labs Sites, which pages you request and visit, and the date and time of each request you make to the Qamar Labs Sites.
        </Text>
        <Text style={styles.text}>
          Put simply, we use this information to enhance your experience with Qamar Labs Sites. For example, we use this information to administer the sites, provide greater security, and fight vandalism; optimize mobile applications, customize content and set language preferences, test features to see what works, and improve performance; understand how users interact with the Qamar Labs Sites, track and study use of various features, gain understanding about the demographics of the different Qamar Labs Sites, and analyze trends.
        </Text>
        <TouchableOpacity style={styles.backToTop} onPress={scrollToTop}>
          <Text style={styles.link}>Back to top</Text>
        </TouchableOpacity>
      </View>

      {/* Information We Collect section */}
      <View style={styles.section}>
        <Text style={styles.heading} id="Information_We_Collect">
          Information We Collect
        </Text>
        <Text style={styles.text}>
          We actively collect some types of information with a variety of commonly-used technologies. These generally include{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#tracking-pixel')}>
            tracking pixels
          </Text>
          ,{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#javascript')}>
            JavaScript
          </Text>
          , and a variety of "locally stored data" technologies, such as{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#cookies')}>
            cookies
          </Text>
          {' '}and{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#local-storage')}>
            local storage
          </Text>
          . These types of technologies may also be used in online tools on a third-party site that loads information from the Qamar Labs Sites. We realize that some of these technologies do not have the best reputation in town and can be used for less-than-noble purposes. So we want to be as clear as we can about why we use these methods and the type of information we collect with them.
        </Text>
        <Text style={styles.text}>
          Depending on which technology we use, locally stored data may include text, Personal Information (like your{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Glossary_of_key_terms#ip-address')}>
            IP address
          </Text>
          ), and information about your use of the Qamar Labs Sites (like your username or the time of your visit). See below for more information.
        </Text>
        <Text style={styles.text}>
          We use this information to make your experience with the Qamar Labs Sites safer and better, to gain a greater understanding of user preferences and their interaction with the Qamar Labs Sites, and to generally improve our services. We will never use third-party cookies, unless we get your permission to do so. If you ever come across a third-party data collection tool that has not been authorized by you (such as one that may have been mistakenly placed by another user or administrator), please report it to us at{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('mailto:novigo.ali@gmail.com')}>
            privacy@qamarlabs.netlify.app
          </Text>
          .
        </Text>

        <CollapsibleSection title="More on Locally Stored Data">
          <Text style={styles.text}>Locally stored data, JavaScript, and tracking pixels help us do things like:</Text>
          <CustomList items={listItems} />
        </CollapsibleSection>

        <Text style={styles.text} id="KnowMoreCookiesReturn">
          Want to know even more? You can read more about some of the specific cookies we use, when they expire, and what we use them for in our{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Frequently_asked_questions#cookieFAQ')}>
            FAQ
          </Text>
          .
        </Text>
        <Text style={styles.text} id="LimitStorageReturn">
          We believe this data collection helps improve your user experience, but you may remove or disable some or all locally stored data through your browser settings, depending on your browser. You can learn more about some options you have in our{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Special:MyLanguage/Policy:Privacy_policy/Frequently_asked_questions#limitstorageFAQ')}>
            FAQ
          </Text>
          . While locally stored data may not be necessary to use our sites, some features will not function properly if you disable locally stored data.
        </Text>
        <Text style={styles.text} id="PublicLogsReturn">
          While the examples above concerning information about you collected through the use of data collection tools are kept confidential in accordance with this Policy, please note that some information about the actions taken by your username is made publicly available through{' '}
          <Text style={styles.link} onPress={() => handleLinkPress('/wiki/Privacy_policy/FAQ#publiclogsFAQ')}>
            public logs
          </Text>
          {' '}alongside actions taken by other users. For example, a public log may include the date your account was created on a Qamar Labs Site along with the dates that other accounts were created on a Qamar Labs Site.
        </Text>
        <TouchableOpacity style={styles.backToTop} onPress={scrollToTop}>
          <Text style={styles.link}>Back to top</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2D3748',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#4A5568',
  },
  link: {
    color: '#3182CE',
    textDecorationLine: 'underline',
  },
  backToTop: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  collapsibleContainer: {
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F7FAFC',
  },
  collapsibleTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  collapsibleIcon: {
    fontSize: 12,
  },
  collapsibleContent: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    marginLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    marginRight: 8,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#4A5568',
  },
});

export default PrivacyPolicyCollectionPart2;
import React from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

export const PrivacyPolicyProtection = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Assuming 768px as the breakpoint for mobile

  const sections = [
    {
      id: "protection-means",
      title: "How Do We Protect Your Personal Information?",
      level: 3,
      content: (
        <>
          <Text style={styles.paragraph}>
            We strive to protect your Personal Information from unauthorized access, use, or disclosure. We use a variety of physical and technical measures, policies, and procedures (such as access control procedures, network firewalls, and physical security) designed to protect our systems and your Personal Information. Unfortunately, there is no such thing as completely secure data transmission or storage, so we cannot guarantee that our security will not be breached (by technical measures or through violation of our policies and procedures).
          </Text>
          <Text style={styles.paragraph}>
            We will never ask for your password by email (but may send you a temporary password via email if you have requested a password reset). If you ever receive an email that requests your password, <Text style={styles.underline}>please let us know by sending it to privacy@qamarlabs.netlify.app, so we can investigate the source of the email</Text>.
          </Text>
        </>
      ),
    },
    {
      id: "protection-duration",
      title: "How Long Do We Keep Your Data?",
      level: 3,
      content: (
        <>
          <Text style={styles.paragraph}>
            Once we receive Personal Information from you, we keep it for the shortest possible time that is consistent with the maintenance, understanding, and improvement of the Qamar Labs Sites, and our obligations under applicable law. In most instances, Personal Information is deleted, aggregated or de-identified after 90 days. Non-Personal Information may be retained indefinitely as appropriate. (Check out the list of examples in our{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://qamarlabs.netlify.app/")}
            >
              FAQ
            </Text>
            .)
          </Text>
          <Text style={styles.paragraph}>
            <Text nativeID="rememberIPindef" />
            Please remember that when you make a contribution to any Qamar Labs Site, the page history will show when your contribution was made, your username (if you are signed in), or your{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://qamarlabs.netlify.app/")}
            >
              IP address
            </Text>{" "}
            (if you edit while not logged in). The transparency of the projects' contribution and revision histories is critical to their efficacy and trustworthiness. To learn more about our data retention practices, see our{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://qamarlabs.netlify.app/")}
            >
              data retention guidelines
            </Text>
            .
          </Text>
        </>
      ),
    },
    {
      id: "your_rights",
      title: "Your rights",
      level: 3,
      content: (
        <>
          <Text style={styles.paragraph}>
            For information about how you may request removal of your Personal Information, or other rights you may have with respect to your Personal Information, see our{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://qamarlabs.netlify.app/")}
            >
              FAQ
            </Text>
            . If you would like to request to access, update or restrict/object to the processing of Personal Information, or receive a copy of your Personal Information for purposes of transmitting it to another organization, you may{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://qamarlabs.netlify.app/")}
            >
              Contact Us
            </Text>
            . We will respond to your request consistent with applicable law.
          </Text>
          <Text style={styles.paragraph}>
            Please note also that you may be able to exercise some of these rights without our intervention. For example, if you are a registered user, you can access and update some Personal Information in your Preferences, as well as download your user account data. You may also manage what kinds of notifications you receive and how often you receive them by going to your Notifications Preferences.
          </Text>
        </>
      ),
    },
  ];

  const renderHeading = (level: number, title: string, id: string) => {
    switch (level) {
      case 2:
        return (
          <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading2]} nativeID={id}>
              {title}
            </Text>
          </View>
        );
      case 3:
        return (
          <Text style={[styles.heading, styles.heading3]} nativeID={id}>
            {title}
          </Text>
        );
      default:
        return (
          <Text style={[styles.heading, styles.heading4]} nativeID={id}>
            {title}
          </Text>
        );
    }
  };

  const handleBackToTop = () => {
    // Scroll to top functionality
    // You might need to use a ref to your ScrollView for this to work
    console.log("Back to top pressed");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.content, isMobile ? styles.mobileContent : styles.desktopContent]}>
        {renderHeading(2, "Protection", "Protection")}
        
        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <View nativeID={section.id} />
            {renderHeading(section.level, section.title, section.title.replace(/\s+/g, "_"))}
            {section.content}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  mobileContent: {
    width: '100%',
  },
  desktopContent: {
    width: '70%',
    alignSelf: 'flex-end',
    paddingLeft: 32,
  },
  section: {
    marginBottom: 32,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 20,
  },
  heading4: {
    fontSize: 18,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  paragraph: {
    marginBottom: 16,
    lineHeight: 20,
    fontSize: 16,
  },
  link: {
    color: '#3182CE',
    textDecorationLine: 'underline',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  backToTopContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 16,
  },
  arrowIcon: {
    width: 11,
    height: 11,
    marginLeft: 8,
  },
});
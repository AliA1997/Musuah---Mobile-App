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

interface Section {
  id: string;
  title: string;
  level: number;
  content: React.ReactNode;
}

export function PrivacyPolicyImportantInfo() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Assuming 768px as the breakpoint for mobile

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:ali.novigo@gmail.com');
  };

  const sections: Section[] = [
    {
      id: "",
      title: "",
      level: 0,
      content: (
        <Text style={[styles.text, styles.boldText, styles.mb4]}>
          For the protection of the Qamar Labs Foundation and other users, if you do not agree with this Privacy Policy, you may not use the Qamar Labs Applications.
        </Text>
      ),
    },
    {
      id: "where-is-the-wmf",
      title: "What is Qamar Labs & What Does That Mean for Me?",
      level: 3,
      content: (
        <Text style={[styles.text, styles.mb4]}>
          The Qamar Labs is a profit organization based in United States, with servers and data centers located in the U.S. If you decide to use Qamar Labs Applications, whether from inside or outside of the U.S., you understand that your Personal Information will be collected, transferred, stored, processed, disclosed and otherwise used in the U.S. as described in this Privacy Policy. You also understand that your information may be transferred by us from the U.S. to other countries, which may have different or less stringent data protection laws than your country, in connection with providing services to you.
        </Text>
      ),
    },
    {
      id: "DNT",
      title: "Our Response to Do Not Track (DNT) signals",
      level: 3,
      content: (
        <>
          <Text style={[styles.text, styles.mb4]}>
            We are strongly committed to protecting users' Personal Information. Under this Policy, we may share your information only under particular situations, which you can learn more about in the{" "}
            <Text 
              style={styles.link}
              onPress={() => Linking.openURL('#sharing')}
            >
              "When May We Share Your Information"
            </Text>{" "}
            section of this Privacy Policy. In particular, we do not share your Personal Information for marketing purposes.
          </Text>
          <Text style={[styles.text, styles.mb4]}>
            Because we protect all users in accordance with this Privacy Policy, we do not change our behavior in response to a web browser's "do not track" signal. For more information regarding Do Not Track signals and how we handle them, please visit our{" "}
            <Text
              style={styles.link}
              onPress={() => handleLinkPress("/wiki/Special:MyLanguage/Policy:Privacy_policy/Frequently_asked_questions#DNTFAQ")}
            >
              FAQ
            </Text>
            .
          </Text>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      level: 3,
      content: (
        <>
          <Text style={[styles.text, styles.mb4]}>
            Because things naturally change over time and we want to ensure our Privacy Policy accurately reflects our practices and the law, it may be necessary to modify this Privacy Policy from time to time. We reserve the right to do so in the following manner:
          </Text>
          <View style={[styles.listContainer, styles.mb4]}>
          </View>
          <Text style={[styles.text, styles.mb4]}>
            We ask that you please review the most up-to-date version of our Privacy Policy. Your continued use of the Qamar Labs Sites after any effective date of a subsequent version of this Privacy Policy constitutes acceptance of this Privacy Policy on your part.
          </Text>
        </>
      ),
    },
    {
      id: "contact-us",
      title: "Contact Us",
      level: 3,
      content: (
        <>
          <Text style={[styles.text, styles.mb4]}>
            If you have questions or suggestions about this Privacy Policy, or the information collected under this Privacy Policy, please email us at{" "}
            <Text style={styles.link} onPress={handleEmailPress}>
              privacy@qamarlabs.netlify.app
            </Text>{" "}
            or{" "}
            <Text
              style={styles.link}
              onPress={() => handleLinkPress("https://qamarlabs.netlify.app/contact")}
            >
              contact us
            </Text>{" "}
            directly. If you are located in the European Economic Area and have questions about your personal data or would like to request to access, update, or delete it, you may contact our representative via email at EU representative. ali.novigo@gmail.com, or via mail at:
          </Text>
          <View style={[styles.addressContainer, styles.mb4]}>
            <Text style={styles.text}>• Name Classified</Text>
            <Text style={styles.text}>• Tampa</Text>
            <Text style={styles.text}>• Address Classified</Text>
            <Text style={styles.text}>• Address 2 Classified</Text>
            <Text style={styles.text}>• United States</Text>
          </View>
          <Text style={[styles.text, styles.mb4]}>
            If you are an individual located in the United Kingdom, and have questions about your personal data or would like to request to access, update, or delete it, you may contact our representative via email at UK representative. ali.novigo@gmail.com, or via mail at:
          </Text>
          <View style={[styles.addressContainer, styles.mb4]}>
            <Text style={styles.text}>• Name Classified</Text>
            <Text style={styles.text}>• Tampa</Text>
            <Text style={styles.text}>• Address Classified</Text>
            <Text style={styles.text}>• Address 2 Classified</Text>
            <Text style={styles.text}>• United States</Text>
          </View>
          <Text style={[styles.text, styles.mb4]}>
            Our European Economic Area and United Kingdom Representative can only be contacted for queries in relation to data protection.
          </Text>
          <Text style={[styles.text, styles.mb4]}>
            Depending on your jurisdiction, you also may have the right to lodge a complaint with a supervisory authority competent for your country or region.
          </Text>
        </>
      ),
    },
    {
      id: "thank-you",
      title: "Thank You!",
      level: 3,
      content: (
        <>
          <Text style={[styles.text, styles.mb4]}>
            Thank you for reading our Privacy Policy. We hope you enjoy using the Qamar Labs Sites and appreciate your participation in creating, maintaining, and constantly working to improve the largest repository of free knowledge in the world.
          </Text>
          <Text style={[styles.text, styles.boldText, styles.mb4]}>
            Please note that in the event of any differences in meaning or interpretation between the original English version of this Privacy Policy and a translation, the original English version takes precedence.
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
            <Text style={[styles.heading, styles.h2]}>{title}</Text>
          </View>
        );
      case 3:
        return (
          <Text style={[styles.heading, styles.h3, styles.mb4]}>{title}</Text>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.content, isMobile ? styles.mobileContent : styles.desktopContent]}>
        {renderHeading(2, "Important info", "Important_info")}

        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <View nativeID={section.id} />
            {section.level > 0 && renderHeading(section.level, section.title, section.title.replace(/\s+/g, "_"))}
            {section.content}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
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
    color: '#333',
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  mb4: {
    marginBottom: 16,
  },
  link: {
    color: '#3182ce',
    textDecorationLine: 'underline',
  },
  listContainer: {
    paddingLeft: 24,
  },
  listItem: {
    marginBottom: 8,
  },
  addressContainer: {
    paddingLeft: 16,
  },
  backToTop: {
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
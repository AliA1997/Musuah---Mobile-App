import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from 'react-native';

interface Section {
  id: string;
  title: string;
  level: number;
  content: React.ReactNode;
}

export const PrivacyPolicySharing = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  const LinkText = ({ href, children }: { href: string; children: string }) => (
    <Text style={styles.link} onPress={() => handleLinkPress(href)}>
      {children}
    </Text>
  );

  const sections: Section[] = [
    {
      id: "when-we-may-share",
      title: "When May We Share Your Information?",
      level: 3,
      content: null,
    },
    {
      id: "share-with-permission",
      title: "With Your Permission",
      level: 4,
      content: (
        <Text style={styles.paragraph}>
          We share your Personal Information for a particular purpose, if you agree. For example, if
          you receive a scholarship and we ask permission to share your Personal Information with a
          local chapter. You can find more information in the list of examples in our{' '}
          <LinkText href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Frequently_asked_questions#permissionexamplesFAQ">
            FAQ
          </LinkText>.
        </Text>
      ),
    },
    {
      id: "share-legal-reasons",
      title: "For Legal Reasons",
      level: 4,
      content: (
        <>
          <Text style={styles.paragraph}>
            We will access, use, preserve, and/or disclose your Personal Information if we reasonably
            believe it necessary to satisfy a valid and legally enforceable warrant, subpoena, court
            order, law or regulation, or other judicial or administrative order.
          </Text>
          <Text style={styles.paragraph}>
            Nothing in this Privacy Policy is intended to limit any legal objections or defenses you
            may have to a third-party's request to disclose your Personal Information.
          </Text>
          <Text style={styles.paragraph}>
            For more information, see our{' '}
            <LinkText href="/wiki/Special:MyLanguage/Policy:Privacy_policy/Subpoena_frequently_asked_questions">
              Subpoena FAQ
            </LinkText>.
          </Text>
        </>
      ),
    },
    {
      id: "share-org-transfer",
      title: "If the Organization is Transferred",
      level: 4,
      content: (
        <Text style={styles.paragraph}>
          In the extremely unlikely event that ownership of the Foundation changes, or we go through
          a reorganization, we will continue to keep your Personal Information confidential and
          provide notice to you.
        </Text>
      ),
    },
    {
      id: "share-to-protect-people",
      title: "To Protect You, Ourselves & Others",
      level: 4,
      content: (
        <>
          <Text style={styles.paragraph}>
            We need to use and share your Personal Information if it is reasonably believed to be
            necessary to enforce or investigate potential violations of our Terms of Use or policies.
          </Text>
          <Text style={styles.paragraph}>
            We may disclose your Personal Information if we believe that it is reasonably necessary
            to prevent imminent and serious bodily harm or death to a person.
          </Text>
        </>
      ),
    },
    {
      id: "share-to-our-sp",
      title: "To Our Service Providers",
      level: 4,
      content: (
        <>
          <Text style={styles.paragraph}>
            We use third-party service providers to help run or improve the Qamar Labs Sites. We put
            requirements in place to ensure these service providers treat your Personal Information
            consistently with this Policy.
          </Text>
        </>
      ),
    },
    {
      id: "share-to-experiment",
      title: "To Understand & Experiment",
      level: 4,
      content: (
        <>
          <Text style={styles.paragraph}>
            We give some developers limited access to systems that contain your Personal Information
            to help improve the Qamar Labs Sites.
          </Text>
          <Text style={styles.paragraph}>
            Similarly, we share non-Personal Information with researchers who wish to study the
            Qamar Labs Sites.
          </Text>
        </>
      ),
    },
    {
      id: "share-because-public",
      title: "Because You Made It Public",
      level: 4,
      content: (
        <Text style={styles.paragraph}>
          Any information you post publicly on the Qamar Labs Sites is just that – public. Please think
          carefully about your desired level of privacy before you disclose Personal Information.
        </Text>
      ),
    },
  ];

  const renderHeading = (level: number, title: string) => {
    const headingStyle = [
      styles.heading,
      level === 2 && styles.heading2,
      level === 3 && styles.heading3,
      level === 4 && styles.heading4,
    ];

    return <Text style={headingStyle}>{title}</Text>;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {renderHeading(2, "Sharing")}
        
        {sections.map((section) => (
          <View key={section.id} style={styles.section}>
            {renderHeading(section.level, section.title)}
            {section.content}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  heading2: {
    fontSize: 24,
    marginBottom: 20,
  },
  heading3: {
    fontSize: 20,
  },
  heading4: {
    fontSize: 18,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 12,
  },
  link: {
    color: '#3182CE',
    textDecorationLine: 'underline',
  },
});
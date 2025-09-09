import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
  Platform,
  Pressable,
  LayoutAnimation,
  UIManager,
} from 'react-native';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface LinkProps {
  href: string;
  color?: string;
  children: React.ReactNode;
}

const Link = ({ href, color = '#3182ce', children }: LinkProps) => {
  const handlePress = () => {
    Linking.openURL(href).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <Text style={[styles.link, { color }]} onPress={handlePress}>
      {children}
    </Text>
  );
};

interface CollapsibleProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Collapsible = ({ isOpen, children }: CollapsibleProps) => {
  if (!isOpen) return null;

  return (
    <View style={styles.collapsibleContent}>
      {children}
    </View>
  );
};

interface ListItemProps {
  children: React.ReactNode;
  style?: any;
}

const ListItem = ({ children, style }: ListItemProps) => (
  <View style={[styles.listItem, style]}>
    <Text style={styles.bullet}>• </Text>
    <Text style={styles.listText}>{children}</Text>
  </View>
);

interface ListProps {
  children: React.ReactNode;
  spaceY?: number;
  style?: any;
}

const List = ({ children, spaceY = 4, style }: ListProps) => (
  <View style={[styles.listContainer, { marginVertical: spaceY }, style]}>
    {children}
  </View>
);

export const PrivacyPolicyDefinitions = () => {
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [isNonCoverageOpen, setIsNonCoverageOpen] = useState(false);

  const toggleExamples = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExamplesOpen(!isExamplesOpen);
  };

  const toggleNonCoverage = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsNonCoverageOpen(!isNonCoverageOpen);
  };

  const scrollToTop = () => {
    // You might need a ref to your ScrollView if you want to implement scroll to top
    console.log('Scroll to top functionality');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Because everyone (not just lawyers) should be able to easily understand how and why their information is collected and used, we use common language instead of more formal terms throughout this Policy. To help ensure your understanding of some particular key terms, here is a table of translations:
        </Text>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.columnHeader}>When we say...</Text>
            <Text style={styles.columnHeader}>...we mean:</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"the Wikimedia Foundation" / "the Foundation" / "we" / "us" / "our"</Text>
            <Text style={styles.tableCell}>
              The <Link href="https://wikimediafoundation.org/">
                Wikimedia Foundation, Inc.
              </Link>, the non-profit organization that operates the Wikimedia Sites.
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"Wikimedia Sites" / "our services"</Text>
            <Text style={styles.tableCell}>
              Wikimedia websites and services (regardless of language), including our{" "}
              <Link href="https://wikimediafoundation.org/our-work/wikimedia-projects/">
                main projects
              </Link>, such as Wikipedia and Wikimedia Commons, as well as mobile applications,
              Application Programming Interfaces (APIs), emails, and notifications; excluding, however,
              sites and services listed in the "What This Privacy Policy Does Not Cover" section below.
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"you" / "your" / "me"</Text>
            <Text style={styles.tableCell}>
              You, regardless of whether you are an individual, group, or organization, and regardless
              of whether you are using the Wikimedia Sites or our services on behalf of yourself or someone else.
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"this Policy" / "this Privacy Policy"</Text>
            <Text style={styles.tableCell}>This document, entitled the "Wikimedia Foundation Privacy Policy".</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"contributions"</Text>
            <Text style={styles.tableCell}>Content you add or changes you make to any Wikimedia Sites.</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"Personal information"</Text>
            <Text style={styles.tableCell}>
              Information you provide us or information we collect that could be used to personally identify you.
              To be clear, while we do not necessarily collect all of the following types of information,
              we consider at least the following to be "personal information" if it is otherwise nonpublic
              and can be used to identify you:
              <List style={styles.nestedList}>
                <ListItem>(a) your real name, address, phone number, email address, password, identification number on government-issued ID, IP address, user-agent information, payment account number;</ListItem>
                <ListItem>(b) when associated with one of the items in subsection (a), any sensitive data such as date of birth, gender, sexual orientation, racial or ethnic origins, marital or familial status, medical conditions or disabilities, political affiliation, and religion.</ListItem>
              </List>
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>"third party" / "third parties"</Text>
            <Text style={styles.tableCell}>
              Individuals, entities, websites, services, products, and applications that are not controlled,
              managed, or operated by the Wikimedia Foundation. This includes other Wikimedia users and
              independent organizations or groups who help promote the Wikimedia movement such as{" "}
              <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Wikimedia_chapters">
                Wikimedia chapters
              </Link>,{" "}
              <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Wikimedia_thematic_organizations">
                thematic organizations
              </Link>, and{" "}
              <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Wikimedia_user_groups">
                user groups
              </Link> as well as volunteers, employees, directors, officers,{" "}
              <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Grants:Start/About">
                grant recipients
              </Link>, and contractors of those organizations or groups.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>What This Privacy Policy Does and Does Not Cover</Text>

          <Text style={styles.paragraph}>
            Except as explained below, this Privacy Policy applies to our collection and handling of information
            about you that we receive as a result of your use of any of the Wikimedia Sites. This Policy also
            applies to information that we receive from our partners or other third parties. To understand more
            about what this Privacy Policy covers, please see below.
          </Text>

          <View style={styles.collapsibleSection}>
            <Pressable 
              style={styles.collapsibleHeader}
              onPress={toggleExamples}
            >
              <Text style={styles.collapsibleHeaderText}>Examples of What This Privacy Policy Covers</Text>
              <Text style={styles.collapsibleIcon}>{isExamplesOpen ? '−' : '+'}</Text>
            </Pressable>
          </View>

          <Text style={styles.paragraph}>
            This Privacy Policy, however, does not cover some situations where we may gather or process information.
            For example, some uses may be covered by separate privacy policies (like those of the{" "}
            <Link href="https://shop.wikimedia.org">
              Wikimedia Shop
            </Link>) or sites or services run by third parties (such as third-party developer projects on{" "}
            <Link href="https://labs.wikimedia.org">
              Wikimedia Cloud Services
            </Link>). To understand more about what this Privacy Policy does not cover, please see below.
          </Text>

          <View style={styles.collapsibleSection}>
            <Pressable 
              style={styles.collapsibleHeader}
              onPress={toggleNonCoverage}
            >
              <Text style={styles.collapsibleHeaderText}>More on what the Wikimedia Foundation Privacy Policy does not cover</Text>
              <Text style={styles.collapsibleIcon}>{isNonCoverageOpen ? '−' : '+'}</Text>
            </Pressable>
            
            <Collapsible isOpen={isNonCoverageOpen}>
              <View style={styles.collapsibleInnerContent}>
                <Text style={styles.paragraph}>
                  This section is part of the Privacy Policy and is meant to explain in detail which situations are not covered by our Privacy Policy.
                </Text>

                <Text style={styles.subheading}>Wikimedia Sites and Tools with alternative policies</Text>
                <Text style={styles.paragraph}>
                  Some Wikimedia Foundation websites or tools have alternative privacy policies or provisions that differ from this Privacy Policy. These websites include:
                </Text>
                <List>
                  <ListItem>
                    <Text style={styles.bold}>Wikipedia Store</Text> (covered by{" "}
                    <Link href="https://store.wikimedia.org/pages/copy-of-privacy-policy">
                      the shop's policy
                    </Link>);
                  </ListItem>
                  <ListItem>
                    <Text style={styles.bold}>donate.wikimedia.org</Text>, including the donation process, such as clicking on a donation banner (covered by{" "}
                    <Link href="/wiki/Special:MyLanguage/Policy:Donor_privacy_policy">
                      the Donor Privacy Policy
                    </Link>); and
                  </ListItem>
                  <ListItem>
                    <Text style={styles.bold}>The{" "}
                      <Link href="https://www.mediawiki.org/wiki/Special:MyLanguage/Wikimedia_Apps/Synced_Reading_Lists">
                        Wikipedia Reading Lists Browser Extension
                      </Link></Text>, which is governed by a separate{" "}
                    <Link href="/wiki/Special:MyLanguage/Policy:Wikipedia_Reading_Lists_Browser_Extension_Privacy_Policy">
                      Privacy Policy
                    </Link>. This separate policy will also be made available where the Extension can be downloaded.
                  </ListItem>
                </List>
                <Text style={styles.paragraph}>
                  If a Wikimedia Foundation website is governed by an alternative privacy policy, it will link to such policy. When a Wikimedia Foundation tool is governed by an alternative privacy policy, the page where the tool may be downloaded or enabled will include a link to that policy.
                </Text>

                <Text style={styles.subheading}>Community members</Text>
                <Text style={styles.paragraph}>
                  The Wikimedia Sites are collaborative labors of love that are constantly maintained and updated by a global community of volunteers. This global community of volunteers may sometimes have access to personal Information in order to ensure the functioning of the Wikimedia Sites.
                </Text>
                <List>
                  <ListItem>
                    <Text style={styles.bold}>Administrative volunteers</Text>, such as{" "}
                    <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/CheckUser">
                      CheckUsers
                    </Link> or{" "}
                    <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Stewards">
                      Stewards
                    </Link>. These are volunteers who enforce Wikimedia Site policies and ensure the safety of the Wikimedia Sites. When these administrators access Personal Information that is nonpublic, they are required to comply with our{" "}
                    <Link href="/wiki/Special:MyLanguage/Policy:Access_to_nonpublic_personal_data_policy">
                      Access to nonpublic personal data policy
                    </Link>, as well as other, tool-specific policies.
                  </ListItem>
                  <ListItem>
                    <Text style={styles.bold}>Tool providers</Text>. We support platforms for third-party developers to experiment and develop new tools and sites, such as{" "}
                    <Link href="https://www.mediawiki.org/wiki/Special:MyLanguage/Wikimedia_Cloud_Services">
                      wmflabs.org
                    </Link>. When you use one of the tools developed by these volunteers, you may transfer information to them. When these volunteers access nonpublic information or Personal Information, they are required to comply with the terms governing the particular platform the tool is available on.
                  </ListItem>
                  <ListItem>
                    <Text style={styles.bold}>Other users</Text>. We provide several tools that allow users to communicate with each other. The communications may be covered by this Policy while they pass through our systems, but the users who receive these communications, and what they do with the communications once they receive them, are not covered by this Policy. Examples include:
                    <List style={styles.nestedList}>
                      <ListItem>posting to Foundation-hosted email lists;</ListItem>
                      <ListItem>
                        requesting support from volunteers through our{" "}
                        <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Volunteer_Response_Team">
                          online ticketing system
                        </Link> (email sent to info@wikimedia.org goes to this system);
                      </ListItem>
                      <ListItem>emailing other users through the Wikimedia Sites (for example, by using the "Email this user" feature); and</ListItem>
                      <ListItem>
                        chatting on{" "}
                        <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/IRC">
                          IRC
                        </Link> (such as on the #wikipedia channel).
                      </ListItem>
                    </List>
                  </ListItem>
                </List>

                <Text style={styles.subheading}>Third parties</Text>
                <Text style={styles.paragraph}>
                  This Privacy Policy only covers the way the Wikimedia Foundation collects, uses and discloses Personal Information and does not address the practices of third parties. For example, this Privacy Policy does not address the practices of:
                </Text>
                <List>
                  <ListItem>
                    <Text style={styles.bold}>Websites run by other organizations</Text>, like websites linked to from the "References" sections of Wikipedia, or run by Wikimedia chapters or other{" "}
                    <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/Wikimedia_movement_affiliates">
                      movement organizations
                    </Link>. These organizations may receive information from you if you visit their websites after using one of the Wikimedia Sites. They are governed by their own privacy policies.
                  </ListItem>
                  <ListItem>
                    <Text style={styles.bold}>Mobile applications provided by other organizations or individuals</Text>. These organizations or individuals may receive information from you if you use those applications to access the Wikimedia Sites or Wikimedia Site content. They are governed by their own privacy policies.
                  </ListItem>
                </List>

                <Text style={styles.paragraph}>
                  Sometimes, volunteers may place a data-collecting tool, such as a script, gadget, tracking pixel, or share button, on a Wikimedia Site without our knowledge. This Policy does not cover how third parties handle the information they receive as a result of such a tool. If you come across such a third-party tool, and you believe it violates this Policy, you can remove the tool yourself, or report it to privacy@wikimedia.org so we can investigate.
                </Text>
              </View>
            </Collapsible>
          </View>

          <Text style={styles.paragraph}>
            Where community policies govern information, such as the{" "}
            <Link href="https://meta.wikimedia.org/wiki/Special:MyLanguage/CheckUser_policy">
              CheckUser policy
            </Link>, the relevant community may add to the rules and obligations set out in this Policy. However, they are not permitted to create new exceptions or otherwise reduce the protections offered by this Policy.
          </Text>

          <View style={styles.backToTop}>
            <Pressable onPress={scrollToTop} style={styles.backToTopButton}>
              <Text style={styles.backToTopText}>Back to top</Text>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/WWC_arrow_up.png' }}
                style={styles.arrowIcon}
              />
            </Pressable>
          </View>
        </View>
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
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#2D3748',
  },
  table: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#EDF2F7',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    padding: 12,
    color: '#2D3748',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  tableCell: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    lineHeight: 20,
    color: '#4A5568',
  },
  section: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2D3748',
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2D3748',
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: '#3182ce',
    textDecorationLine: 'underline',
  },
  collapsibleSection: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBF8FF',
    padding: 16,
  },
  collapsibleHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    color: '#2D3748',
  },
  collapsibleIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  collapsibleContent: {
    backgroundColor: '#FFFFFF',
  },
  collapsibleInnerContent: {
    padding: 16,
  },
  listContainer: {
    marginLeft: 16,
  },
  nestedList: {
    marginLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    marginRight: 8,
    color: '#4A5568',
  },
  listText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#4A5568',
  },
  backToTop: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  backToTopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backToTopText: {
    color: '#3182ce',
    marginRight: 8,
  },
  arrowIcon: {
    width: 11,
    height: 11,
  },
});
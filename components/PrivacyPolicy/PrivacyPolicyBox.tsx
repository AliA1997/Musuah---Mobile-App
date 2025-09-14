import React from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export function PrivacyPolicyBox() {
  const openLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  const renderLink = (text: string, url: string) => (
    <Text
      style={styles.link}
      onPress={() => openLink(url)}
    >
      {text}
    </Text>
  );

  const renderListItem = (text: React.ReactNode) => (
    <View style={styles.listItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.box}>
          <Text style={styles.heading}>
            mūsūʿah Privacy Policy
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://qamarlabs.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75' }}
              style={styles.image}
              accessibilityLabel="Qamar Labs Logo"
            />
          </View>

          <Text style={styles.centeredText}>
            This is a{' '}
            {renderLink('summary', '/')}{' '}
            of the Privacy Policy. To read the full terms, scroll down or{' '}
            {renderLink('click here', '/')}.
          </Text>

          <Text style={styles.disclaimer}>
            Disclaimer: This summary is not a part of the Privacy Policy and is not a legal document.
            It is simply a handy reference for understanding the full Privacy Policy. Think of it as the
            user-friendly interface to our Privacy Policy.
          </Text>

          <View style={styles.divider} />

          <View style={styles.contentSection}>
            <Text style={styles.boldText}>
              Because we believe that you should not have to provide personal information to participate
              in the free knowledge movement, you may:
            </Text>
            <View style={styles.list}>
              {renderListItem(
                <>
                  Read, edit, or use any mūsūʿah site{' '}
                  {renderLink('without registering an account', '/wiki/Special:MyLanguage/Policy:Privacy_policy#your-account-info')}.
                </>
              )}
              {renderListItem(
                <>
                  Register for an account{' '}
                  {renderLink('without providing', '/')}{' '}
                  an email address or real name.
                </>
              )}
            </View>

            <Text style={styles.boldText}>
              Because we want to understand how Qamar Labs Sites are used so we can make them better for
              you, we collect some information when you:
            </Text>
            <View style={styles.list}>
              {renderListItem(
                <>
                  Make{' '}
                  {renderLink('public contributions', '/')}.
                </>
              )}
              {renderListItem(
                <>
                  {renderLink('Register an account', '/')}{' '}
                  or update your user page.
                </>
              )}
              {renderListItem(
                <>
                  {renderLink('Use', '/wiki/Special:MyLanguage/Policy:Privacy_policy#your-use-of-wm-sites')}{' '}
                  the Qamar Labs Sites.
                </>
              )}
              {renderListItem(
                <>
                  Send us{' '}
                  {renderLink('emails', '/')}{' '}
                  or participate in a{' '}
                  {renderLink('survey or give feedback', '/')}.
                </>
              )}
            </View>

            <Text style={styles.boldText}>We are committed to:</Text>
            <View style={styles.list}>
              {renderListItem(
                <>
                  Describing how your information may be used or{' '}
                  {renderLink('shared', '/')}{' '}
                  in this Privacy Policy.
                </>
              )}
              {renderListItem(
                <>
                  Using reasonable measures to keep your information{' '}
                  {renderLink('secure', '/')}.
                </>
              )}
              {renderListItem(
                <>
                  Never{' '}
                  {renderLink('selling', '/')}{' '}
                  your information or sharing it with third parties for marketing purposes.
                </>
              )}
              {renderListItem(
                <>
                  Only{' '}
                  {renderLink('sharing', '/')}{' '}
                  your information in limited circumstances, such as to{' '}
                  {renderLink('improve the Qamar Labs Sites', '/')}, to{' '}
                  {renderLink('comply with the law', '/')}, or to{' '}
                  {renderLink('protect you and others', '/')}.
                </>
              )}
              {renderListItem(
                <>
                  {renderLink('Retaining your data', '/')}{' '}
                  for the shortest possible time that is consistent with maintaining, understanding, and
                  improving the Qamar Labs Sites, and our obligations under applicable law.
                </>
              )}
            </View>

            <Text style={styles.boldText}>Be aware:</Text>
            <View style={styles.list}>
              {renderListItem(
                <>
                  Any content you add or any change that you make to a Qamar Labs Site will be{' '}
                  {renderLink('publicly and permanently available', '/wiki/Special:MyLanguage/Policy:Privacy_policy#your-public-contribs')}.
                </>
              )}
              {renderListItem(
                <>
                  If you add content or make a change to a Qamar Labs Site{' '}
                  {renderLink('without logging in', '/wiki/Special:MyLanguage/Policy:Privacy_policy#noaccount')}, that content or change will be publicly and permanently attributed to the IP
                  address used at the time rather than a username.
                </>
              )}
              {renderListItem(
                <>
                  Our community of volunteer editors and contributors is a self-policing body. Certain
                  administrators of the Qamar Labs Sites, who are chosen by the community, use tools that
                  grant them limited access to nonpublic information about recent contributions so they may
                  protect the Qamar Labs Sites and enforce policies.
                </>
              )}
              {renderListItem(
                <>
                  This Privacy Policy{' '}
                  {renderLink('does not apply', '/wiki/Special:MyLanguage/Policy:Privacy_policy#coverage')}{' '}
                  to all sites and services run by the Qamar Labs Foundation, such as sites or services that
                  have their own privacy policy (like the{' '}
                  {renderLink('Qamar Labs Shop', 'https://qamarlabs.netlify.app/')}) or sites or services run by third parties (like third-party developer projects
                  on{' '}
                  {renderLink(
                    'Qamar Labs Cloud Services',
                    'https://qamarlabs.netlify.app/'
                  )}).
                </>
              )}
              {renderListItem(
                <>
                  As part of our commitment to education and research around the world, we occasionally
                  release public information and aggregated or non-personal information to the general
                  public through data dumps and data sets.
                </>
              )}
              {renderListItem(
                <>
                  For the protection of the Qamar Labs Foundation and other users, if you do not agree with
                  this Privacy Policy, you may not use the Qamar Labs Sites.
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  box: {
    paddingVertical: 8,
  },
  heading: {
    backgroundColor: '#2F855A', // green.700 equivalent
    fontSize: 24, // 150% of default
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    color: 'white',
    borderRadius: 4,
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginRight: 0,
    marginVertical: 16,
  },
  image: {
    width: 90,
    height: 90,
  },
  centeredText: {
    paddingVertical: 8,
    textAlign: 'center',
    marginHorizontal: '10%',
    marginVertical: 4,
    fontSize: 16,
    lineHeight: 22,
  },
  disclaimer: {
    fontSize: 14, // 90% of default
    fontStyle: 'italic',
    padding: 8,
    marginHorizontal: 20,
    textAlign: 'center',
    lineHeight: 20,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 16,
  },
  contentSection: {
    marginHorizontal: '10%',
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 16,
    lineHeight: 22,
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 8,
  },
  bullet: {
    marginRight: 8,
    fontSize: 16,
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
  },
  link: {
    color: '#3182CE', // blue equivalent
    textDecorationLine: 'underline',
  },
});
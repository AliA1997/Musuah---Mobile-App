import React from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';

export const PrivacyPolicyIntroduction = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Assuming 768px as breakpoint for mobile

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <View style={styles.container}>
      {/* Introduction Section */}
      <View style={styles.introductionContainer}>
        {!isMobile && (
          <TouchableOpacity 
            onPress={() => handleLinkPress('https://en.wikipedia.org/wiki/File:WMF_open_door.png')}
            style={styles.imageLink}
          >
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/WMF_open_door.png/60px-WMF_open_door.png' }}
              style={styles.image}
              accessibilityLabel="WMF Open Door"
            />
          </TouchableOpacity>
        )}
        <Text style={styles.heading2}>Introduction</Text>
      </View>

      {/* Welcome Section */}
      <View style={[styles.welcomeContainer, isMobile ? styles.column : styles.row]}>
        {!isMobile && <View style={styles.spacer} />}

        <View style={[styles.contentContainer, isMobile ? styles.fullWidth : styles.seventyPercent]}>
          <View style={styles.welcomeSection} id="welcome">
            <Text style={styles.heading3}>Welcome!</Text>
            
            <View style={styles.textContainer}>
              <Text style={styles.paragraph}>
                The Wikimedia movement is founded on a simple, but powerful principle: we can do more together than any of us can do alone. We cannot work collectively without gathering, sharing, and analyzing information about our users as we seek new ways to make the Wikimedia Sites more usable, safer, and more beneficial.
              </Text>
              
              <Text style={styles.paragraph}>
                We believe that information-gathering and use should go hand-in-hand with transparency. This Privacy Policy explains how the Wikimedia Foundation, the non-profit organization that hosts the Wikimedia Sites, like Wikipedia, collects, uses, and shares information we receive from you through your use of the Wikimedia Sites. It is essential to understand that, by using any of the Wikimedia Sites, you consent to the collection, transfer, processing, storage, disclosure, and use of your information as described in this Privacy Policy. That means that reading this Policy carefully is important.
              </Text>
              
              <Text style={styles.paragraph}>
                We believe that you should not have to provide nonpublic Personal Information to participate in the free knowledge movement. You do not have to provide things like your real name, address, or date of birth to sign up for a standard account or contribute content to the Wikimedia Sites.
              </Text>
              
              <Text style={styles.paragraph} id="donotsell">
                We do not sell or rent your Personal Information, nor do we give it to others to sell you anything. We use it to figure out how to make the Wikimedia Sites more engaging and accessible, to see which ideas work, and to make learning and contributing more fun. Put simply: we use this information to make the Wikimedia Sites better for you.
              </Text>
              
              <Text style={styles.paragraph}>
                After all, it is people like you, the champions of free knowledge, who make it possible for the Wikimedia Sites to not only exist, but also grow and thrive.
              </Text>
            </View>
          </View>

          {/* Definitions Section */}
          <View style={styles.definitionsSection} id="definitions">
            <View style={styles.definitionsHeader}>
              <Text style={styles.heading4}>Definitions</Text>
              {!isMobile && (
                <View style={styles.backToTopContainer}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.link}>Back to top</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleLinkPress('https://en.wikipedia.org/wiki/Privacy_policy#top')}>
                    <Image
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/WWC_arrow_up.png' }}
                      style={styles.arrowImage}
                      accessibilityLabel="Back to top"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12
  },
  introductionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageLink: {
    marginRight: 8,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  arrowImage: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  heading3: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  heading4: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  welcomeContainer: {
    marginTop: 16,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spacer: {
    flex: 1,
  },
  contentContainer: {
    gap: 24,
  },
  fullWidth: {
    width: '100%',
  },
  seventyPercent: {
    width: '70%',
    paddingLeft: 32,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  textContainer: {
    gap: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2D3748',
    textAlign: 'left',
  },
  definitionsSection: {
    marginTop: 16,
  },
  definitionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backToTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    color: '#3182CE',
    fontSize: 14,
  },
});

export default PrivacyPolicyIntroduction;
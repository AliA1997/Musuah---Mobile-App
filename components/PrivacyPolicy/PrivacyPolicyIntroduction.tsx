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
            onPress={() => handleLinkPress('https://musuah.com/')}
            style={styles.imageLink}
          >
            <Image
              source={{ uri: 'https://qamarlabs.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75' }}
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
                The Qamar Labs movement is founded on a simple, but powerful principle: we can do more together than any of us can do alone. We cannot work collectively without gathering, sharing, and analyzing information about our users as we seek new ways to make the Qamar Labs Sites more usable, safer, and more beneficial.
              </Text>
              
              <Text style={styles.paragraph}>
                We believe that information-gathering and use should go hand-in-hand with transparency. This Privacy Policy explains how the Qamar Labs Foundation, the non-profit organization that hosts the Qamar Labs Sites, like Wikipedia, collects, uses, and shares information we receive from you through your use of the Qamar Labs Sites. It is essential to understand that, by using any of the Qamar Labs Sites, you consent to the collection, transfer, processing, storage, disclosure, and use of your information as described in this Privacy Policy. That means that reading this Policy carefully is important.
              </Text>
              
              <Text style={styles.paragraph}>
                We believe that you should not have to provide nonpublic Personal Information to participate in the free knowledge movement. You do not have to provide things like your real name, address, or date of birth to sign up for a standard account or contribute content to the Qamar Labs Sites.
              </Text>
              
              <Text style={styles.paragraph} id="donotsell">
                We do not sell or rent your Personal Information, nor do we give it to others to sell you anything. We use it to figure out how to make the Qamar Labs Sites more engaging and accessible, to see which ideas work, and to make learning and contributing more fun. Put simply: we use this information to make the Qamar Labs Sites better for you.
              </Text>
              
              <Text style={styles.paragraph}>
                After all, it is people like you, the champions of free knowledge, who make it possible for the Qamar Labs Sites to not only exist, but also grow and thrive.
              </Text>
            </View>
          </View>

          {/* Definitions Section */}
          <View style={styles.definitionsSection} id="definitions">
            <View style={styles.definitionsHeader}>
              <Text style={styles.heading4}>Definitions</Text>
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
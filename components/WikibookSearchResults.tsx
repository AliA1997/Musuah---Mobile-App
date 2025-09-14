import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Platform,
  FlatList,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import useLoadDataFromGetQueryParams from '../hooks/useLoadDataFromQueryParams';

// Assuming we have a custom Autocomplete component for React Native
import Autocomplete from './common/Autocomplete';
import { AutocompleteType } from '../models/common';
import { router } from 'expo-router';

// Styled components to replace Chakra UI
const StyledText = ({
  children,
  fontSize = '100%',
  color = 'blue',
  onPress,
  style
}: {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  onPress?: () => void;
  style?: any;
}) => (
  <Text
    style={[
      { fontSize: fontSize === '100%' ? 16 : parseInt(fontSize), color },
      onPress && styles.linkText,
      style
    ]}
    onPress={onPress}
  >
    {children}
  </Text>
);

const Span = ({ children, style }: { children: React.ReactNode; style?: any }) => (
  <Text style={[styles.boldText, style]}>{children}</Text>
);

function WikiBookSearchResults() {
  const { t } = useTranslation("common");
  const navigation = useNavigation();
  const { commonStore, searchBooksStore } = useStore();
  const { language } = commonStore;
  const { searchQry, loadSearchWikiBooks, bookSearchResults, searchLoading } = searchBooksStore;

  const handleSubmitSearch = (setOpen: Function) => async (e: React.MouseEvent) => {
    if (searchQry) {
      try {
        await loadSearchWikiBooks(searchQry);
        setOpen(false);
      } catch (error) {
        console.error('Search failed:', error);
      }
    }
  };

  useLoadDataFromGetQueryParams({ key: "title", loadData: loadSearchWikiBooks });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with search bar */}
      <View style={styles.header}>
        <View style={styles.autocompleteContainer}>
          <Autocomplete
            id="book-search-results-autocomplete"
            key="book-search-results-autocomplete"
            placeholder={t("searchPlaceholder")}
            autocompleteType={AutocompleteType.SearchBooks}
            handleSubmitSearch={handleSubmitSearch}
            hasButton={true}
          />
        </View>
      </View>

      <View style={styles.mainContent}>
        {/* Main Content Area */}
        {searchLoading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : bookSearchResults && bookSearchResults.length > 0 ? (
          <View style={styles.resultsList}>
            <Text style={styles.resultsTitle}>
              {t("searchResultsFor")} "{searchQry}"
            </Text>
            <FlatList
              data={bookSearchResults}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => (
                <View key={item._id} style={styles.resultItem}>
                  <StyledText
                    color="#3182CE"
                    onPress={() => {
                      router.push({
                        pathname: '/(drawer)/(tabs)/SearchBooks/details/[bookid]',
                        params: { bookid: item._id }
                      });
                    }}
                    style={styles.bookTitle}
                  >
                    {item.displayName}
                  </StyledText>
                  <Text style={styles.description}>{item.description}</Text>
                  <StyledText style={{ color: '#272626ff' }}>
                    <Span>{t("author")} </Span>
                    {item.author}
                  </StyledText>
                  <StyledText style={{ color: '#272626ff' }}>
                    <Span>{t("publicationDate")} </Span>
                    {new Date(item.publicationDate).toLocaleDateString()}
                  </StyledText>
                </View>
              )}
            />
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>{t("searchBooksAndStudiesFromHere")}</Text>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#F7FAFC',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
    zIndex: 1000,
  },
  autocompleteContainer: {
    width: '100%',
    zIndex: 1001,
  },
  mainContent: {
    flex: 1,
    zIndex: 1,
  },
  resultsArea: {
    flex: 1,
    padding: 16,
  },
  loader: {
    marginTop: 20,
  },
  resultsList: {
    width: '100%',
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
    marginBottom: 16,
    color: '#2D3748',
    zIndex: 1,
  },
  resultItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  bookTitle: {
    marginBottom: 8,
    fontWeight: '600',
    fontSize: 18,
  },
  description: {
    marginBottom: 8,
    color: '#4A5568',
    lineHeight: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 50,
  },
  emptyStateText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#718096',
    lineHeight: 24,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default observer(WikiBookSearchResults);
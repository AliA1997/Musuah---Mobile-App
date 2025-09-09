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
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import useLoadDataFromGetQueryParams from '../hooks/useLoadDataFromQueryParams';

// Assuming we have a custom Autocomplete component for React Native
import Autocomplete from './common/Autocomplete';
import { AutocompleteType } from '../models/common';

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
        // navigation.navigate('SearchBooks' as never, { title: searchQry } as never);
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
        <ScrollView style={styles.resultsArea}>
          {searchLoading ? (
            <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
          ) : bookSearchResults && bookSearchResults.length > 0 ? (
            <View style={styles.resultsList}>
              <Text style={styles.resultsTitle}>
                {t("searchResultsFor")} "{searchQry}"
              </Text>
              {bookSearchResults.map((book) => (
                <View key={book._id} style={styles.resultItem}>
                  <StyledText
                    color="#3182CE"
                    onPress={() => {
                    //   navigation.navigate('WikiBook' as never, { id: book._id } as never);
                    }}
                    style={styles.bookTitle}
                  >
                    {book.displayName}
                  </StyledText>
                  <Text style={styles.description}>{book.description}</Text>
                  <StyledText>
                    <Span>{t("author")} </Span>
                    {book.author}
                  </StyledText>
                  <StyledText>
                    <Span>{t("publicationDate")} </Span>
                    {new Date(book.publicationDate).toLocaleDateString()}
                  </StyledText>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>{t("searchBooksAndStudiesFromHere")}</Text>
            </View>
          )}
        </ScrollView>
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
  },
  autocompleteContainer: {
    width: '100%',
  },
  mainContent: {
    flex: 1,
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
    marginBottom: 16,
  },
  resultItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  bookTitle: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
    color: '#4A5568',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#718096',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default observer(WikiBookSearchResults);
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import Autocomplete from './common/Autocomplete';
import { AutocompleteType } from '../models/common';
import useLoadDataFromGetQueryParams from '../hooks/useLoadDataFromQueryParams';

// Styled components to replace Chakra UI
const StyledText = ({ 
  children, 
  fontSize = 16, 
  color = '#3182CE', 
  onPress, 
  style 
}: { 
  children: React.ReactNode; 
  fontSize?: number; 
  color?: string; 
  onPress?: () => void; 
  style?: any;
}) => (
  <Text 
    style={[
      { fontSize, color },
      onPress && styles.linkText,
      style
    ]}
    onPress={onPress}
  >
    {children}
  </Text>
);

export default observer(function WikiSearchResults() {
  const { t } = useTranslation("common");
  const navigation = useNavigation();
  const { commonStore, searchStore } = useStore();
  const { language } = commonStore;
  const { searchQry, searchResults, loadSearchWikiPages, searchLoading } = searchStore;

  const handleSubmitSearch = (setOpen: Function) => async () => {
    if (searchQry) {
      try {
        await loadSearchWikiPages(searchQry);
        setOpen(false);
        // For React Native, we navigate instead of changing window.location
        // navigation.navigate('Search' as never, { title: searchQry } as never);
      } catch (error) {
        console.error('Search failed:', error);
      }
    }
  };

  useLoadDataFromGetQueryParams({ key: "title", loadData: loadSearchWikiPages });

  const handleItemPress = (pageid: string) => {
    // navigation.navigate('WikiPage' as never, { 
    //   id: pageid,
    //   language 
    // } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with search bar */}
      <View style={styles.header}>
        <View style={styles.autocompleteContainer}>
          <Autocomplete
            id='search-results-autocomplete'
            key="search-results-autocomplete"
            placeholder={t("searchPlaceholder")}
            autocompleteType={AutocompleteType.Search}
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
          ) : searchResults && searchResults.length > 0 ? (
            <View style={styles.resultsList}>
              <Text style={styles.resultsTitle}>
                {t("searchResultsFor")} "{searchQry}"
              </Text>
              {searchResults.map((itm) => (
                <TouchableOpacity 
                  key={itm.id} 
                  style={styles.resultItem}
                  onPress={() => handleItemPress(itm.pageid as any)}
                >
                  <StyledText
                    style={styles.itemTitle}
                    onPress={() => handleItemPress(itm.pageid as any)}
                  >
                    {itm.title}
                  </StyledText>
                  <Text style={styles.summary}>{itm.summary}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>{t("searchPagesFromHere")}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});

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
    marginBottom: 20,
  },
  resultsList: {
    width: '100%',
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2D3748',
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
  itemTitle: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 18,
  },
  summary: {
    fontSize: 14,
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
});

// Platform-specific imports
import { Platform } from 'react-native';
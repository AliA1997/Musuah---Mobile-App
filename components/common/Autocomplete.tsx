import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { observer } from "mobx-react-lite";
import { useNavigation } from "expo-router";
import { useStore } from "../../store";
import { AutocompleteType } from "../../models/common";
import { QueriedAutocompleteOption } from "../../models/search";

type Props = {
  id: string;
  placeholder: string;
  autocompleteType: AutocompleteType;
  hasButton: boolean;
  handleSubmitSearch: (setOpen: Function) => (e: any) => Promise<void>;
};

const SearchAutocomplete = observer(
  ({ id, placeholder, autocompleteType, hasButton, handleSubmitSearch }: Props) => {
    const { commonStore, searchStore, searchBooksStore } = useStore();
    const navigation = useNavigation<any>();
    const inputRef = useRef<TextInput | null>(null);

    // 🔹 State
    const [currentValue, setCurrentValue] = useState("");
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<QueriedAutocompleteOption | null>(null);

    // 🔹 Loaders
    const loading =
      autocompleteType === AutocompleteType.Navbar
        ? commonStore.autoCompleteLoading
        : autocompleteType === AutocompleteType.SearchBooks
        ? searchBooksStore.autoCompleteLoading
        : searchStore.autoCompleteLoading;

    // 🔹 Autocomplete options
    const autocompleteOptions =
      autocompleteType === AutocompleteType.Navbar
        ? commonStore.navbarAutocompleteOptions
        : autocompleteType === AutocompleteType.SearchBooks
        ? searchBooksStore.autocompleteOptions
        : searchStore.autocompleteOptions;

    const clearAutoCompleteOptions =
      autocompleteType === AutocompleteType.Navbar
        ? commonStore.clearNavAutoCompleteRegistry
        : autocompleteType === AutocompleteType.SearchBooks
        ? searchBooksStore.clearAutoCompleteOptions
        : searchStore.clearAutoCompleteOptions;

    // 🔹 Handle input change
    const onChangeText = useCallback(
      async (val: string) => {
        setCurrentValue(val);
        if (autocompleteType === AutocompleteType.Navbar)
          commonStore.setNavbarSearchQry(val);
        else if (autocompleteType === AutocompleteType.SearchBooks)
          searchBooksStore.setSearchQry(val);
        else searchStore.setSearchQry(val);

        if (val) {
          setOpen(true);
          if (autocompleteType === AutocompleteType.Navbar)
            await commonStore.loadAutocompleteOptions(val);
          else if (autocompleteType === AutocompleteType.SearchBooks)
            await searchBooksStore.loadBookAutocompleteOptions(val);
          else await searchStore.loadAutocompleteOptions(val);
        } else {
          setOpen(false);
          clearAutoCompleteOptions();
        }
      },
      [autocompleteType]
    );

    const onSelectItem = (item: any) => {
      alert("JSONstringfigy: " + JSON.stringify(item))
      // setSelected(item);
      // setOpen(false);
      // const { language } = commonStore;
      // if (autocompleteType === AutocompleteType.SearchBooks) {
      //   navigation.navigate("WikiBook", { lang: language, id: item.value });
      // } else {
      //   alert('test')
      //   navigation.navigate({ pathname: '/(drawer)/(tabs)/SearchPages/details/[pageid]', params: { lang: language, pageid: item.value } });
      // }
    };

    // Close dropdown when tapping outside
    useEffect(() => {
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setOpen(false);
        }
      );

      return () => {
        keyboardDidHideListener.remove();
      };
    }, []);

    return (
      <View style={styles.container}>
        {/* Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            ref={inputRef}
            value={currentValue}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            onBlur={() => {
              // Small delay to allow item selection before closing
              setTimeout(() => setOpen(false), 200);
            }}
            onFocus={() => {
              if (currentValue.length > 0) {
                setOpen(true);
              }
            }}
          />

          {/* Clear Button */}
          {currentValue.length > 0 && (
            <Pressable
              style={[styles.iconBtn, hasButton ? { right: 40 } : { right: 10 }]}
              onPress={() => {
                setCurrentValue("");
                clearAutoCompleteOptions();
                setOpen(false);
              }}
            >
              <Ionicons name="close" size={20} color="#444" />
            </Pressable>
          )}

          {/* Search Button */}
          {hasButton && (
            <Pressable
              style={[styles.iconBtn, { right: 5, backgroundColor: "#2F855A" }]}
              onPress={handleSubmitSearch(setOpen)}
            >
              <Ionicons name="search" size={20} color="white" />
            </Pressable>
          )}
        </View>

        {/* Dropdown List - Using absolute positioning instead of being inside a scrollable container */}
        {open && currentValue.length > 0 && (
          <View style={styles.dropdownContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator color="black" />
              </View>
            ) : autocompleteOptions.length > 0 ? (
              <FlatList
                data={autocompleteOptions}
                scrollEnabled={false}
                keyExtractor={(item, idx) => `${item.value}-${idx}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={(e) => onSelectItem(item)}
                  >
                    <Text style={styles.dropdownText}>{item.text}</Text>
                    {autocompleteType === AutocompleteType.SearchBooks && item.primaryTopic && (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{item.primaryTopic}</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                )}
                style={styles.flatList}
                keyboardShouldPersistTaps="always" 
              />
            ) : (
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResults}>No results</Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 1000, // Ensure dropdown appears above other content
  },
  inputWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1001, // Higher than dropdown
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: "white",
  },
  iconBtn: {
    position: "absolute",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 20,
    zIndex: 1002, // Highest z-index
  },
  dropdownContainer: {
    position: "absolute",
    top: 45, // Position below input
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    maxHeight: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 999, // Below input but above other content
  },
  flatList: {
    flex: 1,
  },
  loadingContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownItem: {
    padding: 12,
    zIndex: 999,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: 'blue'
  },
  dropdownText: {
    fontSize: 16,
    color: "#000",
  },
  badge: {
    backgroundColor: "#38A169",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 12,
    color: "white",
    fontWeight: "500",
  },
  noResultsContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  noResults: {
    textAlign: "center",
    color: "#888",
  },
});

export default SearchAutocomplete;
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { useStore } from "../store";
import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { DeleteWikiBookRequest } from "../models/wikibook";
import { useTranslation } from "react-i18next";
import LoadingSkeleton from "./LoadingSkeleton";

function WikiBookPage() {
  const { t } = useTranslation(["common", "errors", "form"]);
  const { commonStore, wikiBookStore } = useStore();
  const { language } = commonStore;
  const { loadWikiBook, clearWikiBook, currentWikiBook } = wikiBookStore;

  const route = useRoute<any>();
  const { bookId } = route.params;

  const [currentDeleteWikibookRequest, setCurrentWikibookRequest] = useState<DeleteWikiBookRequest | undefined>(
    undefined
  );
  const [mounted, setMounted] = useState<boolean>(false);

  async function getWikiBook() {
    await loadWikiBook(bookId!);
  }

  useEffect(() => {
    if (bookId) {
      getWikiBook();
    }
    return () => {
      clearWikiBook();
      setMounted(false);
    };
  }, [bookId]);

  if (!currentWikiBook || !currentWikiBook._id) return <LoadingSkeleton />;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Title */}
      <View style={styles.section}>
        <Text style={styles.header}>{currentWikiBook.title}</Text>
        {currentWikiBook.description !== "No description available" && (
          <Text style={styles.text}>{currentWikiBook.description}</Text>
        )}
      </View>

      {/* Details Grid */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>{t("title", { ns: "common" })}:</Text>
          <Text style={styles.value}>{currentWikiBook.title}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t("publicationYear", { ns: "common" })}:</Text>
          <Text style={styles.value}>{currentWikiBook.publicationYear}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t("publicationDate", { ns: "common" })}:</Text>
          <Text style={styles.value}>
            {new Date(currentWikiBook.publicationDate).toLocaleDateString(language ?? "en")}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t("primaryTopic", { ns: "common" })}:</Text>
          <Text style={styles.value}>{currentWikiBook.primaryTopic}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t("concepts", { ns: "common" })}:</Text>
          <View style={styles.badges}>
            {currentWikiBook?.concepts?.map((concept: string, idx: number) => (
              <Text key={idx} style={styles.badge}>
                {concept}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* Authors Section */}
      {currentWikiBook?.authors?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>{t("authors", { ns: "common" })}</Text>
          {currentWikiBook.authors.map((author, idx) => (
            <View key={idx} style={styles.authorBlock}>
              <Text style={styles.text}>{author.name}</Text>
              {author.institutions?.map((inst, instIdx) => (
                <Text key={instIdx} style={styles.subText}>
                  {inst.display_name} ({inst.country_code})
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Locations */}
      {currentWikiBook?.locations?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>{t("whereYouCanFindThis", { ns: "common" })}</Text>
          {currentWikiBook.locations
            .filter((l) => l.isOpenAccess)
            .map((loc, idx) => (
              <TouchableOpacity key={idx} onPress={() => Linking.openURL(loc?.pdfUrl!)}>
                <Text style={styles.link}>{loc.name} - {loc.orgName}</Text>
                <Text style={styles.linkSmall}>{loc.pdfUrl}</Text>
              </TouchableOpacity>
            ))}
        </View>
      )}

      {/* Loading indicator */}
      {!mounted && <ActivityIndicator size="large" color="#000" />}
    </ScrollView>
  );
}

export default observer(WikiBookPage);

const styles = StyleSheet.create({
  container: { padding: 16 },
  section: { marginBottom: 20 },
  card: { padding: 16, backgroundColor: "#f5f5f5", borderRadius: 8, marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 4 },
  label: { fontWeight: "bold", flex: 1 },
  value: { flex: 2 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  subHeader: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 4 },
  subText: { fontSize: 14, color: "#666" },
  badges: { flexDirection: "row", flexWrap: "wrap" },
  badge: { backgroundColor: "#646cffaa", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, margin: 2, color: "white" },
  authorBlock: { marginBottom: 10 },
  link: { color: "#1a73e8", fontWeight: "bold" },
  linkSmall: { color: "#1a73e8", fontSize: 12 },
});

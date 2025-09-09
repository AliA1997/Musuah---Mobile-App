// src/screens/WikiPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { useRoute, RouteProp } from "@react-navigation/native";
import { CommonWikiPageTextContainer, CommonWikiPageGridBox } from "./ResponsiveContainer";
import { ATTRIBUTES_GIVEN_OWN_SECTION } from "./common/constants/wikipage";

type RouteParams = {
  WikiPage: {
    pageId?: string;
  };
};

const WikiPage = observer(() => {
  const route = useRoute<RouteProp<RouteParams, "WikiPage">>();
  const pageId = route.params?.pageId;
  const { wikiPageStore } = useStore();
  const { loadWikiPage, currentWikiPage, clearWikiPage, loading: loadingWikiPage } = wikiPageStore as any;

  const [articleSentences, setArticleSentences] = useState<string[] | undefined>(undefined);
  const [summarySentences, setSummarySentences] = useState<string[] | undefined>(undefined);
  const [pageFetched, setPageFetched] = useState(false);

  useEffect(() => {
    let cancelled = false;

    if (pageId) {
      setPageFetched(false);
      loadWikiPage(pageId)
        .then((wikipge: any) => {
          if (cancelled) return;
          setArticleSentences(wikipge ? wikipge.text?.split(/(?<=[.!?])\s+/) : undefined);
          setSummarySentences(wikipge ? wikipge.summary?.split(/(?<=[.!?])\s+/) : undefined);
        })
        .catch((err: any) => {
          console.warn("loadWikiPage error:", err);
        })
        .finally(() => {
          if (!cancelled) setPageFetched(true);
        });
    }

    return () => {
      cancelled = true;
      clearWikiPage();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId]);

  const gridAttributes = useMemo(() => {
    const result: { [key: string]: any } = {};
    Object.keys(currentWikiPage?.attributes ?? {})
      .filter((k) => !ATTRIBUTES_GIVEN_OWN_SECTION.includes(k))
      .forEach((k) => (result[k] = currentWikiPage?.attributes[k]));
    return result;
  }, [currentWikiPage]);

  // Loading state: prefer store's loading if available, else use pageFetched
  const loading = (loadingWikiPage === undefined ? !pageFetched : loadingWikiPage);

  if (!currentWikiPage && loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!currentWikiPage && !loading) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundText}>Page not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Alerts removed (they used request stores); if you need them add back read-only banners */}
      <CommonWikiPageTextContainer style={styles.pageContainer}>
        <View style={styles.titleWrapper}>
          <Text accessibilityRole="header" style={styles.title}>
            {currentWikiPage?.title}
          </Text>
        </View>

        {/* Summary section */}
        <View style={styles.sectionRow}>
          <CommonWikiPageTextContainer style={styles.summaryContainer}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryHeaderText}>Summary</Text>
            </View>

            {summarySentences && summarySentences.length > 0 ? (
              summarySentences.map((s, idx) => (
                <Text key={idx} style={styles.paragraph}>
                  {s}
                </Text>
              ))
            ) : (
              <Text style={styles.paragraph}>—</Text>
            )}
          </CommonWikiPageTextContainer>

          {/* Attributes grid */}
          <CommonWikiPageGridBox>
            <View style={styles.gridHeader}>
              <Text style={styles.gridHeaderText}>{currentWikiPage?.title}</Text>
            </View>

            {currentWikiPage?.attributes &&
              Object.keys(gridAttributes).map((k, i) => (
                <View key={i} style={styles.gridRow}>
                  <View style={styles.gridKey}>
                    <Text style={[styles.paragraph, styles.gridKeyText]}>{k}:</Text>
                  </View>
                  <View style={styles.gridValue}>
                    <Text style={styles.paragraph}>{String(gridAttributes[k])}</Text>
                  </View>
                </View>
              ))}
          </CommonWikiPageGridBox>
        </View>

        <View style={styles.divider} />

        {/* Article body */}
        <CommonWikiPageTextContainer style={styles.articleContainer}>
          {articleSentences && articleSentences.length > 0 ? (
            articleSentences.map((sentence, idx) => (
              <View key={idx} style={styles.paragraphWrapper}>
                <Text style={styles.paragraph}>{sentence}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.paragraph}>No article content.</Text>
          )}
        </CommonWikiPageTextContainer>
      </CommonWikiPageTextContainer>
    </ScrollView>
  );
});

export default WikiPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  pageContainer: {
    width: "100%",
  },
  titleWrapper: {
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  sectionRow: {
    flexDirection: "column",
    gap: 12 as any,
  },
  summaryContainer: {
    marginBottom: 12,
  },
  summaryHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingBottom: 6,
    marginBottom: 8,
  },
  summaryHeaderText: {
    fontSize: 16,
    fontWeight: "600",
  },
  gridHeader: {
    alignItems: "center",
    marginBottom: 8,
  },
  gridHeaderText: {
    fontWeight: "700",
    fontSize: 16,
  },
  gridRow: {
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
    paddingVertical: 10,
    flexDirection: "row",
  },
  gridKey: {
    flex: 1,
  },
  gridValue: {
    flex: 1,
  },
  gridKeyText: {
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginVertical: 12,
  },
  articleContainer: {
    marginBottom: 40,
  },
  paragraphWrapper: {
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#111",
  },
  centered: {
    flex: 1,
    minHeight: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 16,
    color: "#888",
  },
});

import React, { useCallback, useEffect, useMemo } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Platform,
} from "react-native";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { router } from "expo-router";
import { useStore } from "../store/index";
import i18n from "~/app/i18n/index";
import { AutocompleteType } from "../models/common";


// Assuming we have a custom Autocomplete component for React Native
import Autocomplete from "./common/Autocomplete";
import ChatbotIcon from "~/components/icons/ChatbotIcon";
import EBooksIcon from "~/components/icons/EBooksIcon";

// Custom responsive container component
const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => (
    <SafeAreaView style={styles.responsiveContainer}>{children}</SafeAreaView>
);

// Custom divider component to replace StackDivider
const Divider = () => <View style={styles.divider} />;

// Custom navigation link component
const NavigationBarLink = ({
    children,
    onPress,
    style,
}: {
    children: React.ReactNode;
    onPress: () => void;
    style?: any;
}) => (
    <TouchableOpacity onPress={onPress} style={[styles.navLink, style]}>
        <Text style={styles.navLinkText}>{children}</Text>
    </TouchableOpacity>
);

export default observer(function HomePage() {
    const { t } = useTranslation("common");

    const { commonStore, searchStore } = useStore();
    const { searchQry, loadSearchWikiPages } = searchStore;
    const { setLanguage, language } = commonStore;


    const handleSubmitSearch = (setOpen: Function) => async () => {
        if (searchQry) {
            try {
                await loadSearchWikiPages(searchQry);
                router.push('/(drawer)/(tabs)/SearchPages' as any);
                setOpen(false);
            } catch (error) {
                console.error("Search failed:", error);
            }
        }
    };


    const navigateToLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setLanguage(langCode as any);
        // navigation.navigate("Home" as never, { lang: langCode } as never);
    };

    const navigateToScreen = (screenName: string) => {
        // navigation.navigate(screenName as never, { lang: language } as never);
    };

    useEffect(() => {
        i18n.changeLanguage(language ? language : 'en');
    }, [])

    return (
        <ResponsiveContainer>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="always">
                {/* Header with logo and search */}
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.headerText}>mūsūʿah</Text>
                        <Text style={styles.subHeaderText}>The Free Encyclopedia</Text>
                        <Image
                            source={require('../assets/muslimwiki-globe.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.autocompleteContainer}>
                        <Autocomplete
                            id="homepage-autocomplete"
                            placeholder={t("searchPlaceholder")}
                            autocompleteType={AutocompleteType.Search}
                            hasButton={true}
                            handleSubmitSearch={handleSubmitSearch}
                        />
                    </View>
                </View>

                <Divider />

                {/* Language links */}
                <View style={styles.languageLinksContainer}>
                    {[
                        { code: "es", key: "links.es" },
                        { code: "en", key: "links.en" },
                        { code: "ar", key: "links.ar" },
                        { code: "tr", key: "links.tr" },
                        { code: "fr", key: "links.fr" },
                        { code: "ur", key: "links.ur" },
                        { code: "fa", key: "links.fa" },
                        { code: "cn", key: "links.cn" },
                        { code: "ru", key: "links.ru" },
                        { code: "de", key: "links.de" },
                        { code: "jp", key: "links.jp" },
                        { code: "hi", key: "links.hi" },
                    ].map((lang) => (
                        <View key={lang.code} style={styles.languageItem}>
                            <NavigationBarLink
                                onPress={() => navigateToLanguage(lang.code)}
                            >
                                {t(lang.key as any)}
                            </NavigationBarLink>
                        </View>
                    ))}
                </View>

                <Divider />
                <View style={styles.toolItemContainer}>
                    <TouchableOpacity
                        style={styles.toolItem}
                        onPress={() =>  router.push('/(drawer)/(tabs)/AIChat')}
                    >
                        <ChatbotIcon />
                        <Text style={styles.toolText}>{t("mainLinks.useAI")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.toolItem}
                        onPress={() =>  router.push('/(drawer)/(tabs)/SearchBooks')}
                    >
                        <EBooksIcon />
                        <Text style={styles.toolText}>
                            {t("mainLinks.booksAndStudiesPart1")}
                            {"\n"}
                            {t("mainLinks.booksAndStudiesPart2")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ResponsiveContainer>
    );
});

const styles = StyleSheet.create({
    responsiveContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#2D3748",
        marginBottom: 4,
        textAlign: "center",
    },
    subHeaderText: {
        fontSize: 16,
        color: "#718096",
        marginBottom: 16,
        textAlign: "center",
    },
    logo: {
        width: 215,
        height: 215,
    },
    autocompleteContainer: {
        width: "100%",
        maxWidth: 400,
    },
    divider: {
        height: 1,
        backgroundColor: "#E2E8F0",
        marginVertical: 16,
        width: "100%",
    },
    languageLinksContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 16,
    },
    languageItem: {
        width: "23%",
        marginBottom: 12,
        minWidth: 80,
    },
    navLink: {
        padding: 8,
    },
    navLinkText: {
        fontSize: 14,
        color: "#3182CE",
        textAlign: "center",
    },
    toolsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
    },
    toolItemContainer: { flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'space-between' },
    toolItem: {
        width: "48%",
        alignItems: "center",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#F7FAFC",
        borderRadius: 8,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    toolText: {
        fontSize: 12,
        color: "#2D3748",
        textAlign: "center",
        marginTop: 8,
    },
});
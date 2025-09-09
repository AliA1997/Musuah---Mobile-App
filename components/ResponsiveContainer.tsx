import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

type Props = React.PropsWithChildren<{
  extraClasses?: string; // placeholder if you use tailwind-rn or className mappings
}>;

// 🔹 ResponsiveContainer
export default function ResponsiveContainer({ children }: Props) {
  return <View style={[styles.responsiveContainer]}>{children}</View>;
}

// 🔹 CommonWikiPageTextContainer
export function CommonWikiPageTextContainer({
  children,
  ...containerProps
}: React.PropsWithChildren<ViewProps>) {
  return (
    <View style={[styles.textContainer]} {...containerProps}>
      {children}
    </View>
  );
}

// 🔹 CommonWikiPageInputContainer
export function CommonWikiPageInputContainer({
  children,
  ...props
}: React.PropsWithChildren<ViewProps>) {
  return (
    <View style={[styles.inputContainer]} {...props}>
      {children}
    </View>
  );
}

// 🔹 CommonWikiPageGridBox
export function CommonWikiPageGridBox({
  children,
  ...containerProps
}: React.PropsWithChildren<ViewProps>) {
  return (
    <View style={[styles.card]} {...containerProps}>
      <View style={styles.cardBody}>{children}</View>
    </View>
  );
}

// 🔹 Styles
const styles = StyleSheet.create({
  responsiveContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Chakra md:start
    flexWrap: "wrap",
    paddingHorizontal: 8, // 0.5rem
    width: "100%",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start", // Chakra md:start
    justifyContent: "center",
    minHeight: "15%", // 15vh ~> 15%
    textAlign: "left" as any, // RN Text must use <Text style>
    width: "100%",
  },
  inputContainer: {
    maxHeight: 80, // 5rem
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 8,
  },
  card: {
    alignSelf: "flex-start",
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 2, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardBody: {
    padding: 12,
    width: "100%",
  },
});

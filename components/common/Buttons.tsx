// LinkButton.tsx (React Native + React 19)
import React from "react";
import { ActivityIndicator, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Adjust to your navigation types
type RootStackParamList = {
  [key: string]: any; // Replace with your screen params
};

type Props = {
  to: keyof RootStackParamList;
};

export function LinkButton({ to, children }: React.PropsWithChildren<Props>) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable style={styles.primaryButton} onPress={() => navigation.navigate(to as any)}>
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  );
}


type MWCommonButtonProps = {
  submitting?: boolean;
  errors?: { [key: string]: any };
  onPress?: () => void;
};

export function MWCommonButton({
  children,
  submitting,
  errors,
  onPress,
}: React.PropsWithChildren<MWCommonButtonProps>) {
  const disabled = Object.values(errors ?? {}).some((v) => !!v) || submitting;

  return (
    <Pressable
      style={[styles.commonButton, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      {submitting ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.commonButtonText}>{children}</Text>
      )}
    </Pressable>
  );
}


type MWIconButtonProps = {
  submitting?: boolean;
  errors?: { [key: string]: any };
  onPress?: () => void;
};

export function MWIconButton({
  children,
  submitting,
  errors,
  onPress,
}: React.PropsWithChildren<MWIconButtonProps>) {
  const disabled = Object.values(errors ?? {}).some((v) => !!v) || submitting;

  return (
    <Pressable
      style={[styles.iconButton, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.iconButtonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#2F855A", // Chakra green.800
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: "center",
  },
  primaryButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  commonButton: {
    backgroundColor: "#2F855A", // Chakra green.800
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: "center",
  },
  commonButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  iconButton: {
    backgroundColor: "#E2E8F0", // Chakra gray.100
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: "center",
  },
  iconButtonText: {
    fontWeight: "bold",
    color: "#1A202C", // Chakra gray.900
  },
  disabled: {
    opacity: 0.4,
  },
});

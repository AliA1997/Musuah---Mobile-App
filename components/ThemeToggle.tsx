import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, View } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';

import { cn } from '~/lib/cn';
import { useColorScheme } from '~/lib/useColorScheme';
import { COLORS } from '~/theme/colors';

export function ThemeToggle() {
  const { colorScheme } = useColorScheme();
  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={`toggle-${colorScheme}`}
        entering={ZoomInRotate}>
        <Pressable onPress={() => router.back()} className="opacity-80">
          {({ pressed }) => (
            <View className={cn('px-0.5', pressed && 'opacity-50')}>
              <Feather name="x" color={COLORS.black} size={30} />
            </View>
          )}
        </Pressable>
        {/* <Pressable onPress={toggleColorScheme} className="opacity-80">
          {colorScheme === 'dark'
            ? ({ pressed }) => (
                <View className={cn('px-0.5', pressed && 'opacity-50')}>
                  <Icon namingScheme="sfSymbol" name="moon.stars" color={COLORS.white} />
                </View>
              )
            : ({ pressed }) => (
                <View className={cn('px-0.5', pressed && 'opacity-50')}>
                  <Icon namingScheme="sfSymbol" name="sun.min" color={COLORS.black} />
                </View>
              )}
        </Pressable> */}
      </Animated.View>
    </LayoutAnimationConfig>
  );
}

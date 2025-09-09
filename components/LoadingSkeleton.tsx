import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

interface RelativeLoaderSkeletonProps {
  children?: React.ReactNode;
  style?: any;
}

export default function RelativeLoaderSkeleton({ 
  children, 
  ...props 
}: RelativeLoaderSkeletonProps) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 1024; // Assuming lg breakpoint is 1024px

  // Skeleton layout for each item
  const skeletonLayout = [
    { key: 'circle', width: 48, height: 48, borderRadius: 24, marginBottom: 8 },
    { key: 'line1', width: '100%', height: 12, marginBottom: 4 },
    { key: 'line2', width: '100%', height: 12, marginBottom: 4 },
    { key: 'line3', width: '80%', height: 12, marginBottom: 4 },
    { key: 'line4', width: '60%', height: 12, marginBottom: 4 },
    { key: 'line5', width: '40%', height: 12 },
  ];

  return (
    <View style={[styles.overlay, props.style]}>
      <View style={styles.vStack}>
        {/* First row - column on small screens, row on large */}
        <View style={[
          styles.hStack, 
          { flexDirection: isLargeScreen ? 'row' : 'column' }
        ]}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.box}>
              <Skeleton
                isLoading={true}
                containerStyle={styles.skeletonContainer}
                layout={skeletonLayout as any}
                boneColor="#E1E9EE"
                highlightColor="#F2F8FC"
              />
            </View>
          ))}
        </View>

        {/* Additional rows - hidden on small screens */}
        {isLargeScreen && (
          <>
            <View style={styles.hStack}>
              {[4, 5, 6].map((item) => (
                <View key={item} style={styles.box}>
                  <Skeleton
                    isLoading={true}
                    containerStyle={styles.skeletonContainer}
                    layout={skeletonLayout as any}
                    boneColor="#E1E9EE"
                    highlightColor="#F2F8FC"
                  />
                </View>
              ))}
            </View>
            <View style={styles.hStack}>
              {[7, 8, 9].map((item) => (
                <View key={item} style={styles.box}>
                  <Skeleton
                    isLoading={true}
                    containerStyle={styles.skeletonContainer}
                    layout={skeletonLayout as any}
                    boneColor="#E1E9EE"
                    highlightColor="#F2F8FC"
                  />
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  vStack: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  hStack: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  box: {
    width: 200, // Fixed width similar to '20rem'
    margin: 8,
  },
  skeletonContainer: {
    flex: 1,
    width: '100%',
  },
});
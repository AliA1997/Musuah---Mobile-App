// import React from 'react';
// import { View, useWindowDimensions, StyleSheet } from 'react-native';
// import SkeletonContent from 'react-native-skeleton-content';

// interface RelativeLoaderSkeletonProps {
//   children?: React.ReactNode;
//   style?: any;
//   isLoading?: boolean;
// }

// export default function RelativeLoaderSkeleton({ 
//   children, 
//   isLoading = true,
//   ...props 
// }: RelativeLoaderSkeletonProps) {
//   const { width } = useWindowDimensions();
//   const isLargeScreen = width >= 1024; // Assuming lg breakpoint is 1024px

//   // Define the skeleton layout based on screen size
//   const skeletonLayout = [
//     { 
//       key: 'image', 
//       width: isLargeScreen ? 120 : 100, 
//       height: isLargeScreen ? 120 : 100, 
//       borderRadius: 10,
//       marginRight: 10
//     },
//     {
//       key: 'content',
//       children: [
//         { 
//           key: 'line1', 
//           width: isLargeScreen ? '50%' : '40%', 
//           height: 12, 
//           marginBottom: 6, 
//           borderRadius: 4 
//         },
//         { 
//           key: 'line2', 
//           width: isLargeScreen ? '30%' : '25%', 
//           height: 10, 
//           marginBottom: 4, 
//           borderRadius: 4 
//         },
//         { 
//           key: 'line3', 
//           width: isLargeScreen ? '20%' : '15%', 
//           height: 10, 
//           borderRadius: 4,
//           marginTop: 4
//         }
//       ]
//     }
//   ];

//   return (
//     <SkeletonContent
//       containerStyle={styles.skeletonContainer}
//       isLoading={isLoading}
//       animationType="pulse"
//       animationDirection="horizontalRight"
//       boneColor="#adadad"
//       highlightColor="#ffffff"
//       layout={skeletonLayout}
//       {...props}
//     >
//       {children}
//     </SkeletonContent>
//   );
// }

// const styles = StyleSheet.create({
//   skeletonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 8,
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 999,
//   },
//   vStack: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   hStack: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 16,
//     flexWrap: 'wrap',
//   },
//   box: {
//     width: 200, // Fixed width similar to '20rem'
//     margin: 8,
//   },
// });
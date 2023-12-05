// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Dimensions,
// } from "react-native";
// import { Container, ImageWrap, TouchWrap } from "../helper/index";
// import { AppIcons } from "../helper/images";
// import { Button, H1 } from "../helper/element";
// import Svg, { G, Circle, Use } from "react-native-svg";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from "react-native-chart-kit";
// import { useState } from "react";

// const commitsData = [
//   { date: "2017-01-02", count: 1 },
//   { date: "2017-01-03", count: 2 },
//   { date: "2017-01-04", count: 3 },
//   { date: "2017-01-05", count: 4 },
//   { date: "2017-01-06", count: 5 },
//   { date: "2017-01-30", count: 2 },
//   { date: "2017-01-31", count: 3 },
//   { date: "2017-03-01", count: 2 },
//   { date: "2017-04-02", count: 4 },
//   { date: "2017-03-05", count: 2 },
//   { date: "2017-02-30", count: 4 },
// ];

// const Stats = () => {
//   const radius = 45;
//   const circleCircumference = 2 * Math.PI * radius;

//   const groceries = 241;
//   const bills = 372;
//   const regular = 188;
//   const total = groceries + bills + regular;

//   const groceriesPercentage = (groceries / total) * 100;
//   const billsPercentage = (bills / total) * 100;
//   const regularPercentage = (regular / total) * 100;

//   const groceriesStrokeDashoffset =
//     circleCircumference - (circleCircumference * groceriesPercentage) / 100;
//   const billsStrokeDashoffset =
//     circleCircumference - (circleCircumference * billsPercentage) / 100;
//   const regularStrokeDashoffset =
//     circleCircumference - (circleCircumference * regularPercentage) / 100;

//   const groceriesAngle = (groceries / total) * 360;
//   const billsAngle = (bills / total) * 360;
//   const regularAngle = groceriesAngle + billsAngle;
//   const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 0;
//   return (
//     <Container flex={1} backgroundColor={"#FFFFFF"}>
//       <Container
//         width={90}
//         height={5}
//         marginLeft={5}
//         verticalAlignment="center"
//         horizontalAlignment="center"
//         marginTop={8}
//       >
//         <Text style={{ fontSize: 16, fontWeight: "bold" }}>
//           Graphical Representation of medications
//         </Text>
//       </Container>
//       <Container marginTop={3} horizontalAlignment="center">
//         <ContributionGraph
//           values={commitsData}
//           endDate={new Date("2017-04-01")}
//           numDays={105}
//           width={340}
//           height={220}
//           chartConfig={{
//             backgroundColor: "#e26a00",
//             backgroundGradientFrom: "#0174cf",
//             backgroundGradientTo: "#0174cf",
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: "6",
//               strokeWidth: "2",
//               stroke: "#ffa726",
//             },
//           }}
//         />
//       </Container>
//       <Container verticalAlignment="center" horizontalAlignment="center">
//         <Svg height="350" width="350" viewBox="0 0 180 180">
//           <G rotation={-90} originX="90" originY="90">
//             {total === 0 ? (
//               <Circle
//                 cx="50%"
//                 cy="50%"
//                 r={radius}
//                 stroke="#F1F6F9"
//                 fill="transparent"
//                 strokeWidth="40"
//               />
//             ) : (
//               <>
//                 <Circle
//                   cx="50%"
//                   cy="50%"
//                   r={radius}
//                   stroke="#b22222"
//                   fill="transparent"
//                   strokeWidth="40"
//                   strokeDasharray={circleCircumference}
//                   strokeDashoffset={groceriesStrokeDashoffset}
//                   rotation={0}
//                   originX="90"
//                   originY="90"
//                   strokeLinecap="round"
//                 />
//                 <Circle
//                   cx="50%"
//                   cy="50%"
//                   r={radius}
//                   stroke="#2639A7"
//                   fill="transparent"
//                   strokeWidth="40"
//                   strokeDasharray={circleCircumference}
//                   strokeDashoffset={billsStrokeDashoffset}
//                   rotation={groceriesAngle}
//                   originX="90"
//                   originY="90"
//                   strokeLinecap="round"
//                 />
//                 <Circle
//                   cx="50%"
//                   cy="50%"
//                   r={radius}
//                   stroke="#ff8c00"
//                   fill="transparent"
//                   strokeWidth="40"
//                   strokeDasharray={circleCircumference}
//                   strokeDashoffset={regularStrokeDashoffset}
//                   rotation={regularAngle}
//                   originX="90"
//                   originY="90"
//                   strokeLinecap="round"
//                 />
//               </>
//             )}
//           </G>
//         </Svg>
//         <Text
//           style={{
//             position: "absolute",
//             textAlign: "center",
//             fontWeight: "500",
//             fontSize: 15,
//           }}
//         >
//           {total}$
//         </Text>
//       </Container>
//     </Container>
//   );
// };
// export default Stats;

// @flow

import React, { ReactNode } from "react";
import Animated, { Easing } from "react-native-reanimated";
import {
  View,
  Text,
  PixelRatio,
  ImageBackground,
  Dimensions,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
} from "react-native";
import { RW, RH, RR } from "./constants";
const { width, height } = Dimensions.get("window");

export const scaleFont = (val: any) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

const Elevation = (elevation: any) => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
      elevation,
      shadowColor: "#0001",
      shadowOffset: { width: 0, height: elevation * 0.6 },
      shadowOpacity: 0.8,
      shadowRadius: elevation * 0.5,
    });
  return response;
};

export const Height = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

/**ANCHOR INTERFACES */
interface GeneralProps {
  style: any;
  backgroundColor: any;
  color: any;
}

interface MarginProps {
  margin: number;
  marginRight: number;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
  marginVertical: number;
  marginHorizontal: number;
}

interface PaddingProps {
  padding: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  paddingVertical: number;
  paddingHorizontal: number;
}

interface BorderRadiusProps {
  borderRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
}

interface BorderWidth {
  borderBottomWidth: number;
  borderTopWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderWidth: number;
  borderColor: any;
}

interface HeightWidthProps {
  maxWidth: any;
  maxHeight: any;
  minWidth: any;
  minHeight: any;
  height: number;
  width: number;
  widthPercent: any;
  heightPercent: any;
}

/**ANCHOR TEXT WRAP */
interface TextWrapProps {
  numberOfLines: number;
  color: string;
  fontFamily: string;
  fontWeight: "bold" | "medium" | "regular";
  fontSize: number;
  lineHeight: number;
  text: string;
  textAlign: "center" | "left" | "right";
  ellipses: "head" | "tail" | "middle" | "clip";
  children: React.ReactNode;
  backgroundColor: any;
  style: any;
}

export const TextWrap = ({ ...props }: TextWrapProps) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipses}
      style={[
        {
          fontWeight: props.fontWeight,
          color: props.color,
          fontSize: scaleFont(props.fontSize) || null,
          lineHeight: scaleFont(props.lineHeight) || null,
          fontFamily: props.fontFamily,
          textAlign: props.textAlign,
        },
        props.style,
      ]}
    >
      {props.children || props.text}
    </Text>
  );
};

TextWrap.defaultProps = {
  ellipses: "tail",
};

/**ANCHOR PAGE */
interface PageProps {
  fullscreen: boolean;
  backgroundColor: any;
  barColor: any;
  barIconColor: "dark" | "light";
  children: React.ReactNode;
}

export const Page = ({ ...props }: PageProps & PaddingProps) => {
  return (
    <View
      style={[
        styles.flex,
        {
          backgroundColor: props.backgroundColor || "#fff",
          padding: props.padding,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          paddingVertical: props.paddingVertical,
          paddingHorizontal: RW(props.paddingHorizontal),
        },
      ]}
    >
      <StatusBar
        translucent={true}
        backgroundColor={props.barColor || "#0000"}
        barStyle={
          props.barIconColor === "dark" ? "dark-content" : "light-content"
        }
      />
      {props.children}
    </View>
  );
};

/**ANCHOR CONTAINER */
interface ContainerProps {
  flexGrow: number;
  overflow: boolean;
  opacity: number;
  position: any;
  elevation: number;
  direction: "row" | "column" | "row-reverse";
  wrap: "wrap";
  flex: number;
  verticalAlignment: "flex-start" | "center" | "flex-end";
  horizontalAlignment:
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly";
  alignSelf: "flex-start" | "center" | "flex-end";
  backgroundColor: any;
  style: object;
  children: React.ReactNode;
  zIndex: number;
  shadowColor: any;
  shadowRadius: number;
  shadowOpacity: number;
}

export const Container = ({
  ...props
}: ContainerProps &
  GeneralProps &
  HeightWidthProps &
  PaddingProps &
  MarginProps &
  BorderRadiusProps &
  BorderWidth) => {
  return (
    <View
      style={[
        {
          overflow: props.overflow,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.alignSelf,
          flexWrap: props.wrap,
          flex: props.flex,

          height: props.heightPercent || RH(props.height),
          width: RW(props.width) || props.widthPercent,

          justifyContent:
            props.direction === "row"
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === "row"
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: RW(props.margin),

          marginVertical: RH(props.marginVertical),
          marginHorizontal: RW(props.marginHorizontal),
          marginRight: RW(props.marginRight),
          marginLeft: RW(props.marginLeft),
          marginTop: RH(props.marginTop),
          marginBottom: RH(props.marginBottom),
          paddingRight: RW(props.paddingRight),
          paddingLeft: RW(props.paddingLeft),
          paddingTop: RH(props.paddingTop),
          paddingBottom: RH(props.paddingBottom),
          padding: RW(props.padding),
          paddingVertical: RH(props.paddingVertical),
          paddingHorizontal: RW(props.paddingHorizontal),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          zIndex: props.zIndex,

          shadowColor: props.shadowColor,
          shadowRadius: props.shadowRadius,
          shadowOpacity: props.shadowOpacity,
          elevation: props.elevation,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};

Container.defaultProps = {};

export const ContainerR = ({
  ...props
}: ContainerProps &
  GeneralProps &
  HeightWidthProps &
  PaddingProps &
  MarginProps &
  BorderRadiusProps &
  BorderWidth) => {
  return (
    <View
      style={[
        {
          overflow: props.overflow,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.alignSelf,
          flexWrap: props.wrap,
          flex: props.flex,
          height: props.heightPercent || RH(props.height),
          width: RW(props.width) || props.widthPercent,
          justifyContent:
            props.direction === "row"
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === "row"
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: RW(props.margin),
          marginVertical: RH(props.marginVertical),
          marginHorizontal: RW(props.marginHorizontal),
          marginRight: RW(props.marginRight),
          marginLeft: RW(props.marginLeft),
          marginTop: RH(props.marginTop),
          marginBottom: RH(props.marginBottom),
          paddingRight: RW(props.paddingRight),
          paddingLeft: props.paddingLeft,
          paddingTop: RH(props.paddingTop),
          paddingBottom: RH(props.paddingBottom),
          padding: RW(props.padding),
          paddingVertical: RH(props.paddingVertical),
          paddingHorizontal: RW(props.paddingHorizontal),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          zIndex: props.zIndex,
          shadowColor: props.shadowColor,
          shadowRadius: props.shadowRadius,
          shadowOpacity: props.shadowOpacity,
          elevation: props.elevation,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};

ContainerR.defaultProps = {};

export const Containerr = ({
  ...props
}: ContainerProps &
  GeneralProps &
  HeightWidthProps &
  PaddingProps &
  MarginProps &
  BorderRadiusProps &
  BorderWidth) => {
  return (
    <View
      style={[
        {
          overflow: props.overflow,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.alignSelf,
          flexWrap: props.wrap,
          flex: props.flex,
          height: props.height,
          width: props.width || props.widthPercent,
          justifyContent:
            props.direction === "row"
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === "row"
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: RW(props.margin),
          marginVertical: RH(props.marginVertical),
          marginHorizontal: RW(props.marginHorizontal),
          marginRight: RW(props.marginRight),
          marginLeft: RW(props.marginLeft),
          marginTop: props.marginTop,
          marginBottom: RH(props.marginBottom),
          paddingRight: RW(props.paddingRight),
          paddingLeft: RW(props.paddingLeft),
          paddingTop: RH(props.paddingTop),
          paddingBottom: RH(props.paddingBottom),
          padding: RW(props.padding),
          paddingVertical: RH(props.paddingVertical),
          paddingHorizontal: RW(props.paddingHorizontal),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          zIndex: props.zIndex,
          shadowColor: props.shadowColor,
          shadowRadius: props.shadowRadius,
          shadowOpacity: props.shadowOpacity,
          elevation: props.elevation,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};

Containerr.defaultProps = {};

export const Container2 = ({
  ...props
}: ContainerProps &
  GeneralProps &
  HeightWidthProps &
  PaddingProps &
  MarginProps &
  BorderRadiusProps &
  BorderWidth) => {
  return (
    <View
      style={[
        {
          overflow: props.overflow,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.alignSelf,
          flexWrap: props.wrap,
          flex: props.flex,
          height: props.height,
          width: RW(props.width),
          justifyContent:
            props.direction === "row"
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === "row"
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: props.margin,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          paddingRight: props.paddingRight,
          paddingLeft: props.paddingLeft,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          padding: props.padding,
          paddingVertical: props.paddingVertical,
          paddingHorizontal: props.paddingHorizontal,
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          zIndex: props.zIndex,
          shadowColor: props.shadowColor,
          shadowRadius: props.shadowRadius,
          shadowOpacity: props.shadowOpacity,
          elevation: props.elevation,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};
Container2.defaultProps = {};
/* ANCHOR AVATAR */

interface AvatarProp {
  borderWidth: number;
  borderColor: any;
  url: string;
  source: any;
  elevation: number;
  size?: number;
  backgroundColor: any;
  position: "absolute" | "relative";
  top: number;
  bottom: number;
  left: number;
  right: number;
  style: any;
  flex: number;
  resize: "contain";
}

export const Avatar = ({
  ...props
}: AvatarProp & GeneralProps & MarginProps) => {
  return (
    <View
      style={[
        {
          ...Elevation(props.elevation),
          position: props.position,
          top: RH(props.top),
          bottom: RH(props.bottom),
          left: RW(props.left),
          right: RW(props.right),
          height: RW(props.size),
          RW: RW(props.size),
          backgroundColor: props.backgroundColor,
          borderRadius: RW(props.size) / 2 || 1,
          marginRight: RW(props.marginRight),
          marginLeft: RW(props.marginLeft),
          marginTop: RH(props.marginTop),
          marginBottom: RH(props.marginBottom),
        },
        props.style,
      ]}
    >
      <Image
        source={props.source || { uri: props.url }}
        resizeMode={props.resize || "cover"}
        style={[
          styles.flex,
          {
            height: RW(props.size) || undefined,
            width: RW(props.size) || undefined,
            borderRadius: RW(props.size),
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
          styles.overflow,
        ]}
      />
    </View>
  );
};

Avatar.defaultProps = {
  size: 20,
};

/* ANCHOR SIZED BOX */

interface SizedBoxProps {
  width: number;
  height: number;
  backgroundColor: any;
}

export const SizedBox = ({ ...props }: SizedBoxProps) => (
  <View
    style={{
      width: RW(props.width),
      height: RH(props.height),
      backgroundColor: props.backgroundColor,
    }}
  />
);

/* ANCHOR SCROLL AREA */

interface ScrollAreaProps {
  horizontal: boolean;
  flexGrow: number;
  children: React.ReactNode;
}

export const ScrollArea = ({ ...props }: ScrollAreaProps) => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{ flexGrow: props.flexGrow }}
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
  >
    <View style={{ flexGrow: props.flexGrow }}>{props.children}</View>
  </ScrollView>
);

/* ANCHOR SCROLL AREA REFRESH */
interface ScrollAreaRefreshProps {
  horizontal: boolean;
  refreshing: boolean;
  onRefresh: () => void;
  children: React.ReactNode;
}

export const ScrollAreaRefresh = ({ ...props }: ScrollAreaRefreshProps) => (
  <ScrollView
    refreshControl={
      <RefreshControl
        onRefresh={props.onRefresh}
        refreshing={props.refreshing || false}
      />
    }
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
  >
    {props.children}
  </ScrollView>
);

/* ANCHOR IMAGE WRAP */

interface ImageWrapProps {
  flex: number;
  elevation: number;
  source: any;
  opacity: number;
  url: any;
  height: any;
  width: any;
  widthPercent: any;
  onPress: () => void;
  backgroundColor: any;
  overlayColor: any;
  horizontalAlignment:
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
  verticalAlignment:
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
  position: "absolute" | "relative";
  fit: "contain" | "cover" | "stretch" | "repeat" | "center";
  tintColor: any;
  children: React.ReactNode;
}

export const ImageWrap = ({
  ...props
}: ImageWrapProps & BorderRadiusProps & MarginProps & PaddingProps) => {
  return (
    <ImageBackground
      source={props.source || { uri: props.url }}
      resizeMode={props.fit}
      style={[
        styles.overflow,
        {
          flex: props.flex,
          elevation: props.elevation,
          position: props.position,
          width: RW(props.width) || props.widthPercent || "100%",
          height: RH(props.height) || props.heightPercent || "100%",
          backgroundColor: props.backgroundColor,
          borderRadius: RR(props.borderRadius) || 0,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          margin: RW(props.margin),
          marginVertical: RH(props.marginVertical),
          marginHorizontal: RW(props.marginHorizontal),
          marginRight: RW(props.marginRight),
          marginLeft: RW(props.marginLeft),
          marginTop: RH(props.marginTop),
          marginBottom: RH(props.marginBottom),
          padding: props.padding,
          opacity: props.opacity,
          zIndex: props.zIndex,
        },
      ]}
    >
      <Container flex={1} backgroundColor={props.overlayColor}>
        {props.children}
      </Container>
    </ImageBackground>
  );
};

export const ImageWrap2 = ({
  ...props
}: ImageWrapProps & BorderRadiusProps & MarginProps & PaddingProps) => {
  return (
    <ImageBackground
      source={props.source || { uri: props.url }}
      resizeMode={props.fit}
      style={[
        styles.overflow,
        {
          flex: props.flex,
          elevation: props.elevation,
          position: props.position,
          width: props.width || props.widthPercent || "100%",
          height: props.height || undefined,
          backgroundColor: props.backgroundColor,
          borderRadius: RR(props.borderRadius) || 0,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          margin: props.margin,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          padding: props.padding,
          opacity: props.opacity,
          zIndex: props.zIndex,
        },
      ]}
    >
      <Container flex={1} backgroundColor={props.overlayColor}>
        {props.children}
      </Container>
    </ImageBackground>
  );
};

/* ANCHOR TOUCH WRAP */
interface TouchWrapProps {
  hitSlop: { top: number; bottom: number; right: number; left: number };
  zIndex: number;
  opacity: number;
  elevation: number;
  height: any;
  width: any;
  widthPercent: any;
  onPress: () => void;
  onLongPress: () => void;
  backgroundColor: any;
  borderBottomColor: any;
  borderBottomWidth: number;
  flex: number;
  verticalAlignment:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
  horizontalAlignment:
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
  borderRadius: number;
  justifyContent: string;
  alignItems: string;
  style: any;
  children: any;
}

export const TouchWrap = ({ ...props }: TouchWrapProps & PaddingProps) => {
  return (
    <TouchableOpacity
      onLongPress={props.onLongPress}
      onPress={props.onPress}
      activeOpacity={0.5}
      hitSlop={props.hitSlop}
      style={[
        {
          ...Elevation(props.elevation),
          opacity: props.opacity,
          padding: RW(props.padding),
          paddingTop: RW(props.paddingTop),
          paddingBottom: RW(props.paddingBottom),
          paddingLeft: RW(props.paddingLeft),
          paddingRight: RW(props.paddingRight),
          paddingVertical: RH(props.paddingVertical),
          paddingHorizontal: RW(props.paddingHorizontal),
          flex: props.flex,
          backgroundColor: props.backgroundColor,
          borderBottomColor: props.borderBottomColor,
          borderBottomWidth: RW(props.borderBottomWidth),
          width: RW(props.width) || props.widthPercent,
          height: RH(props.height),
          borderRadius: props.borderRadius,
          justifyContent: props.verticalAlignment,
          alignItems: props.horizontalAlignment,
          marginBottom: props.marginBottom,
        },
        props.style,
      ]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

/**ANCHOR ROUNDED */
interface RoundedProps {
  backgroundColor: any;
  size: number;
  radius: number;
  height: number;
  position: "absolute" | "relative";
  top: number;
  bottom: number;
  left: number;
  right: number;
  elevation: number;
  marginBottom: number;
  children: React.ReactNode;
}

export const Rounded = ({ ...props }: RoundedProps & MarginProps) => {
  return (
    <View
      style={[
        styles.rounded,
        {
          backgroundColor: props.backgroundColor,
          height: RW(props.size),
          width: RW(props.size),
          ...Elevation(props.elevation),
          borderRadius: props.radius || RH(props.size) / 2,
          marginRight: RW(props.marginRight),
          marginLeft: RW(props.marginLeft),
          marginTop: RH(props.marginTop),
          marginBottom: RH(props.marginBottom),
          position: props.position,
          top: RH(props.top),
          bottom: RH(props.bottom),
          left: RW(props.left),
          right: RW(props.right),
        },
      ]}
    >
      {props.children}
    </View>
  );
};

/* ANCHOR  INPUT WRAP */
interface InputWrapProps {
  multiline: boolean;
  maxHeight: number;
  maxLength: number;
  width: number;
  height: number;
  borderColor: any;
  borderWidth: number;
  color: any;
  showSecure: boolean;
  onToggleSecure: () => void;
  secureIcon: any;
  icon: any;
  inputStyle: object;
  fontSize: number;
  returnKeyType: "next" | "done" | "go" | "search";
  fontWeight: string;
  fontFamily: string;
  secure: boolean;
  autoCompleteType:
  | "off"
  | "cc-csc"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-number"
  | "email"
  | "name"
  | "password"
  | "postal-code"
  | "street-address"
  | "tel"
  | "username";
  autoCorrect: boolean;
  numberOfLines: number;
  placeholder: string;
  onChangeText: () => void;
  onFocus: () => void;
  onBlur: () => void;
  elevation: number;
  backgroundColor: any;
  borderRadius: number;
  onSubmit: () => void;
  onPress: () => void;
  keyboardType:
  | "default"
  | "email-address"
  | "numeric"
  | "phone-pad"
  | "number-pad";
  textAlignVertical: "auto" | "top" | "bottom" | "center";
  value: any;
  autoCapitalize: "none" | "sentences" | "words" | "characters";
  placeholderTextColor: any;
  refValue: any;
  inputHeight: number;
  verticalAlignment: "center";
  horizontalAlignment: "center";
  textAlign: "center" | "left" | "right";
  children: Element;
  flex: number;
  textPaddingVertical: number;
  textPaddingHorizontal: number;
  editable: boolean;
}

export const InputWrap = ({ ...props }: InputWrapProps & PaddingProps) => {
  return (
    <Container
      flexGrow={0}
      direction="row"
      width={props.width}
      height={props.height}
      elevation={props.elevation}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      style={styles.overflow}
    >
      {props.icon ? (
        <Container
          paddingHorizontal={4}
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          {props.icon}
        </Container>
      ) : null}
      <TextInput
        blurOnSubmit={false}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
        textAlign={props.textAlign}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmit}
        keyboardType={props.keyboardType}
        ref={props.refValue}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        numberOfLines={props.numberOfLines}
        autoCapitalize={props.autoCapitalize || "none"}
        autoCompleteType={props.autoCompleteType || "off"}
        autoCorrect={props.autoCorrect}
        editable={props.editable}
        secureTextEntry={props.secure}
        returnKeyType={props.returnKeyType}
        maxHeight={RH(props.maxHeight)}
        style={[
          styles.flex,
          styles.input,
          {
            color: props.color || "#333",
            height: RH(props.inputHeight),
            fontFamily: props.fontFamily,
            fontWeight: props.fontWeight,
            fontSize: scaleFont(props.fontSize) || scaleFont(11),
            paddingTop: RH(props.paddingTop),
            paddingBottom: RH(props.paddingBottom),
            paddingVertical: RH(props.textPaddingVertical),
            paddingHorizontal: RH(props.textPaddingHorizontal),
            paddingLeft: RW(props.paddingLeft),
            paddingRight: RW(props.paddingRight),
          },
          props.inputStyle,
        ]}
      />
      {props.secureIcon ? (
        <TouchWrap onPress={props.onToggleSecure}>
          <Container
            flex={1}
            paddingHorizontal={4}
            verticalAlignment="center"
            horizontalAlignment="center"
          >
            {props.secureIcon}
          </Container>
        </TouchWrap>
      ) : null}
    </Container>
  );
};

InputWrap.defaultProps = {
  flex: 1,
  verticalAlignment: "center",
  horizontalAlignment: "center",
};

/* ANCHOR  SLIDE TRANSITION */
interface SlideProps {
  direction: "horizontal" | "vertical";
  duration: number;
  from: number;
  style: any;
  elastic: number;
  children: React.ReactNode;
}

/* ANCHOR  SLIDE TRANSITION CALLBACK*/
interface SlideCallbackProps {
  direction: "horizontal" | "vertical";
  duration: number;
  from?: number;
  style: any;
  elastic: number;
  children: React.ReactNode;
  handleComplete: () => void;
  index: boolean;
}

export const SlideTransitionCallback = ({ ...props }: SlideCallbackProps) => {
  const [animate] = React.useState(new Value(0));
  const [show, setShow] = React.useState(props.index);

  React.useEffect(() => {
    if (props.index === true) {
      slideShow();
    }

    if (props.index === false) {
      slideHide();
    }
  }, [props.index]);

  return (
    <View
      style={[
        props.style,
        {
          opacity: animate,
          transform:
            props.direction === "horizontal"
              ? [
                {
                  translateX: slideX,
                },
              ]
              : [
                {
                  translateY: slideY,
                },
              ],
        },
      ]}
    >
      {props.children}
    </View>
  );
};

/* ANCHOR  STYLES*/
const styles = StyleSheet.create({
  overflow: { overflow: "hidden" },
  flex: { flex: 1 },
  input: {
    paddingLeft: 0,
    fontWeight: Platform.OS === "ios" ? "bold" : null,
  },
  width: { width: "100%" },
  rounded: { justifyContent: "center", alignItems: "center" },
});

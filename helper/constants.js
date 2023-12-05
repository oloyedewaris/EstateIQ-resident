/* eslint-disable prettier/prettier */
import React from "react";
import { Dimensions, PixelRatio } from "react-native";
// export const FONT_FAMILY = 'Inter-Bold.ttf';

export const Colors = {
  appWhite: "#FFFFFF",
  appPrimaryBlue: "#1037B5",
  appBlack: "#000000",
  appTextDeepBlue: "#1D3354",
  appTextBlue: "#2286FE",
  appTextGrey: "#616161",
  appTextGrey2: "#9E9E9E",

  appInactiveBlue: "#E0EAF6",
  appInactiveGrey: "#EBEDF0",
  appTextErrorRed: "#FA4F4F",
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

const { width, height } = Dimensions.get("window");

export const RH = (val) => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};

export const RW = (val) => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = (val) => {
  // let factor = PixelRatio.get();
  // factor > 2.2 ? (factor = 2) : null;
  // let size = ((factor * width) / 1000) * val;
  return val;
};

export const RR = (val) => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};

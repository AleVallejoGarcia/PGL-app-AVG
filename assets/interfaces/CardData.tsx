import { ImageBackgroundProps } from "react-native";
import { ImageProps } from "react-native";

export interface CardData {
    title:string,
    description:string,
    background:ImageBackgroundProps,
    avatar:ImageProps,
    skillList: string[],
  }
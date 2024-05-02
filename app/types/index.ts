import {MouseEventHandler} from "react";

export interface CustomButtonsProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyle?: string;
    textStyles?: string;
    title: string;
    rightIcon?: any;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface RightArrowProps {
    containerStyle?: string;
}

export interface SectionHeaderProps {
    mainHeader: string;
    subHeader: string;
}
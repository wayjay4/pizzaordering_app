"use client"
import { CustomButtonsProps } from "@/app/types";

const CustomButton = ({isDisabled, btnType, containerStyle, textStyles, title, rightIcon, handleClick}: CustomButtonsProps) => {
    return (
        <button
            disabled={isDisabled}
            type={btnType || "button"}
            className={`bg-primary text-white px-8 py-2 rounded-full ${containerStyle}`}
            onClick={handleClick}
        >
            <span className={`flex gap-2 justify-center items-center ${textStyles}`}>
                {`${title}`} {rightIcon ?? (rightIcon)}
            </span>
        </button>
    );
}

export default CustomButton;

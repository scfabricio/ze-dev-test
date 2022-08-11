import { MouseEvent } from "react";

export interface ICategoryChipProps {
    children: string;
    disabled?: boolean;
    onClick: (e: MouseEvent) => void;
}

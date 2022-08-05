import { MouseEvent } from "react";

export interface ICategoryChipProps {
    children: string;
    disable?: boolean;
    onClick: (e: MouseEvent) => void;
}

import { ReactNode } from "react";

export interface ICustonInputProps {
    value: string;
    className?: string;
    icon: ReactNode;
    onChange: (value: string) => void;
    type?: string;
    onFocus?: () => void;
    placeholder?: string;
}

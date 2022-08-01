export enum EVariantAlert {
    ERROR,
    INFO,
    SUCCESS
}

export interface IAlertProps {
    className?: string;
    variant: EVariantAlert;
    children: string;
    callback?: () => void;
}

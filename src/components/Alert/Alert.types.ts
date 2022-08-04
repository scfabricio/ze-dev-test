export interface IAlertProps {
    className?: string;
    variant: "error" | "info" | "success";
    children: string;
    callback?: () => void;
}

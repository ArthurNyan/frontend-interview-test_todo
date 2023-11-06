import { ListItemProps } from "./ListItemProps";
import { ModalCreateItemProps } from "./ModalCreateItemProps";

export interface ModalProps extends ModalCreateItemProps {
    children: React.ReactNode;
    clearState?(): void;
    
}
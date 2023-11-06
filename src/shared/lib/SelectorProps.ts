export interface SelectorProps {
    clearState?(): void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>
};
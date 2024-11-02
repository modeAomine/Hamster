export interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem: string | null;
    token: string | null;
}
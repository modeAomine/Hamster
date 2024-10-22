export interface ProfileProps {
    onClose: () => void;
    user: TelegramUser | null;
    balance?: number | null;
}
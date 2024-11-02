export interface HeaderProps {
    onSettingsClick: () => void;
    user: TelegramUser | null;
    token: string | null;
}
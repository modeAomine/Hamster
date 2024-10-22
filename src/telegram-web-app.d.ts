interface TelegramUser {
    id: number;
    photo_url: string;
    first_name?: string;
    last_name?: string;
    username?: string;
}

interface TelegramWebApp {
    backgroundColor: string;
    headerColor: string;
    buttonColor: string;
    buttonTextColor: string;
    onEvent(event: string, callback: () => void): void;
    offEvent(event: string, callback: () => void): void;
    MainButton: {
        show(): void;
        hide(): void;
        setText(text: string): void;
        setColor(color: string): void;
    };
    initDataUnsafe: {
        user: TelegramUser;
    };
    sendData(data: value): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
import ChatComponent from '../components/ChatComponent';
import { useTranslation } from 'react-i18next';


export default function Chat() {
    const { t } = useTranslation();
    return (
    <>
            <div className="header">{t('chat')}</div>
            <ChatComponent
            
            />
    </>

    )
}
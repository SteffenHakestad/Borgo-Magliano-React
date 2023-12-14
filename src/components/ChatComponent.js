import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    Sidebar,
    ConversationList,
    Conversation,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    Avatar,
    ConversationHeader,
  } from "@chatscope/chat-ui-kit-react";


export default function ChatComponent({}) {
    function SendMessage(e) {
        console.log("Chat Message: " + e);
    }
    return <>
    <div id="chat-outer-container">
        <MainContainer className='chat-container'>
            <Sidebar position='left'>
                <ConversationList>
                    <Conversation name="John Doe" lastSenderName="John Doe" info="What's up?"> 
                        <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" />
                    </Conversation>
                </ConversationList>
            </Sidebar>
            <ChatContainer>
                <ConversationHeader>
                    <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" />
                    <ConversationHeader.Content userName="John Doe" info="Active 10 mins ago" />
                </ConversationHeader>
                <MessageList>
                    <Message model={{
                            message: "Hello my friend",
                            sender: "John Doe",
                            sentTime: "just now",
                            direction: "incoming",
                            position: "single",
                        }
                    
                    }>

                    </Message>
                </MessageList>
                <MessageInput placeholder="Skriv en melding" attachButton={false} onSend={SendMessage}/>
            </ChatContainer>
        </MainContainer>
        </div>
    
    
    </>

}

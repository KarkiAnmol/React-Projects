import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
    //Destructuring the object properties
    const { chats, activeChat, userName, messages } = props;

    //this will execute If chats are present 
    const chat = chats && chats[activeChat];

    //function to render messages
    const renderMessages = () => {
        //storing the keys of messages in constant keys of current Object
        const keys = Object.keys(messages);

        //returning the keys
        return keys.map((key, index) => {

            //storing the message of a particular key inside the constant message for every time the loop runs
            const message = messages[key];

            const lastMessageKey = index === 0 ? null : keys[index - 1];

            //checking if the message is ours 
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className="read-reciepts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}></div>

                </div>
            );
        });


    };

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title}
                </div>
                <div className="chat-subtitle">

                </div>
                {renderMessages()}
                <div style={{ height: '100px' }} />
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
                </div>
            </div>
        </div>
    )
}
export default ChatFeed;

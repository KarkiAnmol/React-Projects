import './App.css';
import {ChatEngine}from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
   <ChatEngine
      height='95vh'
			projectID='2348860e-4bd5-4403-922d-c0ed5cb8ae3c'
			userName='Rocky'
			userSecret='rocky123'
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} //Render Chat Feed receives a Chat App Props Object as a parameter, then can render a custom react component in it's place.
     onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}//plays a sound on new message
     

		/>
    
  );
}

export default App;

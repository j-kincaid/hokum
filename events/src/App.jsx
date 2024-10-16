function IamAButton() {
  return (
    <button>
      I am a button
    </button>
  );
}

function ButtonWithHandler() {
	function handleClick() {
		alert('Good choice.');
	}

	return (
		<button onClick={handleClick}>
		Click me
		</button>
	);
}
function EventHandlerProps({message, children}) {
  return (
    <button onClick={() => alert (message)}>
      {children}
    </button>
  );
}



{/*event handlers as props */}

function EventHandlersAsPropsButton({ onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayTheMovie({ movie }) {
  function handlePlayClick() {
    alert(`${movie} is my favorite!`);
  }

  return (
    <EventHandlersAsPropsButton onClick={handlePlayClick}>
      Play "{movie}"
    </EventHandlersAsPropsButton>
  );
}

function UploadYourImage() {
  return (
    <EventHandlersAsPropsButton onClick={() => alert('Thank you, it is beautiful.')}>
      Give Me Your Headshot
    </EventHandlersAsPropsButton>
  );
}

{ /* end of event handlers as props */}


{/* Custom handler names */}

function CustomHandlerNameButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function TheGoods({ onPlayIceAge, onUploadHeadshot }) {
  return (
    <div>
      <CustomHandlerNameButton onClick={onPlayIceAge}>
        Watch Ice Age!
      </CustomHandlerNameButton>
      <CustomHandlerNameButton onClick={onUploadHeadshot}>
        Let me make fun of your photo
      </CustomHandlerNameButton>
    </div>
  );
}


{/* End of custom handler names */}

export default function App() {

return (
<>
<IamAButton />
  <ButtonWithHandler />
      <div>
        <EventHandlerProps message="You pressed the button!">
          Press the button?
        </EventHandlerProps>
        <EventHandlerProps message="Good job!">
          Or not?
        </EventHandlerProps>
      </div>
    <div>
        <PlayTheMovie movie="Ice Age" />
        <UploadYourImage />
      </div>
    <TheGoods
        onPlayIceAge={() => alert('A cinematic masterpiece')}
        onUploadHeadshot={() => alert('This is just ok.')}
      />
  </>
  )
}
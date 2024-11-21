import { useState } from 'react';

function BasicQuiz({status = 'empty'}) {
  if ( status === 'success' ) {
    return <h1>Spongebob!</h1>
  }

  return (
    <>
      <h2>This is a quiz</h2>
      <p>
        Who lives in a pineapple under the sea?
      </p>
      <form>
        <textarea />
        <br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}


function DisabledButton({
  status = 'empty'
}) {
  if (status === 'success') {
    return <h1>Spongebob!</h1>
  }
  return (
    <>
      <h2>This is a quiz!</h2>
      <p>
        Who lives in a pineapple under the sea?
      </p>
      <form>
		    <textarea disabled={status === 'submitting'} />
        <br />
        <button disabled={status === 'empty' || status === 'submitting'}>
          Submit
        </button>
        {status === 'error' && <p>  That is not correct. </p>}
      </form>
    </>
  );
}

function CompleteForm() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1> I'm ready, I'm ready!</h1>
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    }
    catch (err) {
      setStatus('typing');
      setError(err);
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>This is a quiz</h2>
      <p>
        Who lives in a pineapple under the sea?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p>
            {error.message}
          </p>
        }
      </form>
    </>
  );
}


function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'spongebob'
      if (shouldError) {
        reject(new Error('no'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function AllVisualStates( {status} ) {
	if (status === 'success') {
    return <h2>That's right!</h2>
  }
  return (
  <>
    <form>
      <textarea disabled={
        status === 'submitting'
      } />
      <br />
      <button disabled={
        status === 'empty' ||
        status === 'submitting'
      }>
        Submit
      </button>
      {status === 'error' &&
        <p className="Error">
          That is not correct.
        </p>
      }
    </form>
	</>
  );
}

function AllVisualStatesPart2() {
let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

 return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <AllVisualStates status={status} />
        </section>
		
      ))}
    </>
  );
	
	
}

export default function App() {
	return(
		<>
			<BasicQuiz />
			<h1> ------------------------------------------------------------------</h1>
			<DisabledButton />
			<h1> ------------------------------------------------------------------</h1>
			<CompleteForm />
			<h1> ------------------------------------------------------------------</h1>			
			<h1>Style Guide </h1>
			<h1>***</h1>
			<AllVisualStatesPart2 />
		</>
	);
}
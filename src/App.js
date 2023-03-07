import './App.css'

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.first_name}</h1>
      <h2>Last Name: {props.last_name}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'John'
  // const name = '';

  const isNameShowing = false

  return (
    <div className='App'>
      <Person first_name={'John'} last_name={'Doe'} age={30}/>
      <Person first_name={'Mary'} last_name={'Doe'} age={24}/>
      <Person first_name={'Johah'} last_name={'Zesoe'} age={36}/>
      <h1>Hello {isNameShowing ? name : 'someone'}!</h1>
      {name ? (
        <>
          <h1>name is truthy</h1>
        </>
      ) : (
        <>
          <h1>name is falsy</h1>
          <h2>there is no name</h2>
        </>
      )}
    </div>
  )
}

export default App

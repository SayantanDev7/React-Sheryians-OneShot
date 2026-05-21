const App = () => {


  return (
    <div>
      <h1>Two Way Binding</h1>
      {/* /* form is handling both the state and the UI */}
      {/* //onsubmit event handler prevents the default behavior of the form
      //preventDefault() is a function that prevents the default behavior of an event */}

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("Form Submitted");
      }}>
        <input type="text" placeholder='Enter Your Name' className='bg-slate-200 rounded-full p-2' />
        <button type="submit" className="bg-black text-white cursor-pointer rounded-full p-4">Submit</button>
      </form>
    </div>
  )
}

export default App
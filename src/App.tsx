import React, { useState } from "react";

const useInput = (initialValue: string, checking: Function) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;

    //validator =  the second prop is a function "maxlen" which returns boolean
    ///////////////////////////////////////////////////////////////////////
    let willUpdate = true;
    if (typeof checking === "function") {
      willUpdate = checking(value);
    }
    // checking(value) = whether value.length is less then 10 or not.
    // if under 10, willUpdate = true;
    // if not, willUdate = false; then return nothing
    ////////////////////////////////////////////////////////////////////////
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

//note : value={} onChange={} means <input> has props which is an array. value=, onChange= is just like symbole. afterall, there is a huge array that contains every props
//in other words, it looks like <input {...........}/>
//So, I can use this concept like that below {...name}
//like <input {value:"MR. " onChange: event.target}
//sidenote, target means the the main agents of event. in other words, <input>
//so, the property's name is already defined. I should set "name" and "onChange" for javascript to understand them
const App = () => {
  const maxlen = (value: any) => value.length <= 10 && !value.includes("Fuck");
  const name = useInput("", maxlen);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default App;

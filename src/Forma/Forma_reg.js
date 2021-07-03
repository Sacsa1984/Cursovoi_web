import React from "react";
export function Form(props) {
 
    let  nameRef = React.createRef();
    
     let  lastNameRef = React.createRef();
     let emailRef=React.createRef();
      const handlerSubmit = (event) => {
      event.preventDefault();
     props.onclic(nameRef.current.value,lastNameRef.current.value,emailRef.current.value)
      
      }
      return (
        <div>
      <form onSubmit={handlerSubmit}>
      <div className="formElement">
      <input
      type="text"
    
      placeholder="Ваше ник"
      ref={nameRef}
      
      required
      />
    
      </div>
      <div className="formElement">
      <input
      type="text"
      placeholder="Ваша пароль"
       ref={lastNameRef}
      required
      />
      </div>
      <div className="formElement">
      <input
      type="text"
      placeholder="Ваша почта"
       ref={emailRef}
      required
      />
  
      </div>
      <div className="formElement">
      <input type="submit" value="занести " />
      </div>
      </form>
      </div>
      );
      }
      export  function Regist_dan(props) {
        
  
        return (
          <div>
           
        
        <div >
      {props.Mydan}
      
        </div>
    
        <div>
        {props.MyLast}
        </div>
        <div>
        {props.MyEmail}
        </div>
  
        </div>
        );
       }
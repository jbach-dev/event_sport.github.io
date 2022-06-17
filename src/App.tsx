import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import axios from 'axios';

type FormState = {
  category:string;
  name:string;
  description:string;
};

type ServiceMessage = {
  class:string;
  text:string;
}

function App(){
  const formId = 'iy9tCEb6';
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const initialFormState = {
    category: "",
    name:"",
    description:"",
  };
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };
  
  const postSubmission = async () => {
    const payload = {
      ...formState
    };
    try{
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class:'message_successfull',
        text:'Votre event a bien été créé.',
      });
      setFormState(initialFormState);
      setSubmitting(false);
    }catch(error){
      // console.log(error);
      setMessage({
        class:'message_not_successfull',
        text:'Une erreur a été détectée lors de la création de votre event',
      });
    }
  };
  const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const{ id, value} = event.target;
    const formkey = id as keyof FormState;
    const updatedFormState = { ...formState};
    updatedFormState[formkey] = value;
    setFormState(updatedFormState);
  };

  return (
    <div className="all_form">
      <div className="div_form">
        <h1 className='title_form'>
        <div className="text_image">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon_party" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span>Save a Sport Event</span>

        </div>
      <form className="form_elements" onSubmit={submitForm}>
        <div className="label_input">
          <label className="label" htmlFor="category">Sport</label>
          <input
            id="category"
            onChange={updateFormControl}
            type="text"
            className="input"
            value={formState.category}
          />
        </div>
        <div className="label_input">
          <label className="label" htmlFor="name">Name</label>
          <input
            id="name"
            onChange={updateFormControl}
            type="text"
            className="input"
            value={formState.name}
          />
        </div>
        <div className="label_input">
          <label className="label" htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={updateFormControl}
            className="input"
            value={formState.description}
          ></textarea>
        </div>
        <button disabled={submitting} className="button_form">
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      </h1>
      {message && (
        <div className={`message_txt ${message.class}`}>
          {message.text}
          </div>
      )}
      </div>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Question 1?',
      answer: 'Réponse 1.',
      open: true
    },
    {
      question: 'Question 2?',
      answer: 'Reponse 2.',
      open: false
    },
    {
      question: 'Question 3?',
      answer: 'Reponse 3.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
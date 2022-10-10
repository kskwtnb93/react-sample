import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello'
import Name from './components/Name';
import Message from './components/Message';
import ContainerSample from './components/ContainerSample';
import ContextSample from './components/ContextSample';
// import { Parent } from './components/Parent';
import { Parent } from './components/UseCallbackSample';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { UseContextSample } from './components/UseContextSample';
import { ImageUploader } from './components/UseRefSample1';
import { UseRefSample2 } from './components/UseRefSample2';
import { Input } from './components/CustumHookSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Hello />
	 <Name />
	 <Message />
	 <ContainerSample />
	 <ContextSample />
	 <Parent />
	 <UseMemoSample />
	 <Clock />
	 <UseContextSample />
	 <ImageUploader />
	 <UseRefSample2 />
	 <Input />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

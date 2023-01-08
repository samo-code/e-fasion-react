import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
// import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,setContext} from "@apollo/client"

// const httpLink = new HttpLink({
//   uri:"https://api.github.com/graphql"
// })
// const authLink = setContext((_,{headers})=>{
//   return{
//     headers:{
//       ...headers,
//       authorization:`Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
//     }
//   }
// })
// const link = authLink.concat(httpLink)

// const client = new ApolloClient({
//   link:link,
//   cache:new InMemoryCache()
// })
const client = new ApolloClient({
  uri:"",
  cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <Router>
     <App />
  </Router>
  </Provider>
  
   
  
);



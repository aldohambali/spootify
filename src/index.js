import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <Routes />
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import UsersList from "./common/components/Users/UsersList";
// import AddUsers from "./common/components/Users/UsersAdd";
// import EditUsers from "./common/components/Users/UsersEdit";
 
// function App() {
//   return (
//     <Router>
//     <div className="container">
//       <div className="columns">
//         <div className="column is-half is-offset-one-quarter">
//           <Routes>
//             <Route exact path="/">
//               <UsersList />
//             </Route>
//             <Route path="/add">
//               <AddUsers />
//             </Route>
//             <Route path="/edit/:id">
//               <EditUsers />
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     </div>
//     </Router>
//   );
// }
 
// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import UsersList from "./common/components/Users/UsersList";
// import AddUsers from "./common/components/Users/UsersAdd";
// import EditUsers from "./common/components/Users/UsersEdit";
 
// function App() {
//   return (
//     <Router>
//     <div className="container">
//       <div className="columns">
//         <div className="column is-half is-offset-one-quarter">
//           <Routes>
//             <Route exact path="/">
//               <UsersList />
//             </Route>
//             <Route path="/add">
//               <AddUsers />
//             </Route>
//             <Route path="/edit/:id">
//               <EditUsers />
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     </div>
//     </Router>
//   );
// }
 
// export default App;

import './App.css';
import { useQuery } from 'react-query';
import fetchPosts from './FetchApi';
import Form from './Form.jsx';


function App() {
  const { data, error, isError, isLoading } = useQuery('users', fetchPosts);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error! {error.message}</p>
  }

  return (
    <div className="App">
      <h1 className="container">Users Name</h1>
      <ul>
        {data.map((users, id) => {
          return (
            <li className="container" key={id}>
              {users.name}
            </li>
          );
        })}
      </ul>
      <Form/>
    </div>
  );
}

export default App;

import React from 'react'
import {useQuery} from '@apollo/client'
import {GET_CLIENTS} from '../Queries/client.query.js'
import ClientRow from './ClientRow';
import Spinner from './Spinner.jsx';



const Clients = () => {
    const {loading,error,data} = useQuery(GET_CLIENTS);
    if(loading) return <Spinner />;
    if(error) return <p>Error</p>;
  return (
    <div>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
                <ClientRow client={client} key={client.id}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Clients

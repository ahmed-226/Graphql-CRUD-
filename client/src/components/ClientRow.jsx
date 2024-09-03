import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {useMutation} from '@apollo/client'
import {DELETE_CLIENT} from '../Mutations/client.mutation.js'
import {GET_CLIENTS} from '../Queries/client.query.js'
import { GET_PROJECTS } from '../Queries/project.query.js'

const ClientRow = ({ client }) => {

    const [deleteClient] = useMutation(DELETE_CLIENT,{
        variables:{id:client.id},
        refetchQueries:[{query:GET_CLIENTS},{query:GET_PROJECTS}]
    });

    return (
        <>
            <tr>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                    <button className='btn btn-danger' onClick={deleteClient}>
                        <FaTrash />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ClientRow

import axios from 'axios'
import { useQuery } from 'react-query'
import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

function handleGetComments(){
  
    return axios.get('https://jsonplaceholder.typicode.com/comments')
  
}
function Home() {
    const { isLoading, error, data } =  useQuery('commnets-list',handleGetComments)

   console.log(data);
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
   return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>postId</Table.HeaderCell>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Detail</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>


      <Table.Cell>m</Table.Cell>
        <Table.Cell>t</Table.Cell>
        <Table.Cell>tt</Table.Cell>
        <Table.Cell>dd</Table.Cell>
      </Table.Row>
     
    </Table.Body>

  </Table>
   )
}

export default Home
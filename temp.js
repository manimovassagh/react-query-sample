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
     <div>
        
      {data.data.map(comment=>{
        return (   
            <>
            {/* <div key={comment.id}>{comment.name}</div> */}
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>email</Table.HeaderCell>
        <Table.HeaderCell>Body</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
      <Table.Cell>{comment.id}</Table.Cell>
        <Table.Cell>{comment.name}</Table.Cell>
        <Table.Cell>{comment.email}</Table.Cell>
        <Table.Cell>{comment.body}</Table.Cell>
      </Table.Row>
     
    </Table.Body>

  </Table>
  </>
        )
      })}
      
     </div>
   )
}

export default Home
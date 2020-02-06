import React from 'react'
import TaskContext from '../../utils/TaskContext'
import { Table } from 'reactstrap'

const TaskDisplay = () => {
  return (
    <TaskContext.Consumer>
      {
        ({tasks}) => (
          <>
            <Table dark>
              <thead>
                <tr>
                  <th><h4>#</h4></th>
                  <th><h4>title</h4></th>
                  <th><h4>owner</h4></th>
                  <th><h4>task</h4></th>
                  <th><h4>assigned</h4></th>
                  <th><h4>dueDate</h4></th>
                  <th><h4>priority</h4></th>
                  <th><h4>status</h4></th>
                  <th><h4>text</h4></th>
                  <th><h4>timeline</h4></th>
                  <th><h4>date</h4></th>
                  <th><h4>numbers</h4></th>
                  <th><h4>user</h4></th>
                </tr>
              </thead>
              <tbody>
                  {
                    tasks.map( ( { _id, title, owner, task, assigned, dueDate, priority, status, text, timeline, date, numbers, user,}, i) =>
                      <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{title}</td>
                        <td>{owner}</td>
                        <td>{task}</td>
                        <td>{assigned}</td>
                        <td>{dueDate}</td>
                        <td>{priority}</td>
                        <td>{status}</td>
                        <td>{text}</td>
                        <td>{timeline}</td>
                        <td>{date}</td>
                        <td>{numbers}</td>
                        <td>{user}</td>
                      </tr>
                    )
                  }
              </tbody>
            </Table>
          </>
        )
      }
    </TaskContext.Consumer>
  )
}

export default TaskDisplay

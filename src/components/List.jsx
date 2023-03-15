import React, {  useRef, useState } from 'react'
import { useObserver } from '../hooks/useObserver'

export default function List() {
  const limit = 10
  const [todos, setTodos]=useState([])
  const [page, setPage] = useState(1)
  
  const parentRef = useRef()
  const childRef = useRef()
  function fetching(limit, page) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodos(prev => [...prev, ...json])
        setPage(prev => prev + 1)
      })
  }

  const intersected = useObserver(parentRef, childRef, () => fetching(limit, page))
  
  return (
    <div ref={parentRef} style={{ height: "80vh", overflow: 'auto'}}>
      {
        todos.map((todo) =>
          <div style={{ padding: 30, border: '1px solid #000' }}>
            { todo.title}
          </div>
        )
        
      }
<div ref={childRef} style={{height: 20}}></div>
    </div>
  )
}

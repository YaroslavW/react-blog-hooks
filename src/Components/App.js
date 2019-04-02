import React, { useState, useEffect } from 'react'
import Post from './Post'
import Container from 'muicss/lib/react/container'
import Appbar from 'muicss/lib/react/appbar'

function App() {
  const [posts, setPost] = useState([])
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPost(data)
        // console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <Container>
        <Appbar>
          <table width="100%">
            <tbody>
              <tr>
                <td className="mui--appbar-height">Logo</td>
              </tr>
            </tbody>
          </table>
        </Appbar>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {posts.map((post, index) =>
          visible ? <Post key={index} index={index} post={post} /> : null
        )}
      </Container>
    </div>
  )
}
export default App

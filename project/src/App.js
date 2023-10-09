import React, {useState} from 'react'
import './App.css';
import Content from './Content';
import Header from './Header';

function App() {
  const [listData, setListData] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    const handleClick = async(item) =>{
      setIsLoad(true)
        try{
          if(item === "user"){
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const userData = await response.json()
            setListData(userData)
          }else if(item === "post"){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const userData = await response.json()
            setListData(userData)
          }else if(item === "comment"){
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const userData = await response.json()
            setListData(userData)
          }
        } catch(err){
            console.log("Error Catched", err)
        } finally{
            setIsLoad(false)
        }
    }
  return (
    <main>
      <Header 
        handleClick = {handleClick}
      />
      <Content 
        listData = {listData}
        isLoad = {isLoad}
      />

    </main>
  );
}

export default App;

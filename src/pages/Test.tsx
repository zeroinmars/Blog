import React from 'react'

const test = () => {
    const data:any[] = []
    function pushData<T>(number:T):any[]{
        data.push(number)
        return data;
    }
    
  return (
    <div style={{background:"red"}}>
        <button onClick={()=>{pushData<Number>(100)}}>dd</button>
        <button onClick={()=>{console.log(data)}}>check Data</button>
        {data}
    </div>
  )
}

export default test
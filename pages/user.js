import React, { useState, useEffect } from 'react';


const users = ()=>{
	  const [count, setCount] = useState([]);


 


useEffect(()=>{
	fetch("/api/user")
		.then((res) => res.json())
		.then((data)=>{
			setCount(data);
		});
},[])


	return(
		<>
			 
				{count.map((data, index)=>{
					return(
					<>					
						<div className="" key={data.id}>{data.id} / {data.name}</div>					
					</>
					)
				})}
		</>
		)
}





export default users;
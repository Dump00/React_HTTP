# HTTP with React

**This project is a demonstration of testing the alternative ways of making an Ajax call with React Library**

**Source**

    

> https://jsonplaceholder.typicode.com/posts

 
 1. App1 Component
	 - 
	Fetch data using JavaScript Fetch API
	```
	const  respose = await  fetch('https://jsonplaceholder.typicode.com/posts')
	const  data = await  respose.json()
	```

 2. App2 Component
	  -
	  Fetch data using Axios
	  ```
	  const {data} = await  axios('https://jsonplaceholder.typicode.com/posts')
	  ```
	  
 3. App3 Component
	 - 
	 Fetch data using XHR
	 ```
	const http = new XMLHttpRequest();  
	const API_URL = ‘https://jsonplaceholder.typicode.com/posts’  
	http.onreadystatechange = () => {  
	if (http.readyState === 4 && http.status === 200){  
			const data = JSON.parse(http.responseText)  
		}  
	};  
	http.open(‘GET’, API_URL, true);  
	http.send();


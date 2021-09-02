import { ListItem, ListItemText, Button } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo, inprogress, id}) {
	
	const toggleProgress = () => {
		db.collection("todos").doc(id).update({
			inprogress: !inprogress
		});
	}

	const deleteTodo = () => {
		db.collection("todos").doc(id).delete();
	}
	
	return (
		<div style={{display:"flex"}}>
			<ListItem>
				<ListItemText primary={todo} 
				secondary={inprogress ? "In Progress" : "Done"}/>
			</ListItem>
			<Button onClick={toggleProgress}>{inprogress ? "Done" : "UnDone"}</Button>
			<Button onClick={deleteTodo}>x</Button>
			
		</div>
	)
}

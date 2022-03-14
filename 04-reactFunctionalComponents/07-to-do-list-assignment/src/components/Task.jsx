import React, {useState} from "react";

const Task = ()=>{
    
    let [userTask, setUserTask] = useState("")
    let [placeHolder, setPlaceHolder] = useState("Task")
    
    //variable for if user has completed task
    let [taskUploaded, setTaskUploaded] = useState(false)

    let [taskList, setTaskList] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault(); // prevents the form from reloading the whole page
        let newUserTask = {userTask, taskUploaded}

        //clear out the form inputs
        setUserTask("")

        setTaskList([...taskList, newUserTask])
    }

    const updateTask = (i)=>{
        console.log("index number of user we want to update is -->", i)
        console.log("here is the user I want to update --> ", taskList[i].taskUploaded)

        //make a copy of our original array and modify the copy
        let copyOfTaskList = [...taskList]
        copyOfTaskList[i].taskUploaded = !copyOfTaskList[i].taskUploaded

        //update the state variable using the modified copy so that react knows to update the DOM
        setTaskList(copyOfTaskList)

    }

    //delete task func
    const deleteTask= (i)=>{
        console.log("deleting at index-->", i)

        //use the filter function to loop through the original array and filter out the item we want to delete
        let filterTaskList = taskList.filter((task,index)=>{
            return index!=i;
        }) // callback function

        console.log("filtered task list --->", filterTaskList)

        setTaskList(filterTaskList)
    }

    return(
        <>
        <div className="col-3 mt-5 m-auto" id="form">
            <form onSubmit={submitHandler}>
                    <input type="text" name="" id="" placeholder="Task" className="form-control" onChange={(e)=>{setUserTask(e.target.value)}} value={userTask}/>
                    <input type="submit" value="Add" className="btn btn-primary float-start mt-3"/>
            </form>
        </div>
        <div className="m-auto col-3">
            {
            taskList.map((task, i)=>{
                return(
                    <li key={i} className="form-check">
                        <label className="form-check-label" style={{textDecoration: task.taskUploaded? "line-through": ""}} htmlFor={task.userTask}>{task.userTask}</label>
                        <input type="checkbox" name="" id={task.userTask} className="form-check-input" onClick={()=>updateTask(i)} />
                        <input onClick={()=>deleteTask(i)} type="button" value="Delete" className="btn btn-dark ms-3" />
                    </li>
                    )
                })
            }   
        </div>
        </>
    )
}

export default Task;
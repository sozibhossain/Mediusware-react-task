import React, {useEffect, useState} from 'react';

const Problem1 = () => {
    const [newName, setNewName] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [tasks, setTasks] = useState ([]);
    const [show, setShow] = useState('all');


    

    const handleClick = (val) =>{
        setShow(val);
    }

    const handleShowAllSubmit = () => {
        const newAllItemShow = {
            name:newName,
            status:newStatus
        }
        console.log(newAllItemShow);

        const updatedItemArr = [...tasks];
        updatedItemArr.push(newAllItemShow);
        setTasks(updatedItemArr);
        localStorage.setItem( 'taskAdd', JSON.stringify(updatedItemArr))
    }

    useEffect(() =>{
        const savedItem =JSON.parse(localStorage.getItem('taskAdd'));

        if(savedItem){
            setTasks(savedItem)
        }
    },{})

    // filtered-Tasks
    const filteredTasks = tasks.filter((task) => {
        if (show === "active") {
          return task.status.toLowerCase() === "active";
        } else if (show === "completed") {
          return task.status.toLowerCase() === "completed";
        }
        return true;
    });

    // filtered-short-Tasks
    filteredTasks.sort((x, y) => {
        if (x.status.toLowerCase() === "active") {
            return -1;
        } else if (y.status.toLowerCase() === "active") {
            return 1;
        } else if (x.status.toLowerCase() === "completed") {
            return -1;
        } else if (y.status.toLowerCase() === "completed") {
            return 1;
        } else if (x.status.toLowerCase() === "pending") {
            return -1;
        } else if (y.status.toLowerCase() === "pending") {
            return 1;
        } else if (x.status.toLowerCase() === "archive") {
            return -1;
        } else if (y.status.toLowerCase() === "archive") {
            return 1;
        }
        return 0;
    });


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" value={newName} onChange={(e) =>  setNewName(e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" value={newStatus} onChange={(e) =>  setNewStatus(e.target.value)}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={handleShowAllSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                filteredTasks.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Problem2 = () => {
    const [showModalA, setshowModalA] = useState(false);
    const [showModalB, setshowModalB] = useState(false);
    const [showModalC, setShowModalC] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([]);
    const [pagesNumber, setPagesnumber] = useState(1)
    const [query, setQuery] = useState("");


    // ModalA-start
    const openModalA = () => {
        setshowModalA(true);
    }
    const closeModalA = () => {
        setshowModalA(false);
    }
    // ModalA-end

    // ModalB-start
    const openModalB = () => {
        setshowModalB(true);
    }
    const closeModalB = () => {
        setshowModalB(false);
    }
    // ModalB-end

    // ModalC-start
    const openModalC = () => {
        setShowModalC(true);
    };
    const closeModalC = () => {
        setShowModalC(false);
    }
    // ModalA-end

    const filterItem = (categItem) => {
        const updateItem = contacts.filter((curElem) => {
            return curElem.country.name === categItem;
        });
        setContacts(updateItem)
    };

    // fetch-dataApi-Contacts-Infinite Scroll With API Call
    useEffect(() => {
        const fetchApiContacts = async() =>{
            const res = await axios(`https://contact.mediusware.com/api/contacts/?page=${pagesNumber}`);
            setContacts(res.data.results);
        }
        fetchApiContacts();
    },[]);

    const fetchData = () => {
        setPagesnumber(pagesNumber + 1);
        const fetchApiContacts = async() =>{
            const res = await axios(`https://contact.mediusware.com/api/contacts/?page=${pagesNumber}`);
            setContacts(contacts.concat(res.data.results));
        }
        fetchApiContacts();
    };

    

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={openModalA} >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button"  onClick={openModalB}>US Contacts</button>
                </div>
                {/* ===============modal All contacts end================ */}
                <div
                    className={`modal fade ${showModalA ? "show" : ""}`}
                    tabIndex="-1"
                    role="dialog"
                    style={{ display: showModalA ? "block" : "none", height: '600px' }}
                
                >
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">All Contacts</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalA}></button>
                            </div>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <button className="btn btn-lg btn-outline-primary" type="button" style={{ backgroundColor: "#46139f", color: "white" }}>All Contacts</button>
                                <button className="btn btn-lg btn-outline-warning" type="button" style={{ backgroundColor: "#ff7f50", color: "white" }} onClick={() => filterItem('United States')} >US Contacts</button>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-2'>
                                <input
                                    className="search p-1"
                                    placeholder="Search..."
                                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                />
                            </div>
                            <div className="modal-body">
                                <InfiniteScroll
                                    dataLength={contacts.length} //This is important field to render the next data
                                    next={fetchData}
                                    hasMore={true}
                                    loader={<h4>Loading...</h4>}
                                    >
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                contacts.filter((asd) =>
                                                asd.country.name.toLowerCase().includes(query)
                                                ).map((item, index) =>{
                                                    return(
                                                        
                                                        <tr key={index}>
                                                            <th scope="row">{item.id}</th>
                                                            <td onClick={() => openModalC(item.id)}>{item.phone}</td>
                                                            <td>{item.country.name}</td>
                                                        </tr>
                                                    )
                                                    
                                                })
                                                
                                            }
                                        </tbody>
                                                
                                    </table>
                                </InfiniteScroll>
                            </div>

                            {/* modal-footer start */}
                            <div className="modal-footer">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="onlyEvenCheckboxB"
                                    />
                                    <label className="form-check-label" htmlFor="onlyEvenCheckboxB">
                                        Only even
                                    </label>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalA}>Close</button>
                                </div>
                            </div>
                            {/* modal-footer end */}

                        </div>
                    </div>

                    
                </div>
                {/* ==============modal All contacts end============== */}

                {/* =====================modal US contacts end========================= */}
                <div
                    className={`modal fade ${showModalB ? "show" : ""}`}
                    tabIndex="-1"
                    role="dialog"
                    style={{ display: showModalB ? "block" : "none", height: '600px' }}
                
                >
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">All Contacts</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalB}></button>
                            </div>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <button className="btn btn-lg btn-outline-primary" type="button" style={{ backgroundColor: "#46139f", color: "white" }}>All Contacts</button>
                                <button className="btn btn-lg btn-outline-warning" type="button" style={{ backgroundColor: "#ff7f50", color: "white" }} onClick={() => filterItem('United States')} >US Contacts</button>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-2'>
                                <input
                                    className="search p-1"
                                    placeholder="Search..."
                                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                />
                            </div>
                            <div className="modal-body">
                                <InfiniteScroll
                                    dataLength={usContacts.length} //This is important field to render the next data
                                    // next={fetchData}
                                    hasMore={true}
                                    loader={<h4>Loading...</h4>}
                                    >
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                contacts.filter((asd) =>
                                                asd.country.name.toLowerCase().includes(query)
                                                ).map((item, index) =>{
                                                    return(
                                                        
                                                        <tr key={index}>
                                                            <th scope="row">{item.id}</th>
                                                            <td onClick={() => openModalC(item.id)}>{item.phone}</td>
                                                            <td>{item.country.name}</td>
                                                        </tr>
                                                    )
                                                    
                                                })
                                                
                                            }
                                        </tbody>
                                                
                                    </table>
                                </InfiniteScroll>
                            </div>

                            {/* modal-footer start */}
                            <div className="modal-footer">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="onlyEvenCheckboxB"
                                    />
                                    <label className="form-check-label" htmlFor="onlyEvenCheckboxB">
                                        Only even
                                    </label>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalB}>Close</button>
                                </div>
                            </div>
                            {/* modal-footer end */}

                        </div>
                    </div>

                    
                </div>
                {/* ===================modal US contacts end ================ */}

                {/* Open-Modal-C */}
                <div className={`modal fade ${showModalC ? "show" : ""}`}
                    tabIndex="-1"
                    role="dialog"
                    style={{ display: showModalC ? "block" : "none", marginTop: '10%',  }}>
                    <div className="modal-dialog " style={{ border: '1px solid #46139f', borderRadius: '10px' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Details</h1>
                                <button onClick={closeModalC} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>	+1-202-555-0127</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalC}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;
function Main() {
    return (
        <>
            <div className="mainContainer">
                <div className="col-12 text">
                    <h1 className="text-center fw-light"><b>ShareNotes</b> is a service for quick writing and sharing notes via link</h1>

                    <h4 className="text-center description mt-3 mt-lg-4 fw-light">Create a note, send a link to the note so your friend or colleague can read it</h4>

                    <div className="card-group mt-3 mt-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center font-weight-light"><p>How to <b>create</b> a note?</p></h5>
                                <ul className="card-text list-group list-group-flush">
                                    <li className="list-group-item">Follow the link</li>
                                    <li className="list-group-item">Enter some text and click Create button</li>
                                    <li className="list-group-item">Send the generated address to your recipient</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <a className="buttonsMain col-12 btn btn-primary text-nowrap" href="/create" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen me-2 align-items-center justify-content-center" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"></path>
                                    </svg>
                                    Create
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center font-weight-light"><p>How to <b>read</b> a note?</p></h5>
                                <ul className="card-text list-group list-group-flush">
                                    <li className="list-group-item">Just open a provided URL, or</li>
                                    <li className="list-group-item">Enter note ID in a search field</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <a className="buttonsMain col-12 btn btn-primary text-nowrap d-flex align-items-center justify-content-center" href="/note" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book me-2" viewBox="0 0 16 16">
                                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
                                    </svg>
                                    Read
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Main;
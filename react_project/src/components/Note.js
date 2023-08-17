import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import env from '../env.json'


function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [formClass, setFormClass] = useState('');
    const [lineClass, setLineClass] = useState('');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            setFormClass('hide');
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL }),
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                });
        }
        else {
            setFormClass('');
            setLineClass('hide');
        }
    }, [noteURL]);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Please fill in the field');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + url;
    }

    function searchNote() {
        window.location.href = env.url;
    }


    return (
        <div className="row pt-3 pt-xl-5 pt-lg-5">
            <div className="col-12">
                <div className="text text-center">
                    <form action="" onSubmit={getNote} className={formClass}>
                        <div className="mb-3 mb-lg-4">
                            <label htmlFor="url" className="mb-3 mb-lg-4 fs-2">Enter note ID</label>
                            <input type="text" name="url" id="url" className="form-control" />
                        </div>
                        <div className="form-group text-right mt-2">
                            <button type="submit" className="btn btn-primary">Search note</button>
                        </div>
                    </form>
                </div>
                <div className={lineClass}>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Note ID: {noteURL}</h4>
                        <div className="note-text">{noteText}</div>
                        <hr />
                        <p className="mb-0">Your note will be deleted once reviewed. Please copy it if needed. </p>
                    </div>
                    <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Search note</button></div>
                </div>
                <div className={errorClass}>
                    <div className="alert alert-danger" role="alert">
                        Note with provided ID was not found.
                    </div>
                    <div className="text-right mt-2"><button onClick={searchNote} className="btn btn-primary">Search note</button></div>
                </div>
            </div>
        </div >
    );
}

export default Note;
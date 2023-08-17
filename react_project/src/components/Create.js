import React from 'react';
import { useState } from 'react';
import env from '../env.json'

function Create() {

    const [formClass, setFormClass] = useState();
    const [lineClass, setLineClass] = useState('hide');
    const [url, setUrl] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + response.url);
                }
            });
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Fill fields');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div className="row pt-3 pt-xl-5 pt-lg-5">
            <div className="col-12">
                <div className="text">

                    <form action="" onSubmit={loadDataFromForm} className={formClass}>
                        <div className="form-group d-grid gap-3">
                            <label htmlFor="note" className='text-center fs-2'>Please write your note below</label>
                            <textarea name="note" className="form-control p-2 mt-3 mt-lg-4" placeholder="Text size should not exceed 1000 symbols" defaultValue="" id="note"></textarea>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p><b>Important!</b><br />The note will be deleted once read.</p>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </form>

                    <div className={lineClass}>
                        <div className="alert alert-primary text-break" role="alert">{url}</div>
                        <p>Please copy note URL and send it to your addressee. URL is shown only once.</p>
                        <div className="text-right"><button onClick={function () { window.location.reload() }} className="btn btn-primary">Create another note</button></div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Create;
import React from 'react';
import env from '../env.json'
function About() {

    console.log(env.url);
    return (
        <div className="container py-5">
            <h1 className="display-4 text-center mb-4">Welcome to ShareNotes!</h1>
            <p className="lead text-center">
                ShareNotes is your go-to solution for quick note-taking and sharing.
            </p>

            <div className="card-group">

                <div className="card text-center p-3 p-lg-5">
                    <div className="card-body d-flex gap-3 flex-column">
                        <h2 className="card-title">Creating a Note</h2>
                        <p className="card-text">
                            Creating notes has never been easier. Just head to the Create section, type your note, and hit the Create button. Share the generated link with your recipient.
                        </p>
                    </div>
                </div>

                <div className="card text-center p-3 p-lg-5">
                    <div className="card-body d-flex gap-3 flex-column">
                        <h2 className="card-title">Reading a Note</h2>
                        <p className="card-text">
                            Access your notes in two ways: either through the provided URL or by entering the note ID.
                        </p>
                    </div>
                </div>

                <div className="card text-center p-3 p-lg-5">
                    <div className="card-body d-flex gap-3 flex-column">
                        <h2 className="card-title">Note Deletion</h2>
                        <p className="card-text">
                            Your notes will be automatically deleted once they're read. No worries about clutter.
                        </p>
                    </div>
                </div>

            </div>

            <p className="text-center mt-5">
                We're excited to have you on board the ShareNotes community. Start sharing your thoughts today!
            </p>
        </div>
    );
}

export default About;

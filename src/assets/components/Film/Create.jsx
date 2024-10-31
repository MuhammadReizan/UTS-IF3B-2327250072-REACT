import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Create() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://uts-if-3-b-2327250072-api.vercel.app/api/api/film/create', { name })
            .then((res) => {
                if (res.data.success) {
                    Swal.fire('Created!', res.data.message, 'success');
                    navigate('/film');
                }
            })
            .catch((err) => {
                console.error('Error creating data:', err);
                Swal.fire('Error!', 'There was an error creating the data', 'error');
            });
    };

    return (
        <div className="container mt-4">
            <h1>Create New Film</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Film Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}

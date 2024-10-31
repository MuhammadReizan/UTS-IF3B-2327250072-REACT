import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function List() {
    const [film, setFilm] = useState([]);

    useEffect(() => {
        axios
            .get('https://uts-if-3-b-2327250072-api.vercel.app/api/api/film')
            .then((res) => {
                if (res.data.success) {
                    setFilm(res.data.result);
                }
            })
            .catch((err) => {
                console.error('Error fetching film:', err);
                Swal.fire('Error!', 'Could not fetch film', 'error');
            });
    }, []);


    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>List of film</h1>
                <NavLink to="/film/create" className="btn btn-primary">
                    Create New film
                </NavLink>
            </div>
            <ul className="list-group">
                {film.map((film) => (
                    <li
                        key={film.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span>{film.name}</span>
                        <div className="btn-group" role="group">
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

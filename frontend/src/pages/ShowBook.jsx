import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`).then(
            (response) => {
                setBook(response.data);
                setLoading(false);
            }
        ).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }, [])
    return (
        <div className='p-4'>
            <Navbar/>
            <BackButton />
            <h1 className="text-3xl my-4">
                Book Details
                {loading ? (<Spinner></Spinner>) :
                    (
                        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">
                                    Id
                                </span>
                                <span>
                                    {book._id}
                                </span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">
                                    Title
                                </span>
                                <span>
                                    {book.title}
                                </span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">
                                    Author
                                </span>
                                <span>
                                    {book.author}
                                </span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">
                                    Publish Year
                                </span>
                                <span>
                                    {book.publishYear}
                                </span>
                            </div>
                        </div>
                    )}
            </h1>
        </div>
    )
}

export default ShowBook
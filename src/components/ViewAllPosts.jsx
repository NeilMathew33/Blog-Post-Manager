import React, { useEffect, useState } from 'react'
import BlogNavbar from './BlogNavbar'
import axios from 'axios'

const ViewAllPosts = () => {

    const [viewallpostsData, setviewallpostsData] = new useState([])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response) => {
                setviewallpostsData(response.data)
            }
        ).catch()
    }

    useEffect(() => {fetchData()  } , [])
    return (
        <div>
            <BlogNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {viewallpostsData.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <div class="card-body">

                                                    <p class="card-text">{value.title}</p>
                                                    <p class="card-text">{value.body}</p>
                                                    <a href="#" class="btn btn-primary">Post Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllPosts
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import BeatLoader from "react-spinners/BeatLoader";
const Blogs = () => {
    const blogData = useLoaderData();
    const [page, setPage] = useState(0)
    const [data, setData] = useState(null)
    const url = `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${page}&limit=10`
    console.log(blogData.blogs
    );
    function handleChange() {
        setPage(prev => prev + 10)
    }
    function handleChangePrv() {
        if (page >= 10) {
            setPage(p => p - 10)
        }
    }
    useEffect(() => {
        async function getData() {
            await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
            await fetch(url).then(res => res.json()).then(data => setData(data))
        }
        getData()
    }, [page])


    return (
        <>
            <div>
                {
                    data ? (
                        <>
                            <div className=' grid grid-cols-3 w-fit mx-auto gap-5 py-5'>
                                {
                                    data && data.blogs.map((blog, index) => <BlogCard key={index} blog={blog}  ></BlogCard>)
                                }
                            </div>
                            <div>
                                <button className='btn' onClick={handleChangePrv} >Prev</button>
                                <button className='btn' onClick={handleChange} > next</button>
                            </div>
                        </>
                    ) : <>
                        <div className='w-fit mx-auto py-40' >
                            <BeatLoader></BeatLoader>
                        </div>
                    </>
                }
            </div>
        </>

    );
};

export default Blogs;
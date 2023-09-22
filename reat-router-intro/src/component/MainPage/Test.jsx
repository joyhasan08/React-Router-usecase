import { useLoaderData } from "react-router-dom";


const Test = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <img className=" w-fit mx-auto" src={data.blog.photo_url
            } alt="" />
            <h1>hellossssss {data.blog.category} </h1>
        </div>
    );
};

export default Test;
import { Link } from "react-router-dom";

// const d = [1, 2, 3, 4]
const BlogCard = ({ blog }) => {
    console.log(blog);
    const url = `https://api.slingacademy.com/v1/sample-data/blog-posts/[id]`

    const { photo_url, description, created_at, id, title } = blog
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{created_at}</div>
                        <div className="badge badge-outline">{id}</div>
                        <div><Link to={`/blog/${id}`}><button className="badge badge-outline">see more</button></Link></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;
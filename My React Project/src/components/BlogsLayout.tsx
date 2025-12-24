import { Link, Outlet } from "react-router-dom";


function BlogsLayout() {
    return (
        <>
        <Link to={'/blogs'}><h2 className="text-3xl my-4">Latest Blogs</h2></Link> 
            
            <div className="text-2xl my-4">
                <Link to={'/blogs/react'}><button className="mx-4">React</button></Link> 
                <Link to={'/blogs/node'}><button className="mx-4">Node</button></Link> 
            
            </div>

            <Outlet />
        </>
    )
}
export default BlogsLayout
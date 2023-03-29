import { Blog } from '../data';
import { BlogCard } from './BlogCard';

interface Props {
    blogs: Blog[]
}
export const BlogList = ({ blogs}: Props ) => {
  return (
    <div className="row">
        {
            blogs.map( blog => (
                <div className="col-sm-4" key={ blog.title }>
                    <BlogCard blog={ blog }/>
                </div>
            ))
        }
    </div>
  )
}

import { Blog } from '../data';

interface Props {
    blog: Blog
}
export const BlogCard = ({ blog }: Props) => {
  return (
    <div className="card-blog" data-aos="fade-up">
        <div className="bg">
            <img src={ blog.src } alt={ blog.title } />
        </div>
        <div className="card-blog-body">
            <ul>
                {
                    blog.keyword.map( k => (
                        <li key={ k }>
                            <a href="#">{ k }</a>
                        </li>
                    ))
                }
            </ul>
            {/* titulo */}
            <h5>{ blog.title }</h5>
        </div>
    </div>
  )
}

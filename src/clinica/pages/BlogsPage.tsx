import { blogs } from '../data';
import { BlogCard, BlogList } from '../components';
import { ClinicaYapurLayout } from '../layouts';



export const BlogsPage = () => {
  return (
    <ClinicaYapurLayout>      
      <section>
          <div className="container-title">
              <img src="./assets/icon-blog.jpg" alt="" />
              <h2>BLOGS</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                  <BlogCard blog={ blogs[0] }/>
              </div>
              <div className="col-sm-4">
                  <div className="container-form">
                      <h5>Suscríbete a nuestro blog</h5>
                      <p>Y descubre todas las novedades y tendencias en marketing.</p>
                      <form>
                          <input type="text" placeholder="Nombre**" required className="form-control"/>
                          <input type="email" placeholder="Email**" required className="form-control"/>

                          <div className="form-check">
                            {/* <input className="form-check-input" type="checkbox" id="flexCheckDefault"> */}
                            <input type="checkbox" className="form-check-input" id="check-enviar"/>
                            <label className="form-check-label" htmlFor="check-enviar">
                              He leído y acepto la <span> política de privacidad*</span>
                            </label>
                          </div>

                          <button className="btn btn-primary">
                            Enviar
                          </button>
                      </form>
                  </div>
              </div>
            </div>
            <BlogList blogs={ blogs.slice(1,4)}/>
          </div>
      </section>
    </ClinicaYapurLayout>
  )
}

import Articles from "../Components/Articles"
import Layout from "../Components/Layout"

const Home = () => {
  return (
    <Layout>
        <div className="container my-3">
            <Articles />
        </div>
    </Layout>
  )
}

export default Home
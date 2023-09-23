import { Container, Row, Col } from "react-bootstrap";
import { BlogOneData } from "../data";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { title, posts } = BlogOneData;

  return (
    <section className="blog_share_area section_padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>{title}</h1>
            </div>
          </Col>
          {posts.map((data, index) => (
            <Col lg={4} md={6} sm={12} key={`blog-one-${index}`}>
              <BlogCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;

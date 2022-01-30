import Link from "next/link";
import renderHTML from "react-render-html";
import useSWR from "swr";
import { PostsDirectory } from "../../lib/util";
import moment from "moment"; //use for formatting the date
import { API } from "../../config";

const Card = ({ blog }) => {
  const { data } = useSWR(
    `https:drnareshchauhan.in/api/page-views?slug=${encodeURIComponent(
      PostsDirectory + blog.slug
    )}`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );
  const views = data?.pageViews || 0;
  const showBlogCategories = (blog) =>
    blog.categories.map((c, index) => (
      <Link key={index} href={`/categories/${c.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, index) => (
      <Link key={index} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <div className="lead pb-4">
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h2 className=" pt-3 pb-3 font-weight-bold">{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p className="mark ml-1 pt-2 pb-2">
          Written by{" "}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a>{blog.postedBy.username}</a>
          </Link>{" "}
          | Published {moment(blog.updatedAt).fromNow()}|&nbsp;
          <i id="eye" className="fa fa-eye" aria-hidden="true"></i>
          &nbsp;
          {views}
        </p>
      </section>
      <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br />
        <br />
      </section>

      <div className="row">
        <div className="col-md-4">
          <section>
            <img
              className="img img-fluid"
              style={{
                maxHeight: "320px",
                width: "auto",
                borderRadius: "10px",
              }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            ></img>
          </section>
        </div>
        <div className="col-md-8">
          <section>
            <div className="pb-3">
              {blog.excerpt == undefined ? " " : renderHTML(blog.excerpt)}
            </div>
            <Link href={`/blogs/${blog.slug}`}>
              <a className="btn btn-primary pt-2">Read more</a>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;

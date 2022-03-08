import React from "react";
import Link from "next/link";


export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map((post) => {
      return {
        params: { id: post.id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` );
    const data = await res.json();
    return { 
        props: { Post: data } 
      };
  }
  

const Post = ({Post}) => {
  return (
    <>
      <div className="container-xxl mt-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-6 card text-center fw-bold">
                <h3 className='display-5 text-primary'>{Post.id}</h3>
                <div className="card-body">
                  <h5 className="card-title">{Post.body}</h5>
                </div>
                <Link href='/Posts'>Back</Link>
            </div>
          </div>
      </div>
    </>
  );
};

export default Post;

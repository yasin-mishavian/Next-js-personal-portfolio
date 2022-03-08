import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import styles from './../../styles/Posts.module.css'
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  }
  

const Posts = ({ posts }) => {
  const [Search, setSearch] = useState('');
    
  return (
    <>
      <div className='container-fluid'>
          <div className='row justify-content-center text-center'>
            <form className='col-3 d-none d-md-inline'>
            <input className={styles.input} type='text' placeholder='Search...'
                onChange={ (e) => { setSearch ( e.target.value ) } }>
            </input>
              <i className='btn-Style text-primary mx-1'>{<FaSearch/>}</i>
            </form>
        </div>
      </div>

      {posts.filter((val) => {
          if (Search === '') {
            return val
          } else if(val.title.toLowerCase().includes(Search.toLowerCase())){
            return val
          }
        }).map((post) => {
        return (
          <>
            <div key={post.id} className="container-fluid mt-3">
              <div className="row row-cols-3 justify-content-around">
                <div className="col-lg-3  col-md-4 col-sm-6 col-xm-8 card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                  </div>
                  <div className="text-center my-3">
                    <Link href={'/Posts/' + post.id }>
                      <button style={{width:'100%'}} className="btn btn-primary">go posts</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};


export default Posts;

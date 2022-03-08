import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const Router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Router.replace("/");
    }, 3000
    );
  }, []);

  return (
  <>
    <div className="card text-center">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link href="/" ><button className='btn btn-primary'>Go Home</button></Link>
        </div>
        <div className="card-footer text-muted">
            404 error
        </div>
    </div>
  </>
  )
};

export default NotFound;

import React from 'react';
// import Recommend from './Recommend';
// import Newarrival from './Newarrival';
// import Originals from './Originals';
// import Trending from './Trending';
import {Link} from 'react-router-dom';


const Moviecard = ({ data }) =>{
    return(
        <>
         {data.map((mtype, index) => (mtype.screen_layout === 'potrait_1' || mtype.screen_layout === 'potrait') && mtype.data ?
         <div className="container-fluid">
            <div className="row">
                {mtype.data.length > 0 && (
                <h4 className="movie-heading">{mtype.title}</h4>
                )}
                <div class="scroll-container">
                    {mtype.data.map((movie, key) => {
                        return (
                            <div className="col-lg-2 col-md-12" style={{ display: 'inline-block'}}>
                                <div className="card movie-card" >
                                    <Link to={'/detail/'+movie.id} >
                                        <img src={movie.thumbnail} class="card-img-top" alt="..." id={movie.id} style={{height:'330px'}}/>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>               
            </div>
        </div>: (mtype.video_type === 3 || mtype.video_type === 6  || mtype.video_type === 4) && mtype.data ?
         <div className="container-fluid">
            <div className="row">
            {mtype.data.length > 0 && (
                <h4 className="movie-heading">{mtype.title}</h4>
            )}
                <div class="scroll-container">
                    {mtype.data.map((movie,key)=>{
                        return(
                            <div className="col-lg-2 col-md-12" style={{ display: 'inline-block' }}>
                                <div className="card movie-card">
                                <Link to={'/detail/'+movie.id} >
                                    <img src={movie.image} class="card-img-top" alt="..." id={movie.id}/>
                                </Link>
                                </div> 
                            </div>
                            )
                         })}
                </div>
            </div>
        </div>:
        <div className="container-fluid">
            <div className="row">
            {mtype.data.length > 0 && (
                <h4 className="movie-heading">{mtype.title}</h4>
                )}
                <div class="scroll-container">
                    {mtype.data.map((movie,key)=>{
                        return(
                        <div className="col-lg-2 col-md-12" style={{ display: 'inline-block' }}>
                            <div className="card movie-card">
                                <Link to={'/detail/'+movie.id}>
                                    <img src={movie.landscape} class="card-img-top" alt="..." id={movie.id} />
                                </Link>
                            </div> 
                        </div>
                        
                    )
                    })}
                </div>
            </div>
    </div>
            )}
            
            {/* <Recommend />
            <Newarrival />
            <Originals />
            <Trending /> */}
        </>
    )
}

export default Moviecard;
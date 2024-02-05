export default function Portfolio() {
    return (
        <>
        <body className="container pb-3">
            <h1>Portfolio Page</h1>
            <p><strong>NOTE: </strong> None of these projects are currently deployed as Heroku wants to be stingy.</p>
            <div className="container">
                <div className="row">
                    <div className="card col">
                        <img src="https://github.com/BenWhann/OnlyGigs/raw/main/assets/images/onlygigs.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">OnlyGigs</h5>
                            <p className="card-text">An app that helps bands find an audience. Built with HTML, CSS, JavaScript, Node.js, and Express.js.</p>
                            <a href="https://github.com/BenWhann/OnlyGigs" className="btn btn-primary">GitHub Link</a>
                        </div>
                    </div>
                    <div className="card col">
                        <img src="https://user-images.githubusercontent.com/42842725/246955815-4fe6bb0d-995a-458f-8559-7e92c1fb954d.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Fortune of the Day</h5>
                            <p className="card-text">A fun app that delivers a daily fortune. Built with HTML, CSS, Bulma.css, and JavaScript</p>
                            <a href="https://github.com/BenWhann/Fortune-Of-The-Day" className="btn btn-primary">GitHub Link</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card col">
                        <img src="https://user-images.githubusercontent.com/129990965/270789901-3e47e954-bdc7-4fd0-b0b9-5296b91951fa.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">A blog that allows users to make tech related posts. Built with HTML, CSS, JavaScript, Node.js, and Express.js.</p>
                            <a href="https://github.com/BenWhann/TECH-BLOG" className="btn btn-primary">GitHub Link</a>
                        </div>
                    </div>
                    <div className="card col">
                        <img src="https://user-images.githubusercontent.com/129990965/270791560-0f51cbc2-6719-4102-a05f-f2fc7f51d2d9.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text">A simple note taker app built with express. Built with JavaScript, Node.js, and Express.js.</p>
                            <a href="https://github.com/BenWhann/NOTE-TAKER/tree/main" className="btn btn-primary">GitHub Link</a>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="card col">
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Project 5</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">GitHub Link</a>
                        </div>
                    </div>
                    <div className="card col">
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Project 6</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">GitHub Link</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </body>
        </>
    );
  }
export default function Contact() {
    return (
        <>
        <body>
            <h1>Contact Me</h1>
            <form className="mt-3 mb-3 container-md">
                <label className="form-label" for="name">First Name:</label>
                <input className="form-control" type="text" id="name" name="name"></input>
                <label className="form-label" for="email">Email:</label>
                <input className="form-control" type="email" id="email" name="email"></input>
                <label className="form-label" for="message">Message:</label>
                <input className="form-control" type="text" id="message" name="message"></input>
                <button className="mt-3 btn btn-secondary" type="button">Submit</button>
            </form>
        </body>
        </>
    );
  }
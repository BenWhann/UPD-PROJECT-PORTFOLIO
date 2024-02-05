export default function Contact() {

    // const saveInput = () => {
    //     const inputName= document.getElementById("name");
    //     localStorage.setItem("name", inputName.value);
    //     const inputEmail= document.getElementById("email");
    //     localStorage.setItem("email", inputEmail.value);
    //     const inputMessage= document.getElementById("message");
    //     localStorage.setItem("message", inputMessage.value);
    // }

    return (
        <>
        <body>
            <h1>Contact Me</h1>
            <ul>
                <li>Email: whann004@umn.edu</li>
                <li>Cell: 585-545-0130 <strong>NOTE:</strong> I prefer text. I rarely answer calls from numbers that I do not recognize unless I am expecting one.</li>
            </ul>
            {/* <form className="mt-3 mb-3 container-md">
                <label className="form-label" for="name">First Name:</label>
                <input className="form-control" type="text" id="name" name="name"></input>
                <label className="form-label" for="email">Email:</label>
                <input className="form-control" type="email" id="email" name="email"></input>
                <label className="form-label" for="message">Message:</label>
                <input className="form-control" type="text" id="message" name="message"></input>
                <button onClick={saveInput} id="contact-btn" className="mt-3 btn btn-secondary" type="button">Submit</button>
            </form> */}
        </body>
        </>
    );
  }
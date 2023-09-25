export default function Contact() {
    return (
        <>
        <body>
            <h1>Contact Me</h1>
            <form>
                <label for="name">First Name:</label>
                <input type="text" id="name" name="name"></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                <label for="message">Message:</label>
                <input type="text" id="message" name="message"></input>
                <button type="button">Submit</button>
            </form>
        </body>
        </>
    );
  }
import { useState, useEffect } from "react";

function Message() {
  const [message, setMessage] = useState([]);
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [yourmessage, setYourmessage] = useState("");

  const handleDelete = (messageId) => {
    const filteredMessages = message.filter(
      (message) => message.id !== messageId
    );
    setMessage(filteredMessages);
  };

  useEffect(() => {
    fetch('https://6667f7c0f53957909ff5f560.mockapi.io/Products', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      console.log( "tasks ",tasks)
      setMessage(tasks);
    }).catch(error => {
      // handle error
    })

    // fetch(`https://6667f7c0f53957909ff5f560.mockapi.io/Products`)
    //   .then((res)=>{console.log("mymocksite",res.json())})
    //   .then((json) => {
    //     console.log(json)
  
    //   });
  }, []);

  const createMessage = () => {
    const newMessage = {
      id: message.length + 1,
      name: name,
      fname: fname,
      email: email,
      subject: subject,
      yourmessage: yourmessage,
    };

    const newMessagesData = [...message, newMessage];
    setMessage(newMessagesData);
  };

  return (
    <>
      <section id="Contact" className="my-5">
        <div className="container">
          <h3 className="text-center text-white pt-5 mt-5">Say Hello</h3>
          <div className="row">
            <div className="col-md-6">
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="formInput"
                type="text"
                value={name}
                name="name"
                placeholder="First Name"
              />
            </div>

            <div className="col-md-6">
              <input
                onChange={(event) => {
                  setFname(event.target.value);
                }}
                className="formInput"
                type="text"
                value={fname}
                name="fname"
                placeholder="Full Name"
              />
            </div>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="formInput"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              className="formInput"
              type="text"
              value={subject}
              name="subject"
              placeholder="Subject of Message"
            />
            <input
              onChange={(event) => {
                setYourmessage(event.target.value);
              }}
              className="formInput-last"
              type="text"
              value={yourmessage}
              name="message"
              placeholder="Type your message here .."
            />
          </div>
          <button
            type="button"
            className="btn btn-dark mt-5  width-500px height-500px rounded-pill"
            onClick={createMessage}
          >
            Send Message
          </button>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Subject of Message</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {message.map((message, index) => {
                return (
                  <tr key={message.id}>
                    <td>{message.name}</td>
                    <td>{message.fname}</td>
                    <td>{message.email}</td>
                    <td>{message.subject}</td>
                    <td>{message.yourmessage}</td>
                    <button
                      onClick={() => {
                        handleDelete(message.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Message;

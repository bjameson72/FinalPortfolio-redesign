import React from "react";
import "../styling/Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      name: "",
      email: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeQuestion(event) {
    this.setState({
      question: event.target.value
    });
  }

  handleSubmit(event) {
    const templateId = "portfolioform";

    this.sendQuestion(templateId, {
      message_html: this.state.question,
      from_name: this.state.name,
      reply_to: this.state.email
    });

    this.setState({
      name: "",
      email: "",
      question: ""
    });
  }

  sendQuestion(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      .catch(err =>
        console.error(
          `Darn, this didn't work. Here some thoughts on the error that occured:`,
          err
        )
      );
  }

  render() {
    return (
      <form id="FormContainer">
        <div id="Form">
          <textarea
            id="name"
            name="name"
            onChange={this.handleChangeName}
            placeholder="Name"
            required
            value={this.state.name}
          />
          <textarea
            id="email"
            name="email"
            onChange={this.handleChangeEmail}
            placeholder="Email (email@example.com)"
            required
            value={this.state.email}
          />
          <textarea
            id="question"
            name="question"
            onChange={this.handleChangeQuestion}
            placeholder="Write your message here!"
            required
            value={this.state.question}
          />
          <div id="RedButtonContainer">
            <input
              type="button"
              value="Send Message"
              className="btn--submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;

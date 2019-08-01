import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <form>
        <div class="form-group">
          <label for="name">Email</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3" />
        </div>
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

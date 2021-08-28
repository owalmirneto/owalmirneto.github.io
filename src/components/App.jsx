import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <section className="App">
        <Navbar />
        <main className="App-content">
          <Sidebar />

          <section className="container">
            <section className="text-center">
              <h1>@owalmirneto</h1>
              <p>;)</p>
            </section>
          </section>
        </main>
        <Footer />
      </section>
    );
  }
}

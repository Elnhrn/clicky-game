import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard/AnimalCard.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Navbar from "./components/Navbar/Navbar.js";
import Modal from "./components/Modal.js";
import animals from "./animals.json";

class App extends Component {
    // Setting this.state.animals to the animals json array
    state = {
        animals,
        selectedArr: [],
        score: 0,
        topScore: 0,
        msg: ""
    };

    selectAnimal = id => {

        // randomize animals array to start
        this.setState({ animals: this.shuffle(this.state.animals)});

        // if the user clicks on an image for the first time, push that id to the selectedArr and officially set the state for selectedArr
        if (this.state.selectedArr.indexOf(id) === -1) {
            
            console.log(true);
            console.log("id: " + id);

            this.state.selectedArr.push(id);
            
            console.log("array: " + this.state.selectedArr);

            this.setState({
                selectedArr: this.state.selectedArr,
                msg: "Great choice!",
                score: this.state.score + 1
            });
        } else {
            console.log(false);
            this.setState({
                score: 0,
                selectedArr: [],
                msg: "Oh, no! You lost! Start over.",
            });

            if (this.state.score > this.state.topScore) {
                this.setState({
                    topScore: this.state.score
                });
            }

            // TODO: show alert that user lost
            
        }
    };

    // function to shuffle array
    shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    // Map over this.state.animals and render a AnimalCard component for each animal object
    render() {
        return (
            <div>
                <Navbar 
                    msg={this.state.msg}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                
                {this.state.animals.map(animal => (
                    <AnimalCard
                    selectAnimal={this.selectAnimal}
                    id={animal.id}
                    name={animal.name}
                    image={animal.image}
                    key={animal.id}
                    />
                ))}

            </div>
        );
    };
}

export default App;
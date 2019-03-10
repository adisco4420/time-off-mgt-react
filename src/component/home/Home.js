import React, { Component } from 'react';

class Home extends Component { 
    render() {
        return (
            <div>
              <div class="jumbotron">
                <h1 class="display-4">Time Off Management</h1>
                <p class="lead">Open source, simple yet powerful absence management software for small and medium size business.</p>
                <hr class="my-4" />
                <p>Endorsed by hundreds of software developers..</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
                </p>
            </div>
            <div class="container">
                <div class="row text-center">
                    <div class="col-4">
                        <h3>col-4</h3>
                    </div>
                    <div class="col-4">
                        <h3>col-4</h3>
                    </div>
                    <div class="col-4">
                         <h3>col-4</h3>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}
export default Home;
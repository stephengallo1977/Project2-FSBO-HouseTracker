My Personal FSBO House Tracker:

My Personal FSBO House Tracker lets you keep track of potential home purchases by adding them, deleting them, and make a favorites list. You will also have the ability to be able to add a house you purchased to the sold list, which is great for investors that purchase multiple investment properties.

The final product of this application can be viewed on:

https://fsbo-home-tracker.herokuapp.com/

TOOLS USED:

Node.js, MySql, Sequalize, Bootstrap and Handlebars to build the app.

LAYOUTS:

This application runs on a server.js with a Port which listens and sync the database.

        require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 8000;
// Sets up the Express App
const app = express();

 app.listen(PORT, function ()
HANDLEBARS:

The Main and Partial Handle bars were created in the list of view file.

{{!-- Main handlebars page --}}

<!DOCTYPE html>
<html lang="en">



   </ul>
        </div>
    </nav>

    {{{ body }}}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>
about.handlebars handles the about section of the application page.

div class="container">
    <div class="row">
        <div class="col-6">
            {{> about/about-description}}
        </div>
    </div>
</div>
home.handlebars has the about and listings.

 <div class="container">
    <div class="row">
        <div class="col-6">
            {{> about/about-description}}
        </div>
        <div class="col-6">
            <div class="jumbotron">
                Top listings
                <ul>
                    {{#each house}}
                    <li>
                        {{> listing/listing-block}}
                    </li>
                    {{/each}}
                </ul>

            </div>
        </div>
    </div>
</div>
listing-bloc.handlebars

<div>
    <h3>{{address}}</h3>
    <h5>${{price}}.00</h5>
    <hr />
    <p>{{description}}</p>
    Beds: {{beds}} <br />
    Bathrooms: {{baths}} <br />

    {{#if isAvailable}}
    <form action="/api/sellhouse" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Buy House"  class="btn btn-success"/>
    </form>
    {{/if}}
    <form action="/api/removehouse" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Delete House"  class="btn btn-danger"/>
    </form>

    {{#if favorite}}
    {{#if isAvailable}}
    <form action="/api/dropfav" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Remove Fav" class="btn btn-warning" />
    </form>
    {{/if}}
    {{else}}
    <form action="/api/addfav" method="POST">
        <input type="text" name="id" style="display: none;" value={{id}} />
        <input type="submit" value="Save House"  class="btn btn-light"/>
    </form>
    {{/if}}
</div>


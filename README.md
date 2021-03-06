# Airport Challenge JS

Here we rebuild Makers week one's weekend challenge, Airport Challenge, in JavaScript. Unit testing implemented with the Jasmine testing framework.

### Setting Up Jasmine For Node.js

1. Run ```npm init``` to create ```package.json``` file.

2. Run ```npm install --save-dev jasmine``` to install Jasmine locally and save as a dev dependency.

3. Add ```"test-init": "./node_modules/jasmine/bin/jasmine.js init"``` to scripts in ```package.json```.

4. Add ```"test": "./node_modules/jasmine/bin/jasmine.js"``` to scripts in ```package.json```.

5. Run ```npm run test-init``` to initialize Jasmine.

### Running Tests

* Run ```npm test``` from the project root.

### Running The Application

1. Ensure you are in the project root.

2. Run ```node``` in the command line to open up the REPL.

3. Enter ```const { Airport, Plane, Weather } = require('./src/airport.js');``` in the REPL to require all the classes.

4. Create an Airport instances, Plane instances and have fun!
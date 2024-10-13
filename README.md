<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1>Code Ninjas Website</h1>

  <p align="center">
    Convenient website for data organization at the Livingston center.
    <br />
    <a href="https://github.com/Phrygan/CodeNinjaWebsite/tree/master/code-ninjas-website"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

<br><br/>
<!-- ABOUT THE PROJECT -->
## About The Project

The Code Ninjas Livingston Website acts as a homework portal for students. The website also gives instructors and center directors a convenient way to manage student information and assign/review assignments.


### Built With
* <a href="https://www.python.org/downloads/"> Python </a>
* <a href="https://react.dev/"> React </a>
* <a href="https://nodejs.org/en"> Node.js </a>
* <a href="https://www.mongodb.com/"> MongoDB </a>
* <a href="https://flask.palletsprojects.com/en/3.0.x/"> Flask </a>
* <a href="https://github.com/georgehanson/jwt-manager"> JWT Manager </a>
* <a href="https://pypi.org/project/waitress/"> Waitress </a>
* <a href="https://gunicorn.org/"> Gunicorn </a>

<br><br/>
<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Phrygan/CodeNinjaWebsite
   ```
2. Switch to development branch
   ```sh
   git switch development
   ```
2. Change directory into ‘code-ninjas-website’ folder and Install NPM packages
   ```sh
   npm install
   ```
4. Change directory into ‘\api\venv\Scripts’ and activate the virtual environment
   ```sh
   activate
   ```
5. Install necessary backend packages via pip install in the api folder
   ```sh
   pip install -r requirements.txt
   ```
6. Run backend in ‘api’ folder
   ```sh
   python -m flask run
   ```
3. Run react front end in ‘code-ninjas-website’ folder
   ```sh
   npm start
   ```

### Deployment
Enter the ‘code-ninjas-website’ folder in command prompt
Call the npm script ‘deploy’
   ```sh
   npm run deploy
   ```
Deploy newest changes of api through opening secret link in browser to manually deploy newest commit



<br><br/>

<!-- ROADMAP -->
## Roadmap

- [ ] Add feature to import/export spreadsheets into the website's database of student data
- [ ] Add student goals sections
- [ ] Add different accounts types (center director, instructor, student)
- [ ] Add more functions to the student side in submitting assignments (unsubmit, grading, view submission)
- [ ] Desktop and mobile compatible
- [ ] Deleting tasks should take multiple clicks

<br><br/>
<!-- LICENSE -->
## License

Distributed under the GNU License. See `LICENSE.txt` for more information.



<br><br/>
<!-- CONTACT -->
## Contact

Nathan Zhang - nlzhang@ucla.edu
<br>
Andrew Hong - honga010807@gmail.com



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge -->

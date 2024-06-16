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


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
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




<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

- [ ] Add feature to import/export spreadsheets into the website's database of student data
- [ ] Add student goals sections
- [ ] Add different accounts types (center director, instructor, student)
- [ ] Add more functions to the student side in submitting assignments (unsubmit, grading, view submission)
- [ ] Desktop and mobile compatible
- [ ] Deleting tasks should take multiple clicks


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- LICENSE -->
## License

Distributed under the GNU License. See `LICENSE.txt` for more information.




<!-- CONTACT -->
## Contact

Nathan Zhang - nathan.l.zhang@gmail.com
<br>
Andrew Hong - honga010807@gmail.com



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* 


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge -->

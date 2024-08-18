
# Portfolio Website

This is a personal portfolio website showcasing my projects, experience, and skills. The website is built using Flask and Dockerized for easy deployment. It is also hosted on Render for public access.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Docker Setup](#docker-setup)
- [Deployment](#deployment)
- [Contact](#contact)

## Demo

Check out the live version of the website here: [https://portfolio-project-f385.onrender.com/](https://portfolio-project-f385.onrender.com/)

## Features
- Responsive design for desktop, tablet, and mobile.
- Smooth animations and transitions for better user experience.
- Sections for Contact, Blog, Projects, Experience, and Skills.
- Dynamic project data fetched from a CSV file.

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Python, Flask
- **Database**: None (data fetched from a CSV file)
- **Containerization**: Docker
- **Deployment**: Render

## Project Structure
```
portfolio-project/
│
├── app/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   │       └── (project images)
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   └── app.py
│
├── data/
│   └── projects_data.csv
│
└── Dockerfile
```

## Setup Instructions

### Prerequisites
- Python 3.9+
- Docker (optional for Docker setup)
- Git

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-project.git
   cd portfolio-project
   ```

2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask app:
   ```bash
   python app/app.py
   ```

4. Open your browser and go to `http://localhost:5000` to see the website.

## Docker Setup

To run the project using Docker:

1. Build the Docker image:
   ```bash
   docker build -t portfolio-website .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5000:5000 portfolio-website
   ```

3. Access the website at `http://localhost:5000`.

## Deployment

The website is deployed on Render. To deploy your own version, follow these steps:

1. Create an account on Render: [https://render.com](https://render.com)
2. Link your GitHub repository and create a new **Web Service**.
3. Set the start command to:
   ```bash
   python app/app.py
   ```
4. Deploy the service and your website will be live.

## Contact

Feel free to contact me through:
- **Email**: [21522557@gm.edu.vn](mailto:21522557@gm.edu.vn)
- **GitHub**: [https://github.com/FOX2920/](https://github.com/FOX2920/)
- **LinkedIn**: [https://www.linkedin.com/in/s%C6%A1n-tr%E1%BA%A7n-thanh-58498a292/]([https://www.linkedin.com/in/your-username](https://www.linkedin.com/in/s%C6%A1n-tr%E1%BA%A7n-thanh-58498a292/))

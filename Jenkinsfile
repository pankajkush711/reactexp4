pipeline {
    agent any

    environment {
        DISPLAY = ':99' // For Xvfb if needed
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/pankajkush711/reactexp4.git',
                    credentialsId: 'github-pat'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start React App') {
            steps {
                bat 'start /B npm start'
                sleep time: 15, unit: 'SECONDS'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                bat 'npm run test:ui'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Cleaning up..."
        }
    }
}

pipeline {
    agent any

    environment {
        DISPLAY = ':99' // For Xvfb if needed
    }

    tools {
        nodejs 'NodeJS_16' // Ensure Node.js 16+ is configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pankajkush711/reactexp4.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    bat 'npm install'
                }
            }
        }

        stage('Start React App') {
            steps {
                script {
                    // Start React app in background
                    bat 'start /B npm start'
                    // Wait for the app to start
                    sleep time: 15, unit: 'SECONDS'
                }
            }
        }

        stage('Run Selenium Tests') {
            steps {
                script {
                    // Run Selenium tests using npm script
                    bat 'npm run test:ui'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Cleaning up..."
        }
    }
}

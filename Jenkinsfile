pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pankajkush711/reacrexp4.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start React App') {
            steps {
                sh 'nohup npm start &'
                sleep(time: 10, unit: 'SECONDS')
            }
        }

        stage('Run Selenium Tests') {
            steps {
                sh 'npm run test:ui'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Cleaning up..."
        }
    }
}

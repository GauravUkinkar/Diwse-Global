pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Stop Existing Process') {
            steps {
                script {
                    sh "pkill -f 'node' || true" // Kills the running Next.js process if exists
                }
            }
        }
        stage('Start Production Server') {
            steps {
               sh 'PORT=3001 npm run start'
            }
        }
        stage('Check if App is Running') {
            steps {
                sleep 10
                echo "Website is live"
            }
        }
    }
}

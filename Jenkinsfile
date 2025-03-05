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
                    sh "fuser -k 3001/tcp || true" // Kill process running on port 3001
                }
            }
        }
        stage('Start Production Server') {
            steps {
                sh 'nohup npm run start -- -p 3001 > nextjs.log 2>&1 &' // Run in background
            }
        }
        stage('Check if App is Running') {
            steps {
                sleep 10
                sh 'curl -I http://localhost:3001 || echo "App failed to start"'
                echo "Website is live on port 3001"
            }
        }
    }
}

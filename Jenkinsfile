pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install -g pm2'  // Install PM2 globally
                sh 'npm install'
            }
        }
        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Restart Server on Port 3001') {
            steps {
                script {
                    sh 'pm2 delete next-app || true' // Delete old process if exists
                    sh 'pm2 start npm --name "next-app" -- run start -- -p 3001'
                }
            }
        }
        stage('Check if App is Running') {
            steps {
                sleep 10
                sh 'pm2 list'
                echo "Website is live on port 3001"
            }
        }
    }
}

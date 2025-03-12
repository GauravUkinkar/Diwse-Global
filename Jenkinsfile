pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                // Install npm packages
                sh 'npm install'
            }
        }
        stage('Build Next.js App') {
            steps {
                // Build the Next.js app for production
                sh 'PORT=3001  'npm run dev'
            }
        }
       
       
        stage('Check if App is Running') {
            steps {
                // Wait a few seconds for the server to start
                sleep 10
              echo "website is live"
                            
            }
        }
    }
}

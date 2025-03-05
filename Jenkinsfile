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
              sh 'nohup npm run start -- -p 3001 -H 0.0.0.0 > nextjs.log 2>&1 &'
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

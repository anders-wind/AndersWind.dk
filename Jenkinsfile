pipeline {
    agent none
    stages {
        stage('BuildSite') {
            agent {
                dockerfile {
                    filename 'Dockerfile'
                    additionalBuildArgs '-t awia/anderswind.dk'
                }
            }
            steps {
                echo "build"
            }
        }
        stage('deploy') {
            agent {
                label 'docker'
            }
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}

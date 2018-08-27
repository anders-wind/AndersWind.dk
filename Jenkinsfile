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
            node {
                steps {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}

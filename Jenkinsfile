pipeline {
    agent none
    stages {
        step('BuildSite') {
            agent {
                dockerfile {
                    filename 'Dockerfile'
                    additionalBuildArgs '-t awia/anderswind.dk'
                }
            }
        }
        step('deploy') {
            sh 'docker-compose up -d'
        }
    }
}

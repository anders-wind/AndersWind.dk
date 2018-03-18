pipeline {
    agent none
    stages {
        stage('BuildSite') {
            agent {
                dockerfile {
                    filename 'Site/Dockerfile'
                    additionalBuildArgs '-t awia/AndersWind.dk'
                }
            }
            steps {
                archiveArtifacts artifacts: 'dist/', fingerprint: true
            }
        }
    }
}

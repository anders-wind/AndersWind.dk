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
                sh 'find .'
                archiveArtifacts artifacts: 'dist/', fingerprint: true
            }
        }
    }
}

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
                sh 'mkdir -p dist && cp -r /app/dist/* dist/'
                archiveArtifacts artifacts: './dist/', fingerprint: true
            }
        }
    }
}

task :default => [:all]
task :build => [:docker_build]
task :all => [ :docker_build]

task docker_build: [:npm_build ] do
    STDOUT.puts "What should the Autograder image version tag be?"
    input = STDIN.gets.strip

    if input == ''
        Rake::Task["docker_build"].reenable
        Rake::Task["docker_build"].invoke
    else
        sh "docker build -t gcr.io/alligrader-15/gradebook:#{input} ."
        sh "gcloud docker push gcr.io/alligrader-15/gradebook:#{input}"
    end
end

task npm_build: [ ] do
    sh "npm build"
end

task deploy: [] do
    sh "kubectl run gradebook --image=gcr.io/alligrader-15/gradebook:v0.0.2 --port=80"
end

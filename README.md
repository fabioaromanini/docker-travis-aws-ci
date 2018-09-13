# Docker Travis Aws CI
A basic react project configured for continuous integration using TravisCI, Docker and AWS Elastic BeanStalk.
This project is **finished**, therefore the Elastic BeanStalk is currently terminated in order to avoid bills. But if you have any doubt, please contact me! It would be a pleasure to restart it, show the steps and how it works.

There are a few points I'd like to make about this repository:
- It uses a multiphase dockerfile in order to generate the build artifact and serve it. I don't encourage this approach, but it's easy and fast to implement, and, as the goal of this project is to test CI with Travis and Docker, I'm ok with an "imperfect" build process. 
- It uses a nginx proxy to serve static content, instead of a CDN, which is faster and commonly used on low-latency front ends. Once again I do not encourage this approach, but my goal is to learn about CI, so I'll keep it like this.
- Finally, with this set of configuration, Travis generates a build on EVERY SINGLE PUSH. It seems a bit of a overkill, but since it's free, I'll leave it like that. If I ever have to pay for the amount of workload that Travis is processing for the Continuous Integration, I'd probably configure it to generate few builds. BUT, this is my first experience with CI/CD, so this approach satisfies me right now, and if I ever want to improve on the CI config, it will be done on another project.

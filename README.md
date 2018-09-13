# docker-travis-aws-ci
A basic react project configured for continuous integration using TravisCI, Docker and AWS.

There are a few points I'd like to make about this repository:
- It uses a multiphase dockerfile in order to generate the build artifact and serve it. I don't encourage this approach, but it's easy and fast to implement, so I'll be using it until I'm able to implement a proper build/deploy process with Jenkins/Kubernetes.
- It uses a nginx proxy to serve static content, instead of a CDN, which is faster and commonly used. Once again I do not encourage this approach, but my goal is to learn about CI, so I'll keep it like this.
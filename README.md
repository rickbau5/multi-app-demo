# multi-app-demo
This is a proof of concept for having multiple apps served from the same Firebase Hosting project. This is accomplished by treating the apps ([app1](/app1/) and [app2](/app2/)) as independent modules, potentially in separate repos. 

The app components are imported into the main app ([main-app](/main-app/)), in this example just by relative paths. The main app is then built and deployed to Firebase Hosting. 

This allows independent development of the apps, while still being able to serve them from the same domain. Any change to app1 or app2 will not cause issues in the other since they are independent components. However, any time a change is made to one app, the main app will need to be rebuilt and redeployed, including the other app with no changes.

## Deploying
```bash
$ firebase deploy --only hosting
```
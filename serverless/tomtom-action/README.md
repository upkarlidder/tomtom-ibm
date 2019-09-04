## Serverless action
### Steps
1. Copy `env.sample.json` file into `env.json`.
2. Add your TomTom API key to the `env.json` file.

### If using ibmcloud CLI
3. change into the current directory
```
cd tomtom-ibm/serverless/tomtom-action
```
4. upload the `index.js` as an action to IBM Cloud Functions
```
ibmcloud fn action create check-accident -P env.json index.js
```
5. test the function from command line
```
ibmcloud fn action invoke check-accident -r                 
{
    "result": {
        "tm": {
            "@id": "1567634260",
            "poi": []
        }
    }
}
```

### If using the UI
3. Log into IBM Cloud.
4. Open Cloud Functions from the left panel.
![open IBM Cloud Function](assets/tomtom-action1.png)

5. Create a new function
![create IBM Cloud Function](assets/tomtom-action2.png)
![open IBM Cloud Function](assets/tomtom-action3.png)
![open IBM Cloud Function](assets/tomtom-action4.png)

6. Copy paste code from index.js into the editor
![open IBM Cloud Function](assets/tomtom-action5.png)

7. Save the code.
8. Go to Parameters and add your TomTom API key as a param
![open IBM Cloud Function](assets/tomtom-action6.png)
![open IBM Cloud Function](assets/tomtom-action7.png)

8. Invoke the function to test
![open IBM Cloud Function](assets/tomtom-action8.png)

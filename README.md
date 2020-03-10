## Microsoft Teams Action

This action allows a message to be sent to a Microsoft Teams webhook.

Instructions for creating a MS Teams webhook can be found here:
https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using


# Usage
```
- uses: FTsbrown/msteams-action@master
      with: 
        TITLE: Hello from GitHub  # the message title
	BODY: 🎉🎉(ﾉ≧∇≦)ﾉ 🎉🎉  # the body of the message
	MS_TEAMS_WEBHOOK: <webhook url> # 
```

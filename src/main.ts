import * as core from "@actions/core";
import request from "request";

async function main() {
	try {
		const title: string = core.getInput("TITLE", { required: true });
		const body: string = core.getInput("BODY", { required: true });
		const teamsWebhook: string = core.getInput("MS_TEAMS_WEBHOOK", { required: true });
		sendTeamsNotification(title, body, teamsWebhook);
	} catch (err) {
		core.error("❌ Failed");
		core.setFailed(err.message);
	}
}


/**
 * Sends a MS Teams notification
 * @param title
 * @param body
 */
async function sendTeamsNotification(title: string, body: string, webhookUrl: string) {
	const data = `{ '@context': 'http://schema.org/extensions', '@type': 'MessageCard', 'title': '${title}', 'text': '${body}' }`;
	request(webhookUrl, {
		method: "POST",
		body: data
	})
}

main();
